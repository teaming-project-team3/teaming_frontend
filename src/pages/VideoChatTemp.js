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
