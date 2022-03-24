import * as React from "react";
import { useEffect } from "react";
import UserCard from "../Components/Organisms/projectRoom/UserCard";
import Button from "../element/Button";
import Slider from "react-slick";
import backArrow from "../static/images/projectRoom/backPress.svg";
import exUser from "../static/images/userStats/example_user.png";
// import Input from "../Components/Atoms/Input";
// import Message from "../Components/Atoms/Messages/Message/Message";
// import SendBtn from "../static/images/projectRoom/sendRound.svg";
import ChatPrac from "../Components/Organisms/DMChat/ChatPrac";
import { useSelector } from "react-redux";
import onlineIcon from '../icons/onlineIcon.png'
import RadarChart from "../Components/Molecules/RadarChart";
import clip from "../static/images/projectRoom/clip.png"

export default function ProjectRoom() {
  const [isLeader, setIsLeader] = React.useState(false);
  const [mode, setMode] = React.useState(true);
  const [curr, setCurr] = React.useState("userA");
  const users = useSelector((state)=>state.users.nowProjectUser)

  console.log("users", users)


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
        <div className="flex h-[10vh] w-screen items-center">
          
          <div className="flex items-center justify-center h-full aspect-square">
            <img src={backArrow} alt={""}></img>
          </div>

          <div className="w-[60vw] text-xl text-black font-noto2">
            동물운동 플랫폼 아임펫뿜뿜
          </div>
          
          
          {isLeader && <Button>프로젝트 시작!</Button>}

          <div className="flex m-10 font-noto2 justify-items-center">
            {users ? (
              <div>
                <div className='activeContainer'>
                  <h2>
                    {users.map((name) => {
                      console.log("in users.map usersData", users)
                      return (
                      <div key={name} className='activeItem'>
                        {name}
                        <img alt='Online Icon' src={onlineIcon} />
                      </div>
                    )})}
                  </h2>
                </div>
              </div>
              ) : null}
          </div>


        </div>

        <div className="flex w-screen">
          <div className="w-[65vw] bg-red-400 mr-10">
            <Slider {...sliderSettings}>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">

                  <UserCard profile={exUser}></UserCard>
                  
                  <UserCard 
                  _onMouseOver={() => setCurr("userB")}
                  _onMouseOut={() => {
                    console.log("MouseOver!!")
                    setCurr("userA");
                  }}
                  profile={exUser}></UserCard>

                  <UserCard 
                  _onMouseOver={() => setCurr("userC")}
                  _onMouseOut={() => {
                    setCurr("userA");
                  }}
                  profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
              </div>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
              </div>
            </Slider>
          </div>
          
          {mode &&
          <div className="relative w-full h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2 bg-white pb-7">
            <div className="top-0 flex justify-end w-full h-[3vh]">
              <img onClick={()=>{setMode(false)}} src={clip} alt={""}></img>
            </div>
            
            <ChatPrac name={"testID"} room={"testRoom"}></ChatPrac>
          
          </div>
          }

          {!mode &&
          <div className="w-full h-[80vh] rounded-xl mr-10 pr-10 border-2 p-2">
            <div className="flex justify-end w-full h-[3vh]">
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
