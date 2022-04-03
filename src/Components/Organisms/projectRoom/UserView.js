import video from "../../../static/images/projectRoom/video.png";
import mic from "../../../static/images/projectRoom/mic.png";
import videoX from "../../../static/images/projectRoom/videoCancel.png";
import micX from "../../../static/images/projectRoom/micCancel.png";
import tw from "tailwind-styled-components";
import VideoChatTemp from "../../../pages/VideoChatTemp";
import UserCardTemp from "./UserCardTemp";
import { forwardRef } from "react";

const VideoCard = tw.div`
flex flex-col items-center h-[17.313rem]
ml-10 mr-10 mt-9 mb-5 rounded-[0.75rem]
`;

const ButtonsCard = tw.div`
flex items-center justify-center 
w-[13.188rem] h-[5.438rem]
${(props) => (props.$isMee ? "" : `hidden`)};
`;

const UserView = forwardRef((props, ref) => {
  const {
    cameraOn,
    myVideo,
    handleCamera,
    handleAudio,
    cameraStatus,
    audioStatus,
    $isMee,
    user,
    stats,
    _onMouseOver,
    idx,
    _onMouseOut,
    userDetailShow,
  } = props;

  console.log("userView Index, VideoRef", stats);

  return (
    <VideoCard className="videoCard">
      <VideoChatTemp
        idx={idx}
        user={user}
        $shows={cameraOn}
        $isMee={$isMee}
        id="videoChat1"
        myVideo={myVideo}
      ></VideoChatTemp>

      <UserCardTemp
        user={user}
        $shows={!cameraOn}
        userDetailShow={userDetailShow}
        id="userCard1"
        stats={stats}
        _onMouseOver={_onMouseOver}
        _onMouseOut={_onMouseOut}
      />

      <ButtonsCard $isMee={$isMee}>
        <img
          src={cameraStatus ? video : videoX}
          alt={"video"}
          className="w-[4.438rem] h-[4.438rem] p-3 cursor-pointer"
          onClick={handleCamera}
        />
        <img
          src={audioStatus ? mic : micX}
          alt={"mic"}
          className="w-[4.438rem] h-[4.438rem] p-3 cursor-pointer"
          onClick={handleAudio}
        />
      </ButtonsCard>
    </VideoCard>
  );
});

export default UserView;
