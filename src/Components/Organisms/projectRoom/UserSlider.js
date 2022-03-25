/* eslint-disable no-unused-vars */
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Slider from "react-slick";
import VideoChat from "../../../pages/VideoChat";
import UserCard from "./UserCard";
import io from "socket.io-client";
import VideoChatTemp from "../../../pages/VideoChatTemp";
import tw from "tailwind-styled-components";
import video from "../../../static/images/projectRoom/video.png";
import mic from "../../../static/images/projectRoom/mic.png";
import UserCardTemp from "./UserCardTemp";
import UserView from "./UserView";
import { Endpoint } from "aws-sdk";

const VideoCard = tw.div`
flex flex-col w-1/4 h-[35vh] items-center 
ml-10 mr-10 mt-5 mb-5 rounded-xl
`;

const UserCardTw = tw.div`
w-1/4 h-[35vh] ml-10 mr-10 
mt-5 mb-5 rounded-xl
`;

//const ENDPOINT = "http://localhost:5000";
const ENDPOINT = process.env.REACT_APP_BASE_URL_WJ + "/webrtc";
let socket;

function UserSlider(props) {
  const { exUser, _onMouseOut, _onMouseOver, videoMode, audioMode } = props;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let checker = true;
  const history = useNavigate();

  const location = useLocation();
  //const query = queryString.parse(location.search);
  const name = props.name;
  //const name = localStorage.getItem("userId");
  const room = props.room;
  console.log("Rtcview : ", name, room);
  let myStream;
  const MYCHAT_CN = "myChat";
  const NOTICE_CN = "noticeChat";
  const [cameraOptions, setCameraOptions] = useState([]);
  const [messages, setMessage] = useState([]);
  let peopleInRoom = 1;
  let pcObj = {};
  const videoGrid = useRef();
  const myVideo = useRef();
  const videoRef = useRef([]);
  const peerVideoTemp = useRef();
  const [users, setUsers] = useState(1);
  const [cameraOn, setCameraOn] = useState(true);
  const [audioOn, setAudioOn] = useState(false);
  const [user1, setUser1] = useState(true);
  const [userList, setUserList] = useState([]);

  console.log("userList", userList);
  //const videoRef = useRef(userList.map(() => createRef()));

  //const camerasSelect = document.getElementsByClassName("cameras");

  
  useEffect(() => {

    socket = io(ENDPOINT, {
      //withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    if (socket.disconnected) {
      socket.connect();
    }
    
    socket.emit("join_room", { roomName: room, nickName: name });

    socket.on("accept_join", async (userObjArr) => {
      console.log("accept_join", userObjArr);
      setUserList(userObjArr);
      await initCall();

      const length = userObjArr.length;
      if (length === 1) {
        return;
      }

      writeChat("Notice!", NOTICE_CN);
      for (let i = 0; i < length - 1; ++i) {
        try {
          const newPC = createConnection(
            userObjArr[i].socketId,
            userObjArr[i].nickName,
            i
          );
          const offer = await newPC.createOffer();
          await newPC.setLocalDescription(offer);
          socket.emit("offer", {
            offer: offer,
            localNickName: name,
            remoteSocketId: userObjArr[i].socketId,
          });
          writeChat(`__${userObjArr[i].nickname}__`, NOTICE_CN);
        } catch (err) {
          console.error(err);
        }
      }
      writeChat("방에 있습니다.", NOTICE_CN);
    });

    socket.on("offer", async (offer, remoteSocketId, remoteNickname) => {
      console.log("client on.offer : ", remoteNickname);
      try {
        const newPC = createConnection(remoteSocketId, remoteNickname);
        await newPC.setRemoteDescription(offer);
        const answer = await newPC.createAnswer();
        await newPC.setLocalDescription(answer);
        socket.emit("answer", {
          answer: answer,
          remoteSocketId: remoteSocketId,
        });
        writeChat(`notice! __${remoteNickname}__ joined the room`, NOTICE_CN);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("answer", async (answer, remoteSocketId) => {
      await pcObj[remoteSocketId].setRemoteDescription(answer);
    });

    socket.on("ice", async (ice, remoteSocketId) => {
      await pcObj[remoteSocketId].addIceCandidate(ice);
    });

    socket.on("videoON", async (nickName, videoStatus) => {
      console.log("videoON", nickName)
    const newList = userList.filter((user) => {
      if(user.nickName===nickName){
        return {...user, video : true};
      }else return user;
    })  
    
    setUserList(newList);
    
    });

    socket.on("videoOFF", async (nickName, videoStatus) => {
      console.log("videoOFF", nickName, videoStatus)
      const newList = userList.filter((user) => {
        if(user.nickName===nickName){
          return {...user, video : false};
        }else return user;
      })  
      
      setUserList(newList);
    
    });

    socket.on("leave_room", (leavedSocketId, nickName) => {
      console.log("leave_room");
      removeVideo(nickName);
      writeChat(`notice! ${nickName} leaved the room.`, NOTICE_CN);
      --peopleInRoom;
      //sortStreams();
    });

    return (()=>{
      console.log("새로고침 할 때 불러지나?");
      socket.emit("leaveRoom", {roomName: room});
      socket.disconnect(true);
      }
      )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, location.pathname]);

  function writeChat(message, className = null) {
    setMessage([...messages, message]);
  }

  async function getCameras() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter((device) => device.kind === "videoinput");
      const currentCamera = myStream.getVideoTracks();
      console.log("cameras : ", cameras, currentCamera);

      cameras.forEach((camera) => {
        const option = document.createElement("option");
        option.value = camera.deviceId;
        option.innerText = camera.label;

        if (currentCamera.label === camera.label) {
          option.selected = true;
        }

        //camerasSelect.appendChild(option);
      });
      console.log("cameras[0].deviceId : ", cameras[0].deviceId);
      setCameraOptions([
        ...cameraOptions,
        { value: cameras[0].deviceId, label: cameras[0].deviceId },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMedia(deviceId) {
    const initialConstraints = {
      audio: true,
      video: { facingMode: "user" },
    };
    const cameraConstraints = {
      audio: true,
      video: { deviceId: { exact: deviceId } },
    };

    try {
      myStream = await navigator.mediaDevices.getUserMedia(
        deviceId ? cameraConstraints : initialConstraints
      );

      // stream을 mute하는 것이 아니라 HTML video element를 mute한다.
      console.log("myVideo : ", myStream, myVideo);
      addVideoStream(myVideo.current, myStream);
      //videoGrid.current.append(myVideo.current);

      if (!deviceId) {
        // mute default
        myStream //
          .getAudioTracks()
          .forEach((track) => (track.enabled = false));

        await getCameras();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function initCall() {
    await getMedia();
  }

  function createConnection(remoteSocketId, remoteNickname, idx) {
    const myPeerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
            "stun:stun3.l.google.com:19302",
            "stun:stun4.l.google.com:19302",
          ],
        },
      ],
    });
    myPeerConnection.addEventListener("icecandidate", (event) => {
      handleIce(event, remoteSocketId);
    });
    myPeerConnection.addEventListener("addstream", (event) => {
      handleAddStream(event, remoteSocketId, remoteNickname, idx);
    });
    // myPeerConnection.addEventListener(
    //   "iceconnectionstatechange",
    //   handleConnectionStateChange
    // );
    myStream //
      .getTracks()
      .forEach((track) => myPeerConnection.addTrack(track, myStream));

    pcObj[remoteSocketId] = myPeerConnection;

    ++peopleInRoom;
    //sortStreams();
    return myPeerConnection;
  }

  function handleIce(event, remoteSocketId) {
    if (event.candidate) {
      socket.emit("ice", {
        ice: event.candidate,
        remoteSocketId: remoteSocketId,
      });
    }
  }

  function handleAddStream(event, remoteSocketId, remoteNickname, idx) {
    const peerStream = event.stream;
    paintPeerFace(peerStream, remoteSocketId, remoteNickname, idx);
  }

  function paintPeerFace(peerStream, id, remoteNickname, idx) {
    console.log("peerStream : ", peerStream, userList, idx, remoteNickname);

    
    if(idx===null){
      //[{nickname:dd. asdf:asdf},{nickname:cc. asdf:asdf}]
    //List에 있는 index number에 따라 배치

      for(let i=0;i<userList.length;i++){
        if(userList[i].nickName===remoteNickname){
          idx = i
        }
      }

      console.log("userList", idx)
    }

      console.log("addVideoStream in idx", userList, idx, videoRef);

      addVideoStream(videoRef.current[idx], peerStream);
      console.log("video on/off?", peerStream.getVideoTracks()[0].enabled);
      setUser1(peerStream.getVideoTracks()[0].enabled);

  }

  function addVideoStream(video, stream) {
    console.log("addVideoStream : ", stream, video);
    video.srcObject = stream;

    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
  }

  // function sortStreams() {
  //   const streams = document.querySelector("#streams");
  //   const streamArr = streams.querySelectorAll("div");
  //   streamArr.forEach((stream) => (stream.className = `people${peopleInRoom}`));
  // }

  function removeVideo(leavedName) {
    console.log("removeVideo : ", leavedName, video);

    const newList = userList.filter((item)=>{
      return item.nickName !== leavedName
    })

    setUserList(newList);
  }

  const handleCamera = async () => {
    setCameraOn((prev) => !prev);

    if (cameraOn) {
      console.log("videoOn->off");
      let video = myVideo.current.srcObject.getVideoTracks();
      video[0].enabled = false;
      socket.emit("videoOFF", { nickName: name, roomName : room });
      console.log("before disconnecting")
      //socket.emit("leaveRoom", { userId: localStorage.getItem("userId") })
      //socket.disconnect();
    } else {
      console.log("videoOff->on");
      let video = myVideo.current.srcObject.getVideoTracks();
      video[0].enabled = true;
      socket.emit("videoON", { nickName: name, roomName : room });
    }
  };

  const handleAudio = () => {
    setAudioOn((prev) => !prev);
    if (audioOn) {
      console.log("audioOn->off");
      let video = myVideo.current.srcObject.getAudioTracks();
      video[0].enabled = false;
      socket.emit("audioON", { userId: localStorage.getItem("userId") });
    } else {
      console.log("audioOff->On");
      let video = myVideo.current.srcObject.getAudioTracks();
      video[0].enabled = true;
      socket.emit("audioOFF", { userId: localStorage.getItem("userId") });
    }
  };

  return (
    <div className="w-[65vw] bg-red-400 mr-10">
      <Slider {...sliderSettings}>
        <div className="w-fit h-[80vh] bg-[#F2F3F7]">
          <div className="flex flex-wrap">
            

            {userList.map((user, idx)=>{
              console.log("idx in map!!!", idx)
              //본인만 버튼 뜨도록
              if(user.nickName===name){
              return(<UserView
              idx={-1}
              isMe
              user={user}
              cameraOn={cameraOn}
              myVideo={myVideo}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
              cameraStatus={cameraOn}
              audioStatus={audioOn}
              ></UserView>)
              }else{
              //타인
              return(<UserView
              idx={idx}
              user={user}
              cameraOn={cameraOn}
              myVideo={videoRef}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
              ></UserView>)
              }
            })
            }

            {/* <UserView
              isMe
              cameraOn={cameraOn}
              myVideo={myVideo}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
              cameraStatus={cameraOn}
              audioStatus={audioOn}
            ></UserView>

            <UserView
              cameraOn={cameraOn}
              myVideo={video2Ref}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
            ></UserView>

            <UserView
              cameraOn={cameraOn}
              myVideo={video3Ref}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
            ></UserView> */}

          </div>
        </div>

        {/* <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default UserSlider;
