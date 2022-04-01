/* eslint-disable no-const-assign */
import * as React from "react";
import Image from "../Components/Atoms/Image";
import GitHubLogo from "../static/images/userStats/gitLogo.png";
import { actionCreators } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import StatFamily from "../Components/Organisms/userStat/StatFamily";
import tw from "tailwind-styled-components";
import EditBlockFamily from "../Components/Organisms/userEdit/EditBlockFamily";
import InvolvedProject from "../Components/Organisms/InvolvedProject/InvolvedProject";

const CategoryBtn = tw.div`
rounded-[0.625rem] p-2.5 text-gray-900 text-sm mb-3 cursor-pointer
${(props) => (props.$isChecked? `bg-slate-200 font-notoB` : `font-noto2`)};
`

export default function UserStat() {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.users.myStats?state.users.myStats:UserStat.defaultProps.stats);
  const [isLeader, setIsLeader] = React.useState(false);
  const [check, setIsChecked] = React.useState(1);
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);
  const [type_num, setType] = React.useState("1");

  UserStat.defaultProps = {
    stats:{
      back:{ability:[],skills:[]},
      front:{ability:[],skills:[]},
      design:{ability:[],skills:[]},
      introduction:"",
      portfolioUrl:[],
      position:"",
      url:"",
      userId:{
        dmRooms:[],
        email:"",
        kakaoId:"",
        nickname:"",
        profileUrl:"",
        suveyCheck:true,
      }
    }
  }

  let userNickName = "";
  let userPosition = "";
  let profileUrl = "";
  let gitId = "";

  console.log("init : ", stats);

  if (stats && stats.length !== 0) {
    userNickName = stats.userId.nickname;
    userPosition = stats.position;
    profileUrl = stats.userId.profileUrl;

    if (profileUrl) {
      const gitURLArr = stats.portfolioUrl[0].url.split("/");
      gitId = gitURLArr[gitURLArr.length - 1];
      console.log("check gitId", gitId);
    }

  }

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }

    //userStatsAPI연동할것
    dispatch(actionCreators.getMyStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const positions = React.useMemo(
    () => [
      { value: "Dev/FrontEnd", label: "Dev/FrontEnd" },
      { value: "Dev/BackEnd", label: "Dev/BackEnd" },
      { value: "Designer", label: "Designer" },
    ],
    []
  );

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
    <>
      <div className="bg-[#E5E5E5]">
        <div className="h-[30vh] bg-[#121414]" />

        <div className="flex justify-center w-screen mt-[-4.063rem]">
          <Image shape="circle" src={profileUrl} size={"130"}></Image>
        </div>
        <text className="flex justify-center mt-8 text-4xl font-notoB text-[#121414]">
          {userNickName}
        </text>
        <text className="flex justify-center mt-4 text-[1.375rem] font-noto2 text-[#71797D]">
          {userPosition}
        </text>

        <div className="flex justify-center">
          <text className="flex content-center mt-8 w-[80vh] text-[0.875rem] font-noto2 text-[#71797D] whitespace-pre-wrap">
            안녕하세요 :) 늘 새로운 도전으로 예술을 그려내는 디자이너
            이도윤입니다. 👋🏻 디자인 뿐만 아니라 개발자와 협업하며 다양한 지식을
            얻어가고 , 도전에 대한 결과물 뿐만 아니라 사람을 알고 함께
            프로젝트를 진행하고 싶어요!
          </text>
        </div>

        <div className="flex justify-center w-screen mt-[4.313rem]">
          <div className="bg-white h-fit w-[12.813rem] mr-7 p-4 box-border rounded-[0.625rem]">
            <CategoryBtn $isChecked={check===1} onClick={()=>{setIsChecked(1)}}>
              마이페이지
            </CategoryBtn>
            <CategoryBtn $isChecked={check===2} onClick={()=>{setIsChecked(2)}}>
              참여프로젝트
            </CategoryBtn>
            <CategoryBtn
              // onClick={() => {
              //   navigate("/userEdit");
              // }}
              $isChecked={check===3} 
              onClick={()=>{setIsChecked(3)}}
            >
              정보수정
            </CategoryBtn>
          </div>

          
          {check===1 &&
            <StatFamily stats={stats} GitHubLogo={GitHubLogo}/>
          }
          
          {check===2 &&
            <InvolvedProject stats={stats}/>
          }

          {check===3 &&
             <EditBlockFamily stats={stats} abilityFront={abilityFront}
             abilityBack={abilityBack} abilityDesigner={abilityDesigner} skillsFront={skillsFront}
             skillsBack={skillsBack} skillsDesigner={skillsDesigner} type_num={type_num}
             checkType={checkType} positions={positions} />
          }

          
        </div>
      </div>
    </>
  );
}
