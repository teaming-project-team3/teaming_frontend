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

export default function Prac() {
  const [isLeader, setIsLeader] = React.useState(false);
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
    <>
      <div className="bg-[#E5E5E5]">
        <div className="flex h-[15vh] w-screen items-center">
          <div className="flex items-center justify-center h-full aspect-square">
            <img src={backArrow} alt={""}></img>
          </div>

          <div className="text-2xl text-black font-noto2">
            동물운동 플랫폼 아임펫뿜뿜
          </div>

          {isLeader && <Button>프로젝트 시작!</Button>}

            <div>
              {users ? (
                <div>
                  <h1>현재 채팅중인 사람들 : </h1>
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
              <div className="w-fit h-[100vh] bg-[#F2F3F7]">
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
              <div className="w-fit h-[100vh] bg-[#F2F3F7]">
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

          {/* <div style={{ width: "300px" }} display="flex">
          <RadarChart curr={curr}></RadarChart>
          </div> */}
          <div className="w-full h-[100vh] bg-green-300 rounded-xl mr-5">
            
            <ChatPrac name={"testID"} room={"testRoom"}></ChatPrac>
            
          </div>
        </div>
      </div>
    </>
  );
}
