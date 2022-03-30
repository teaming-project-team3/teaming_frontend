/* eslint-disable no-const-assign */
import * as React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import ModalSelect from "./ModalSelect";
import BasicInfo from "../Components/Organisms/userEdit/BasicInfo";
import Specialization from "../Components/Organisms/userEdit/Specialization";
import Portfolio from "../Components/Organisms/userEdit/Portfolio";

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: #000000;
`; // styled-components 이용 스타일륑

export default function UserEdit() {
  const stats = useSelector((state) => state.users.myStats);
  const [type_num, setType] = React.useState("1");

  //const [isLeader, setIsLeader] = React.useState(false);
  const [userNickName, setUserNickName] = React.useState("");
  const [intro, setIntro] = React.useState("");
  const [userPosition, setUserPosition] = React.useState("");
  const [profileUrl, setProfileUrl] = React.useState("");
  const [gitId, setGitId] = React.useState("");
  const [portfolio1, setPortfolio1] = React.useState([]);
  const [portfolio2, setPortfolio2] = React.useState([]);
  const [portfolio3, setPortfolio3] = React.useState([]);
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const positions = React.useMemo(
    () => [
      { value: "Dev/FrontEnd", label: "Dev/FrontEnd" },
      { value: "Dev/BackEnd", label: "Dev/BackEnd" },
      { value: "Designer", label: "Designer" },
    ],
    []
  );

  console.log("init : ", stats, portfolio1, portfolio2,portfolio3);

  if ( stats && stats.length !== 0) {
    // setUserNickName(stats.userId.nickname);
    // setUserPosition(stats.position);
    // setProfileUrl(stats.userId.profileUrl);

    // if (profileUrl) {
    //   const gitURLArr = stats.portfolioUrl[0].url.split("/");
    //   setGitId(gitURLArr[gitURLArr.length - 1]);
    // }

    // setPortfolio1(stats.portfolioUrl[1]);
    // setPortfolio2(stats.portfolioUrl[2]);
    // setPortfolio3(stats.portfolioUrl[3]);

    console.log("check");
  }

  React.useEffect(() => {
    // if (isLeader === localStorage.getItem("userId")) {
    //   setIsLeader(true);
    // }

    //userStatsAPI연동할것
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkType = (e) => {
    if (e.target.value === "1") {
      setType("1");
    } else if (e.target.value === "2") {
      setType("2");
    } else if (e.target.value === "3") {
      setType("3");
    }
  };

  return (
    <div className="bg-[#E5E5E5] pb-10">
      <div className="h-[30vh] bg-[#121414]" />

      <div className="flex justify-center w-screen mt-[4.313rem] mb-10">
        <div className="bg-white h-fit w-[12.813rem] mr-7 p-4 box-border rounded-[0.625rem]">
          <div className="bg-slate-200 rounded-[0.625rem] p-2.5 font-notoB text-gray-900 text-sm mb-3">
            나의 프로필
          </div>
          <div className="rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm mb-3">
            참여프로젝트
          </div>
        </div>

        {/* 기본정보 블럭 */}
        <BasicInfo nickName={stats.userId.nickname} setUserNickName={setUserNickName} setIntro={setIntro} setGitId={setGitId}/>
        
      </div>

        <Specialization position={stats.position} positions={positions} abilityFront={abilityFront} 
        abilityBack={abilityBack} abilityDesigner={abilityDesigner} skillsFront={skillsFront} 
        skillsBack={skillsBack} skillsDesigner={skillsDesigner} type_num={type_num} 
        setUserPosition={setUserPosition} checkType={checkType}/>

      <div className="flex justify-center w-screen mb-10 h-fit">
        <div className="mt-[2.188rem] ml-[14.5rem] h-full w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
          <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
            포트폴리오
          </div>

          <Portfolio/>

          <div className="flex justify-center w-full">
            <div className="w-1/3 p-3 text-center text-white bg-purple-400 rounded font-noto2">
              <button>적용 하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
