import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import queryString from "query-string";
import { useRef } from "react";
import Messages from "../Components/Atoms/Messages/Messages"

const ENDPOINT = "http://localhost:5000";
let socket;

const VideoChat = (props) => {
  const location = useLocation();
  const query = queryString.parse(location.search);
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
  const peerVideoTemp = useRef();
  const [users, setUsers] = useState(1);
  const [videoMode, setVideoMode] = useState(false);
  const [audioMode, setAudioMode] = useState(false);
    //const camerasSelect = document.getElementsByClassName("cameras");

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

  // useEffect(()=>{

  //   if (props.videoMode!==videoMode) {
  //     console.log("videoMode", props.videoMode, videoMode);
  //       myStream //
  //         .getAudioTracks()
  //         .forEach((track) => (track.enabled = !track.enabled));
  //       setVideoMode(props.videoMode);
  //     }
      
  //   if (props.audioMode!==audioMode) {
  //       myStream //
  //         .getVideoTracks()
  //         .forEach((track) => (track.enabled = !track.enabled));
  //       setAudioMode(props.audioMode);
  //     }
  

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[props.videoMode, props.AudioMode])
  

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
    <div className="streams">
        <div className="myStream" ref={videoGrid}>
          <video
            ref={myVideo}
            autoPlay
            playsInline
            className="myFace"
          ></video>
          <h3>userNickName</h3>
        </div>
      </div>
  );
};

export default VideoChat;
