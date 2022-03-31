import video from "../../../static/images/projectRoom/video.png";
import mic from "../../../static/images/projectRoom/mic.png";
import videoX from "../../../static/images/projectRoom/videoCancel.png";
import micX from "../../../static/images/projectRoom/micCancel.png";
import tw from "tailwind-styled-components";
import VideoChatTemp from "../../../pages/VideoChatTemp";
import UserCardTemp from "./UserCardTemp";
import { forwardRef } from "react";

const VideoCard = tw.div`
flex flex-col w-1/4 h-[35vh] items-center 
ml-10 mr-10 mt-5 mb-5 rounded-xl
`;

const ButtonsCard = tw.div`
flex items-center justify-center 
w-full h-1/4
${(props) => (props.$isMee ? "" : `hidden`)};
`

const UserView = forwardRef((props, ref) => {

    const {cameraOn, myVideo, profile, handleCamera, handleAudio, cameraStatus, audioStatus, $isMee, user, idx} = props;

  console.log("userView Index, VideoRef", myVideo, idx);

  return (
    <VideoCard className="videoCard">

        <VideoChatTemp
        idx={props.idx}
        user={user}
        $shows={cameraOn}
        $isMee
        id="videoChat1"
        myVideo={myVideo}
        ></VideoChatTemp>

        <UserCardTemp user={user} $shows={!cameraOn} id="userCard1" profile={profile}/>

        <ButtonsCard $isMee={$isMee}>
        <img
            src={cameraStatus? video : videoX}
            alt={"video"}
            className="w-1/4 p-3 cursor-pointer"
            onClick={handleCamera}
        />
        <img
            src={audioStatus? mic : micX}
            alt={"mic"}
            className="w-1/4 p-3 cursor-pointer"
            onClick={handleAudio}
        />
        </ButtonsCard>
  </VideoCard>
  );
});

export default UserView;
