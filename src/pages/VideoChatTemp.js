import React from "react";
import video from "../static/images/projectRoom/video.png"
import mic from "../static/images/projectRoom/mic.png"

const VideoChatTemp = (props) => {
  

  return (
    <div className="streams">
        <div className="myStream" ref={props.videoGrid}>
          <video
            ref={props.myVideo}
            autoPlay
            playsInline
            className="myFace"
          ></video>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src={video} alt={"video"} className="w-1/4 p-3 cursor-pointer" onClick={props.videoToggle}/>
          <img src={mic} alt={"mic"} className="w-1/4 p-3 cursor-pointer" onClick={props.audioToggle}/>
        </div>
      </div>
  );
};

export default VideoChatTemp;
