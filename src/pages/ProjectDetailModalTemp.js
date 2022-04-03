import React, { useEffect } from "react";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate } from "react-router";
import Image from "../Components/Atoms/Image";
import { ProjectDetailModalCustom } from "../Components/Modals/ProjectDetailModalCustom";
import UrlLink from "../Components/Molecules/UrlLink";
import GitHubLogo from "../static/images/userStats/gitLogo.png";
import { useSelector } from "react-redux";
import JobTable from "../Components/Organisms/main/detail/JobTable";
import Badge from "../Components/Molecules/Badge";
import TailwindSlider from "../Components/Molecules/TailwindSlider";
import SwiperSlider from "../Components/Molecules/SwiperSilder";

function ProjectDetailModal(props) {
  const modalIsOpen = true;
  //const modalIsOpen = props.showDetail;

  // const testString =
  //   "## hi\n > section\n ```jsx\n let code = 1;\n``` \n *bias* \n **bold**";
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="flex w-[50vh] bg-slate-400 items-center justify-center content-center overflow-y-scroll">
      
      <ProjectDetailModalCustom
        checker={modalIsOpen}
        callback={props.callBackSetShowFalse}
        confirm={() => {
          navigate("/projectRoom");
        }}
      >
        {/* <div className="h-[40vh] justify-center bg-cover" style={{ backgroundImage: `url(${data.imgUrl[0]})` }}/> */}

        <div className="flex h-[40vh] justify-center bg-cover">
          <SwiperSlider/>
        </div>

        <div className="flex justify-center w-screen mt-[-4.063rem]">
          <Image shape="circle" src={""} size={"130"}></Image>
        </div>

        <div className="m-10 text-4xl text-center text-black font-notoB">
          타이틀
        </div>

        <div className="m-10 text-xl text-center text-gray-600 font-noto2">
          마감 : 
          
        </div>

        <div className="text-sm text-center text-gray-700 font-noto-2">
          내용
        </div>

        <div className="flex flex-wrap justify-center w-screen m-10 bg-[#E5E5E5]">
          {/* 모집내용 블럭 */}
          <div className="w-[50vw] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2">
              프로젝트 소개
            </div>

            <div className="m-10 text-base whitespace-pre-line font-noto2 text-ellipsis">
              <Viewer initialValue={"내용"} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center m-10 bg-[#E5E5E5]">
          {/* 모집요건 블럭 */}
          <div className="w-[50vw] justify-center bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2">
              모집요건
            </div>

            <JobTable data={[]} left={[0,0,0]}/>
            
          </div>
        </div>

        <div className="flex justify-center bg-[#E5E5E5] mb-10 pb-10">
          <div className="flex justify-center w-[25vw]">
            <div className="w-[54.688rem] bg-white box-border rounded-[0.625rem] mr-2">
              <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                사용기술
              </div>

              <div className="flex m-10">
                <div className="flex flex-wrap">
                  <Badge skills={[]}/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start w-[25vw] mb-10">
            <div className="bg-white box-border rounded-[0.625rem] w-full ml-2 pb-10">
              <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                URL
              </div>

              <UrlLink
                logo={GitHubLogo}
                url={[]}
              ></UrlLink>

            </div>
          </div>
        </div>
      </ProjectDetailModalCustom>
      
    </div>
  );
}

export default ProjectDetailModal;
