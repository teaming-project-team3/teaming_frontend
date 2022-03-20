import * as React from "react";
import RadarChart from "../Components/Molecules/RadarChart";
import Image from "../Components/Atoms/Image";
import userDummy3 from "../static/images/userStats/example_user.png";
import FortFolioCard from "../Components/Organisms/FortFolioCard";
import figma from "../static/images/userStats/figmaLogo.png";
import SkillBadge from "../Components/Molecules/SkillBadge";
import GitHubLogo from "../static/images/userStats/gitLogo.png"
import UrlLink from "../Components/Molecules/UrlLink";

export default function UserStat() {
  const [isLeader, setIsLeader] = React.useState(false);

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }

    //userStatsAPI연동할것
    //dispatch();

  }, [isLeader]);

  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="h-[30vh] bg-[#121414]" />

        <div className="flex justify-center w-screen mt-[-4.063rem]">
          <Image shape="circle" src={userDummy3} size={"130"}></Image>
        </div>
        <text className="flex justify-center mt-8 text-4xl font-notoB text-[#121414]">
          이도윤
        </text>
        <text className="flex justify-center mt-4 text-[1.375rem] font-noto2 text-[#71797D]">
          Ux Designer
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
          </div>

          {/* 포트폴리오 블럭 */}
          <div className="h-[67.625rem] w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              포트폴리오
            </div>
            
            {/* 깃헙 잔디 */}
            <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">
              <img src="https://ghchart.rshah.org/jamesujeon" alt="" />
            </div>
            
            <FortFolioCard></FortFolioCard>
            <FortFolioCard></FortFolioCard>
            <FortFolioCard></FortFolioCard>
            <FortFolioCard></FortFolioCard>
            
          </div>
        </div>

        <div className="flex justify-center w-screen">
          <div className="mt-[2.188rem] ml-[14.5rem] h-[26.438rem] w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              전문분야
            </div>

            <div className="flex mt-[3.75rem] ml-[1.8rem]">

            <div className="flex flex-wrap w-3/5">

              <SkillBadge src={figma} name={"Figma"}></SkillBadge>
              <SkillBadge src={figma} name={"Figma"}></SkillBadge>
              <SkillBadge src={figma} name={"Figma"}></SkillBadge>
              <SkillBadge src={figma} name={"Figma"}></SkillBadge>
              <SkillBadge src={figma} name={"Figma"}></SkillBadge>

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


            <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink>

            <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink>

            <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink>

          </div>
        </div>
      </div>
    </>
  );
}