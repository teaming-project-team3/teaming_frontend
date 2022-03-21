import * as React from "react";
import UserCard from "../Components/Organisms/projectRoom/UserCard";
import Button from "../element/Button";
import Slider from "react-slick";
import backArrow from "../static/images/projectRoom/backPress.svg";
import exUser from "../static/images/userStats/example_user.png";
import Input from "../Components/Atoms/Input";
import Message from "../Components/Atoms/Messages/Message/Message"
import SendBtn from "../static/images/projectRoom/sendRound.svg"

export default function ProjectRoom() {
  const [isLeader, setIsLeader] = React.useState(false);

  React.useEffect(() => {
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
        </div>
        
        <div className="flex w-screen">
          <div className="w-[80vw] bg-red-400">
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
          <div className="w-full h-[100vh] bg-green-300 rounded-xl">

          <div className="h-[90vh] bg-yellow-300">
            <Message message={{text:"test",user:"user"}} name={"name"}></Message>
          </div>

          <div className="flex h-[10vh] items-center bg-white">
            <div className="h-1/2">
            <Input></Input>
            </div>
            <div className="h-fit">
              <img src={SendBtn} alt={"button"}></img>
            </div>
          </div>

          </div>
        </div>

        
      </div>
    </>
  );
}

