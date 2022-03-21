import React, { useEffect } from "react";
//import { Viewer } from "@toast-ui/react-editor";
import figma from "../static/images/userStats/figmaLogo.png";
import { useNavigate } from "react-router";
import Image from "../Components/Atoms/Image";
import circleImg from "../static/images/projectDetail/detailCircle01.svg";
import { ProjectDetailModalCustom } from "../Components/Modals/ProjectDetailModalCustom";
import SkillBadge from "../Components/Molecules/SkillBadge";
import UrlLink from "../Components/Molecules/UrlLink";
import GitHubLogo from "../static/images/userStats/gitLogo.png";

function ProjectDetailModal(props) {
  const modalIsOpen = props.showDetail;
  const projectDetail = props.projectDetail;

  console.log("projectDetail : ", projectDetail);

  // const testString =
  //   "## hi\n > section\n ```jsx\n let code = 1;\n``` \n *bias* \n **bold**";
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="flex w-[50vh] bg-slate-400 items-center justify-center content-center overflow-scroll">
      <ProjectDetailModalCustom
        checker={modalIsOpen}
        callback={props.callBackSetShowFalse}
        confirm={() => {
          navigate("/projectRoom");
        }}
      >
        <div className="h-[30vh] justify-center bg-jumboDetail bg-cover" />

        <div className="flex justify-center w-screen mt-[-4.063rem]">
          <Image shape="circle" src={circleImg} size={"130"}></Image>
        </div>

        <div className="m-10 text-4xl text-center text-black font-notoB">
          동물 운동 플랫폼 아임펫뿜뿜
        </div>

        <div className="m-10 text-xl text-center text-gray-600 font-noto2">
          여행
        </div>

        <div className="text-sm text-center text-gray-700 font-noto-2">
          안녕하세요 :) 따뜻한 사람들과 함께 하는 아임펫뿜뿜 입니다 👋🏻 동물을
          사랑하는 분과 함께 프로젝트를 진행하고 싶어요!
        </div>

        <div className="flex flex-wrap justify-center w-screen m-10 bg-[#E5E5E5]">
          {/* 모집내용 블럭 */}
          <div className="w-[50vw] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2">
              프로젝트 소개
            </div>

            {/* <div>
            <Viewer initialValue={testString} />
            </div> */}

            <div className="m-10 text-base whitespace-pre-line font-noto2 text-ellipsis">
              혹시 “마이펫의 이중생활“이라는 영화를 보신적이 적이 있나요?
              반려동물은 누구나 특별한 개성과 스토리를 가지고 있기때문에
              아임펫뿜뿜은 그 개성을 최대한 보여주고 주인공으로써 소통할 수 있는
              개성있는 반려동물 커뮤니티 플랫폼을 만들기 위한 기획을 진행하고
              있습니다. 멋진 서비스를 만들기 위해 함께 고민하고 성장 하실 팀원을
              찾고 있습니다. 물론 반려동물을 사랑하고 관심을 가지고 있는것은
              기본이겠죠?
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center m-10 bg-[#E5E5E5]">
          {/* 모집요건 블럭 */}
          <div className="w-[50vw] justify-center bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2">
              모집요건
            </div>
            
            <div className="flex w-[100%] justify-center mt-10 mb-10">
            <table className = "w-5/6 text-base border border-collapse table-fixed border-slate-400 font-noto2">
              <thead className="text-black">
                <tr>
                  <th className = "border border-slate-300">모집부문</th>
                  <th className = "border border-slate-300">담당업무</th>
                  <th className = "border border-slate-300">우대사항</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  <td className = "border border-slate-300">디자이너</td>
                  <td className = "border border-slate-300">ㆍ Traddly 앱 서비스 UI/UX 디자인
ㆍ홍보 활동에 필요한 디자인 작업 진행
ㆍTraddly 커스텀 굿즈 상품의 브랜딩</td>
                  <td className = "border border-slate-300">ㆍ 피그마 사용 가능자
ㆍ 애완 서비스</td>
                </tr>
                <tr>
                  <td className = "border border-slate-300">프론트엔드 개발자</td>
                  <td className = "border border-slate-300">ㆍ Traddly 앱 서비스 UI/UX 디자인
ㆍ홍보 활동에 필요한 디자인 작업 진행
ㆍTraddly 커스텀 굿즈 상품의 브랜딩</td>
                  <td className = "border border-slate-300">ㆍ 피그마 사용 가능자
ㆍ 애완 서비스</td>
                </tr>
                <tr>
                  <td className = "border border-slate-300">백엔드 개발자</td>
                  <td className = "border border-slate-300">ㆍ Traddly 앱 서비스 UI/UX 디자인
ㆍ홍보 활동에 필요한 디자인 작업 진행
ㆍTraddly 커스텀 굿즈 상품의 브랜딩</td>
                  <td className = "border border-slate-300">ㆍ 피그마 사용 가능자
ㆍ 애완 서비스</td>
                </tr>
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
        

        <div className="flex justify-center bg-[#E5E5E5]">

        <div className="flex justify-center w-[25vw]">
          <div className="w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              사용기술
            </div>

            <div className="flex m-10">
              <div className="flex flex-wrap">
                <SkillBadge src={figma} name={"Figma"}></SkillBadge>
                <SkillBadge src={figma} name={"Figma"}></SkillBadge>
                <SkillBadge src={figma} name={"Figma"}></SkillBadge>
                <SkillBadge src={figma} name={"Figma"}></SkillBadge>
                <SkillBadge src={figma} name={"Figma"}></SkillBadge>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start w-[25vw]">
          <div className="bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              URL
            </div>

            <UrlLink
              logo={GitHubLogo}
              url={"https://Behance.com/heeyeon9578"}
            ></UrlLink>

            <UrlLink
              logo={GitHubLogo}
              url={"https://Behance.com/heeyeon9578"}
            ></UrlLink>

            <UrlLink
              logo={GitHubLogo}
              url={"https://Behance.com/heeyeon9578"}
            ></UrlLink>
          </div>
        </div>
      
        </div>
      
      </ProjectDetailModalCustom>
    </div>
  );
}

export default ProjectDetailModal;
