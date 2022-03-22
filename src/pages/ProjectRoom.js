import * as React from "react";
import RoomChat from "../Components/Organisms/RoomChat";
import UserCard from "../Components/Organisms/UserCard";
import Button from "../element/Button";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import backArrow from "../static/images/projectRoom/backPress.svg";

export default function Prac() {
  const navigate = useNavigate();
  const [isLeader, setIsLeader] = React.useState(false);
  const [curr, setCurrUser] = React.useState("userA");


  console.log(curr)

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
        </div>

        <Slider {...sliderSettings}>
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "300px", margin: "auto" }}>
                <UserCard userId={"userA"} />
              </div>

              <div
                style={{ width: "300px", margin: "auto" }}
                onMouseOver={() => setCurrUser("userB")}
                onMouseOut={() => {
                  setCurrUser("userA");
                }}
                onClick={() => {
                  navigate("/userStats");
                }}
              >
                <UserCard userId={"userB"} />
              </div>

              <div
                style={{ width: "300px", margin: "auto" }}
                onMouseOver={() => setCurrUser("userC")}
                onMouseOut={() => {
                  setCurrUser("userA");
                }}
              >
                <UserCard userId={"userC"} />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{ width: "300px", margin: "auto" }}
                onMouseOver={() => setCurrUser("userC")}
                onMouseOut={() => {
                  setCurrUser("userA");
                }}
              >
                <UserCard userId={"userC"} />
              </div>

              <div
                style={{ width: "300px", margin: "auto" }}
                onMouseOver={() => setCurrUser("userC")}
                onMouseOut={() => {
                  setCurrUser("userA");
                }}
              >
                <UserCard userId={"userC"} />
              </div>

              <div
                style={{ width: "300px", margin: "auto" }}
                onMouseOver={() => setCurrUser("userC")}
                onMouseOut={() => {
                  setCurrUser("userA");
                }}
              >
                <UserCard userId={"userC"} />
              </div>
            </div>
          </div>
        </Slider>

        <div>
          <RoomChat></RoomChat>
        </div>

        {/* <div style={{ width: "300px" }} display="flex">
          <RadarChart curr={curr}></RadarChart>
        </div> */}

        {isLeader && <Button>프로젝트 시작!</Button>}
      </div>
    </>
  );
}
