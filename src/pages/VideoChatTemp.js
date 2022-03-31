import React, { forwardRef } from "react";
import tw from "tailwind-styled-components";

const VideoChatGrid = tw.div`
bg-green-300
h-full
${(props) => (props.$shows ? "" : `hidden`)};
`

const VideoChatTemp = forwardRef((props, ref) => {

  console.log("VideoChatTemp props : ", props);
  
  return (
    <VideoChatGrid $shows={props.$shows}>
        <div className="myStream" ref={props.videoGrid}>
          <video
            ref={props.idx===-1 ? props.myVideo :(el) => props.myVideo.current[props.idx] = el}
            autoPlay
            playsInline
            muted={props.$isMee}
            className="myFace"
          ></video>
        </div>
    </VideoChatGrid>
  );
});

export default VideoChatTemp;
