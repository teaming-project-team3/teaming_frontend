/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
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

  const location = useLocation();
  //const query = queryString.parse(location.search);
  //const name = "testName";
  const name = localStorage.getItem("userId");
  const room = "testRoom";
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
  const video2Ref = useRef();
  const video3Ref = useRef();
  const peerVideoTemp = useRef();
  const [users, setUsers] = useState(1);
  const [cameraOn, setCameraOn] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [user1, setUser1] = useState(true);
  const user1Stream = useRef();
  const [userList, setUserList] = useState([]);
  console.log("userList", userList);
  //const camerasSelect = document.getElementsByClassName("cameras");

  useEffect(() => {
    console.log("useEffect start");
    socket = io(ENDPOINT, {
      //withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    // if (socket.disconnected) {
    //   socket.connect();
    // }
    console.log("before joinroom");
    socket.emit("join_room", { roomName: room, nickName: name });
    console.log("after joinroom");

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
            userObjArr[i].nickname
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

    socket.on("videoON", async (userId) => {
      setUser1(true);
    });

    socket.on("videoOFF", async (userId) => {
      setUser1(false);
    });

    socket.on("leave_room", (leavedSocketId, nickname) => {
      console.log("leave_room");
      removeVideo(leavedSocketId);
      writeChat(`notice! ${nickname} leaved the room.`, NOTICE_CN);
      --peopleInRoom;
      //sortStreams();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function createConnection(remoteSocketId, remoteNickname) {
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
      handleAddStream(event, remoteSocketId, remoteNickname);
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

  function handleAddStream(event, remoteSocketId, remoteNickname) {
    const peerStream = event.stream;
    paintPeerFace(peerStream, remoteSocketId, remoteNickname);
  }

  function paintPeerFace(peerStream, id, remoteNickname) {
    console.log("peerStream : ", peerStream, id, remoteNickname);

    if (checker) {
      addVideoStream(video2Ref.current, peerStream);
      console.log("video on/off?", peerStream.getVideoTracks()[0].enabled);
      setUser1(peerStream.getVideoTracks()[0].enabled);
      user1Stream.current = peerStream;
      checker = false;
    } else {
      addVideoStream(video3Ref.current, peerStream);
    }
    //videoGrid.current.append(peerVideo);
    //setUsers(videoGrid.current.childElementCount);

    //sortStreams();
  }

  function addVideoStream(video, stream) {
    console.log("addVideoStream : ", stream);
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

  function removeVideo(leavedSocketId) {
    const video = document.querySelectorAll("video");
    console.log("removeVideo : ", leavedSocketId, video);

    let removeVideo;
    for (let i = 0; i < video.length; i++) {
      if (video[i].className === leavedSocketId) {
        removeVideo = video[i];
      }
    }

    removeVideo.remove();
  }

  const handleCamera = async () => {
    setCameraOn((prev) => !prev);

    if (cameraOn) {
      console.log("videoOn->off");
      let video = myVideo.current.srcObject.getVideoTracks();
      video[0].enabled = false;
      socket.emit("videoON", { userId: localStorage.getItem("userId") });
    } else {
      console.log("videoOff->on");
      let video = myVideo.current.srcObject.getVideoTracks();
      video[0].enabled = true;
      socket.emit("videoOFF", { userId: localStorage.getItem("userId") });
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
          <div className="flex">
            <UserView
              cameraOn={cameraOn}
              myVideo={myVideo}
              profile={exUser}
              handleCamera={handleCamera}
              handleAudio={handleAudio}
            ></UserView>

            {/* 유저1 */}
            <VideoCard isShow={user1} className="videoCard">
              <VideoChatTemp myVideo={video2Ref} value={"LWJ"}></VideoChatTemp>
            </VideoCard>

            <UserCard
              isShow={!user1}
              id="userCard1"
              profile={exUser}
              videoToggle={handleCamera}
              audioToggle={handleAudio}
            />

            <div className="flex w-1/4 h-[35vh] items-center ml-10 mr-10 mt-5 mb-5 rounded-xl">
              <VideoChatTemp myVideo={video3Ref} value={"JMS"}></VideoChatTemp>
            </div>
          </div>

          <div className="flex">
            <UserCard
              _onMouseOver={_onMouseOver}
              _onMouseOut={_onMouseOut}
              profile={exUser}
            ></UserCard>

            <UserCard profile={exUser}></UserCard>

            <UserCard profile={exUser}></UserCard>
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
