import * as React from "react";
import { useEffect } from "react";
import exUser from "../static/images/userStats/example_user.png";
// import Input from "../Components/Atoms/Input";
// import Message from "../Components/Atoms/Messages/Message/Message";
// import SendBtn from "../static/images/projectRoom/sendRound.svg";
import ChatPrac from "../Components/Organisms/DMChat/ChatPrac";
//import { useSelector } from "react-redux";
import RadarChart from "../Components/Molecules/RadarChart";
import clip from "../static/images/projectRoom/clip.png"
import ProjectRoomHeader from "../Components/Molecules/ProjectRoomHeader";
import UserSlider from "../Components/Organisms/projectRoom/UserSlider";
import { useLocation } from "react-router";
// import queryString from 'query-string'
// import { useLocation } from "react-router";

export default function ProjectRoom() {
  const [isLeader, setIsLeader] = React.useState(false);
  const [mode, setMode] = React.useState(true);
  const [curr, setCurr] = React.useState("userA");
  //const users = useSelector((state)=>state.users.nowProjectUser)

  const location = useLocation();

  //const { name, room } = queryString.parse(location.search)

  //console.log("users", users)


  //프로젝트ID 및 userID 구현부
  // const room = useSelector((state)=>state.users.nowProject)
  
  const room = location.state;
  const name = localStorage.getItem("userId");

  console.log("room", room);

  useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }
  }, [isLeader]);

  return (
    
      <div className="bg-[#F2F3F7]">

        <ProjectRoomHeader></ProjectRoomHeader>

        <div className="flex w-screen">
          
        <UserSlider name={name} room={room} exUser={exUser} _onMouseOut={()=>{setCurr("userA");}} _onMouseOver={()=>{setCurr("userB")}}></UserSlider>
          
          {mode &&
          <div className="relative w-[25vw] h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2 bg-white pb-7">
            <div className="top-0 flex justify-end w-full h-[3vh] cursor-pointer">
              <img onClick={()=>{setMode(false)}} src={clip} alt={""}></img>
            </div>
            
            <ChatPrac name={name} room={room}></ChatPrac>
          
          </div>
          }

          {!mode &&
          <div className="w-[25vw] h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2">
            <div className="flex justify-end w-full h-[3vh] cursor-pointer">
              <img onClick={()=>{setMode(true)}} src={clip} alt={""}></img>
            </div>
            
            <div className="h-[95vh] ml-11 mr-11">
              <RadarChart curr={curr}></RadarChart>
            </div>  
            
          </div>
          }
          
        
        </div>

      </div>
    
  );
}
