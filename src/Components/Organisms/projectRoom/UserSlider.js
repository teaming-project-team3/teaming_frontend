/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Slider from "react-slick";
import VideoChat from "../../../pages/VideoChat";
import UserCard from "./UserCard";
import io from "socket.io-client";


const ENDPOINT = "http://localhost:5000";
let socket;

function UserSlider(props) {
    
    const {exUser, _onMouseOut, _onMouseOver, videoMode, audioMode} = props;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    

  const location = useLocation();
  const name = "testName";
  const room = "testRoom";
  console.log("Rtcview : ", name, room);
  let myStream; 
  //const MYCHAT_CN = "myChat";
  const NOTICE_CN = "noticeChat";
  const [cameraOptions, setCameraOptions] = useState([]);
  const [messages, setMessage] = useState([])
  let peopleInRoom = 1;
  let pcObj = {};
  const videoGrid = useRef();
  const myVideo = useRef();
  //const peerVideoTemp = useRef();
  const [users, setUsers] = useState(1);
  // const [videoMode, setVideoMode] = useState(false);
  // const [audioMode, setAudioMode] = useState(false);
    //const camerasSelect = document.getElementsByClassName("cameras");
      console.log(users);
  useEffect(() => {
    socket = io(ENDPOINT, {
      //withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    // if (socket.disconnected) {
    //   socket.connect();
    // }

    socket.emit("join_room", room, name);

    socket.on("accept_join", async (userObjArr) => {
      console.log("accept_join", userObjArr);
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
          socket.emit("offer", offer, userObjArr[i].socketId, name);
          writeChat(`__${userObjArr[i].nickname}__`, NOTICE_CN);
        } catch (err) {
          console.error(err);
        }
      }
      writeChat("방에 있습니다.", NOTICE_CN);
      return (socket.disconnect())
    });

    socket.on("offer", async (offer, remoteSocketId, remoteNickname) => {
      console.log("client on.offer : ", remoteNickname)
      try {
        const newPC = createConnection(remoteSocketId, remoteNickname);
        await newPC.setRemoteDescription(offer);
        const answer = await newPC.createAnswer();
        await newPC.setLocalDescription(answer);
        socket.emit("answer", answer, remoteSocketId);
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

    socket.on("leave_room", (leavedSocketId, nickname) => {
      removeVideo(leavedSocketId);
      writeChat(`notice! ${nickname} leaved the room.`, NOTICE_CN);
      --peopleInRoom;
      //sortStreams();
    });
  
    // return (socket.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  function writeChat(message, className = null) {

    setMessage([...messages, message])
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
      console.log("myVideo : ", myStream, myVideo)
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
      socket.emit("ice", event.candidate, remoteSocketId);
    }
  }

  function handleAddStream(event, remoteSocketId, remoteNickname) {
    const peerStream = event.stream;
    paintPeerFace(peerStream, remoteSocketId, remoteNickname);
  }
  
  function paintPeerFace(peerStream, id, remoteNickname) {

    console.log("peerStream : ", peerStream, id, remoteNickname);

    const peerVideo = document.createElement("video");
    console.log("const peerVideo : ", peerVideo)
    peerVideo.setAttribute("autoplay", "playsinline");
    // peerVideo.autoplay = true;
    // peerVideo.playsInline = true;
    peerVideo.width = "400";
    peerVideo.height = "400";
    peerVideo.className = id;

    console.log("const peerVideo : ", peerVideo);
    
    addVideoStream(peerVideo, peerStream);

    videoGrid.current.append(peerVideo);
    setUsers(videoGrid.current.childElementCount);

    //sortStreams();
  }

  function addVideoStream(video, stream) {
    console.log("addVideoStream : ", stream)
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
    console.log("removeVideo : ", leavedSocketId, video)
   let removeVideo;
      for (let i = 0; i < video.length; i++) {
        if (video[i].className === leavedSocketId) {
          removeVideo = video[i];
        }
      }

      removeVideo.remove();
  }


  
    return (
        
          <div className="w-[65vw] bg-red-400 mr-10">
            <Slider {...sliderSettings}>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">

                {videoMode &&
                <div className="w-1/4 h-[35vh] ml-10 mr-10 mt-5 mb-5 rounded-xl">
                    <VideoChat videoMode={videoMode} audioMode={audioMode}/>
                </div>
                }
                {!videoMode &&
                    <UserCard profile={exUser}></UserCard>
                }
                  
                  <UserCard 
                  _onMouseOver={_onMouseOver}
                  _onMouseOut={_onMouseOut}
                  profile={exUser}></UserCard>

                  <UserCard 
                  _onMouseOver={_onMouseOver}
                  _onMouseOut={_onMouseOut}
                  profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
              </div>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
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
              </div>
            </Slider>
          </div>
    );
  }
  
  export default UserSlider;