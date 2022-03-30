/* eslint-disable no-const-assign */
import * as React from "react";
import RadarChart from "../Components/Molecules/RadarChart";
import Image from "../Components/Atoms/Image";
import FortFolioCard from "../Components/Organisms/FortFolioCard";
import GitHubLogo from "../static/images/userStats/gitLogo.png";
import UrlLink from "../Components/Molecules/UrlLink";
import { actionCreators } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import ProficiencyBadge from "../Components/Molecules/ProficiencyBadge";
import { useNavigate } from "react-router";

export default function UserStat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.users.myStats);
  const [isLeader, setIsLeader] = React.useState(false);
  
  let userNickName = "";
  let userPosition = "";
  let profileUrl = "";
  let gitId = "";
  let portfolio = null;
  let portfolio0 = null;
  let portfolio1 = null;
  let portfolio2 = null;
  let portfolio3 = null;
  let frontAbility = null;
  let frontSkills = null;
  let backAbility = null;
  let backSkills = null;
  let designAbility = null;
  let designSkills = null;

  console.log("init : ", stats);

  if ( stats && stats.length !== 0) {
    userNickName = stats.userId.nickname;
    userPosition = stats.position;
    profileUrl = stats.userId.profileUrl;

    if(profileUrl){
    const gitURLArr = stats.portfolioUrl[0].url.split("/");
    gitId = gitURLArr[gitURLArr.length - 1];
    console.log("check gitId", gitId);
    }
    
    portfolio0 = stats.portfolioUrl[0];
    portfolio1 = stats.portfolioUrl[1];
    portfolio2 = stats.portfolioUrl[2];
    portfolio3 = stats.portfolioUrl[3];

    console.log("portfolio", portfolio);

    if(stats.front.ability){
      frontAbility = stats.front.ability;
    }
    if(stats.front.skills){
      frontSkills = stats.front.skills;
    }
    if(stats.back.ability){
      backAbility = stats.back.ability;
    }
    if(stats.back.skills){
      backSkills = stats.back.skills;
    }
    if(stats.design.ability){
      designAbility = stats.design.ability;
    }
    if(stats.design.skills){
      designSkills = stats.design.skills;
    }
    console.log("check");
  }

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }

    //userStatsAPI연동할것
    dispatch(actionCreators.getMyStats());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <div className="bg-slate-200 rounded-[0.625rem] p-2.5 font-notoB text-gray-900 text-sm mb-3">
              포트폴리오
            </div>
            <div className="rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm mb-3">
              전문분야
            </div>
            <div className="rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm">
              URL
            </div>
            <div onClick={()=>{navigate('/userEdit')}} className="cursor-pointer rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm bg-slate-200">
              정보수정
            </div>
          </div>

          {/* 포트폴리오 블럭 */}
          <div className="h-[67.625rem] w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              포트폴리오
            </div>

            {/* 깃헙 잔디 */}
            <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">
              <img src={`https://ghchart.rshah.org/${gitId}`} alt="" />
            </div>

            {portfolio==null &&
              <div className="w-full text-center">
                포트폴리오가 없습니다. 당신의 포트폴리오를 추가해보세요!
              </div>
            }

            {portfolio1!==undefined && portfolio1 && (
              <FortFolioCard
                title={portfolio1.title}
                description={portfolio1.description}
                imageUrl={portfolio1.imageUrl}
                url={portfolio1.url}
                period={portfolio1.period}
              ></FortFolioCard>
            )}

            {portfolio2 && portfolio2!==undefined && (
              <FortFolioCard
                title={portfolio2.title}
                description={portfolio2.description}
                imageUrl={portfolio2.imageUrl}
                url={portfolio2.url}
                period={portfolio2.period}
              ></FortFolioCard>
            )}

            {portfolio3 && portfolio3!==undefined && (
              <FortFolioCard
                title={portfolio3.title}
                description={portfolio3.description}
                imageUrl={portfolio3.imageUrl}
                url={portfolio3.url}
                period={portfolio3.period}
              ></FortFolioCard>
            )}
          </div>
        </div>

        <div className="flex justify-center w-screen h-screen mb-10">
          <div className="mt-[2.188rem] ml-[14.5rem] h-full w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              전문분야
            </div>

            <div className="flex mt-[1rem] ml-[1.8rem] h-full">
              <div className="flex flex-wrap w-3/5">

                <ProficiencyBadge position={"Front-End"} ability={frontAbility} skills={frontSkills}/>
                
                <ProficiencyBadge position={"Back-End"} ability={backAbility} skills={backSkills}/>

                <ProficiencyBadge position={"Design"} ability={designAbility} skills={designSkills}/>
                
              </div>

              <div className="h-[15.938rem] w-[15.938rem]">
                <RadarChart curr={"userA"}></RadarChart>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mt-[2.188rem] ml-[23.5rem] mb-[2.188rem] h-[26.438rem] w-[27rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              URL
            </div>

            {portfolio0 && (
              <UrlLink logo={GitHubLogo} url={portfolio0.url}></UrlLink>
            )}

            {/* <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink>

            <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink> */}
          </div>
        </div>
      </div>
    </>
  );
}
