import * as React from "react";
import { useEffect } from "react";
import exUser from "../static/images/userStats/example_user.png";
// import Input from "../Components/Atoms/Input";
// import Message from "../Components/Atoms/Messages/Message/Message";
// import SendBtn from "../static/images/projectRoom/sendRound.svg";
import ChatPrac from "../Components/Organisms/DMChat/ChatPrac";
import { useSelector } from "react-redux";
import RadarChart from "../Components/Molecules/RadarChart";
import clip from "../static/images/projectRoom/clip.png"
import ProjectRoomHeader from "../Components/Molecules/ProjectRoomHeader";
import UserSlider from "../Components/Organisms/projectRoom/UserSlider";
import video from "../static/images/projectRoom/video.png"
import mic from "../static/images/projectRoom/mic.png"

export default function ProjectRoom() {
  const [isLeader, setIsLeader] = React.useState(false);
  const [mode, setMode] = React.useState(true);
  const [curr, setCurr] = React.useState("userA");
  const users = useSelector((state)=>state.users.nowProjectUser)
  const [toggleVideo, setToggleVideo] = React.useState(false);
  const [toggleAudio, setToggleAudio] = React.useState(false);


  console.log("users", users)

  const toggleVideoFunc = () => {
    
    if(toggleVideo){
      setToggleVideo(false);
    }else{
      setToggleVideo(true);
    }

  }

  const toggleAudioFunc = () => {
    
    if(toggleVideo){
      setToggleVideo(false);
    }else{
      setToggleVideo(true);
    }

  }


  //프로젝트ID 및 userID 구현부
  // const room = useSelector((state)=>state.users.nowProject)

  // const name = localStorage.getItem("userId")

  useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }
  }, [isLeader]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
      <div className="bg-[#F2F3F7]">

        <ProjectRoomHeader users={users}></ProjectRoomHeader>

        <div className="flex w-screen">
          
        <UserSlider videoMode={toggleVideo} audioMode={toggleAudio} exUser={exUser} _onMouseOut={()=>{setCurr("userA");}} _onMouseOver={()=>{setCurr("userB")}}></UserSlider>
          
          {mode &&
          <div className="relative w-full h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2 bg-white pb-7">
            <div className="top-0 flex justify-end w-full h-[3vh] cursor-pointer">
              <img onClick={()=>{setMode(false)}} src={clip} alt={""}></img>
            </div>
            
            {/* <ChatPrac name={"testID"} room={"testRoom"}></ChatPrac> */}
          
          </div>
          }

          {!mode &&
          <div className="w-full h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2">
            <div className="flex justify-end w-full h-[3vh] cursor-pointer">
              <img onClick={()=>{setMode(true)}} src={clip} alt={""}></img>
            </div>
            
            <div className="h-[95vh] ml-11 mr-11">
              <RadarChart curr={curr}></RadarChart>
            </div>  
            
          </div>
          }
          
        
        </div>

          <div className="flex justify-center w-screen h-fit">
            <img src={mic} alt={"mic"} className="mr-2"  onClick={()=>{toggleAudioFunc()}}></img>
            <img src={video} alt={"video"} className="ml-2" onClick={()=>{toggleVideoFunc()}}></img>
          </div>

      </div>
    
  );
}
