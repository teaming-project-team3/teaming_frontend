import React from "react";
import tw from "tailwind-styled-components";

const VideoChatGrid = tw.div`
bg-green-300
h-full
${(props) => (props.isShow ? "" : `hidden`)};
`

const VideoChatTemp = (props) => {

  console.log("VideoChatTemp props : ", props);
  
  return (
    <VideoChatGrid isShow={props.isShow}>
        <div className="myStream" ref={props.videoGrid}>
          <video
            ref={props.idx===-1 ? props.myVideo :(el) => props.myVideo.current[props.idx] = el}
            autoPlay
            playsInline
            className="myFace"
          ></video>
        </div>
    </VideoChatGrid>
  );
};

export default VideoChatTemp;
