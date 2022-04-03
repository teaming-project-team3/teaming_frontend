import React, { forwardRef } from "react";
import tw from "tailwind-styled-components";

const VideoChatGrid = tw.div`
flex bg-black
w-[19.125rem] h-[14.625em] rounded-[0.75rem]
drop-shadow-xl
${(props) => (props.$shows ? "" : `hidden`)};
`;

const VideoChatTemp = forwardRef((props, ref) => {
  console.log("MUTED!!!!TEST!! : ", props.$isMee);

  return (
    <VideoChatGrid $shows={props.$shows}>
      <div className="myStream flex rounded-[0.75rem]" ref={props.videoGrid}>
        <video
          ref={
            props.idx === -1
              ? props.myVideo
              : (el) => (props.myVideo.current[props.idx] = el)
          }
          autoPlay
          playsInline
          muted={props.$isMee}
          className="myFace h-[14.625em] rounded-[0.75rem]"
        ></video>
      </div>
    </VideoChatGrid>
  );
});

export default VideoChatTemp;
