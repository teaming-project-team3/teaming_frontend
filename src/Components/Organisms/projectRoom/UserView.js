import video from "../../../static/images/projectRoom/video.png";
import mic from "../../../static/images/projectRoom/mic.png";
import tw from "tailwind-styled-components";
import VideoChatTemp from "../../../pages/VideoChatTemp";
import UserCardTemp from "./UserCardTemp";

const VideoCard = tw.div`
flex flex-col w-1/4 h-[35vh] items-center 
ml-10 mr-10 mt-5 mb-5 rounded-xl
`;

function UserView(props) {

    const {cameraOn, myVideo, profile, handleCamera, handleAudio} = props;

  console.log("userCard props isShow", props.isShow);

  return (
    <VideoCard className="videoCard">

        <VideoChatTemp
        isShow={cameraOn}
        id="videoChat1"
        myVideo={myVideo}
        ></VideoChatTemp>

        <UserCardTemp isShow={!cameraOn} id="userCard1" profile={profile}/>

        <div className="flex items-center justify-center w-full h-1/4">
        <img
            src={video}
            alt={"video"}
            className="w-1/4 p-3 cursor-pointer"
            onClick={handleCamera}
        />
        <img
            src={mic}
            alt={"mic"}
            className="w-1/4 p-3 cursor-pointer"
            onClick={handleAudio}
        />
        </div>
  </VideoCard>
  );
}

export default UserView;
