import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import JumboTron from "../Components/Organisms/main/JumboTron";
import ProfileCard from "../Components/Organisms/main/ProfileCard";
import ProjectCard from "../Components/Organisms/main/ProjectCard";
import ShortCutCards from "../Components/Organisms/main/ShortCutCards";
import Survey from "../pages/Survey";
import { actionCreators } from "../redux/modules/projects";
import ProfileImg1 from "../static/images/main/profileImg.svg";
import Tier from "../static/images/main/tier.svg";
import project1 from "../static/images/userStats/exProject01.png";
import Pic from "../static/Pic.png";
import Pic2 from "../static/Pic2.png";
import ProjectImage from "../static/project.jpg";
import ProjectDetailModal from "./ProjectDetailModal";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #E5E5E5;
`
function Main() {

  const location = useLocation();
  const dispatch = useDispatch();
  const projectsData = useSelector((state) => state.projects.projectsMain)
  //const projectDetail = useSelector((state)=> state.projects.projectDetail)
  const modalIsOpen = location.state;
  const [showDetail, setShowDetail] = useState(false);

  console.log("main, projectsData : ", projectsData)

  useEffect(() => {

    dispatch(actionCreators.loadProjectsMainAPI())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const detailShow = (e) => {

    console.log("project card clicked");

    dispatch(actionCreators.getProjectDetailAPI(e.value));

    setShowDetail(true);

    return;

  }

  return (
    <Wrap>
      <Survey modalIsOpen={modalIsOpen}></Survey>
      <ProjectDetailModal showDetail={showDetail} callBackSetShowFalse={() => {
        console.log("setShowDetailFalse")
        return setShowDetail(false)
      }}></ProjectDetailModal>
      <div className="flex flex-col w-screen">

        <JumboTron></JumboTron>

        <div className="flex justify-center w-screen h-[30vh] p-[1rem]">

          <ShortCutCards img={Pic} bg={"#7545F2"} text={"사이드 프로젝트를 찾는 분이라면?"}></ShortCutCards>

          <ShortCutCards img={Pic2} bg={"#0C42C1"} text={"사이드 프로젝트 아이디어가 있으신 분이라면?"}></ShortCutCards>

        </div>

        <div className="flex flex-col h-[50vh]">

          <div className="flex w-3/4 mx-auto text-2xl font-notoB">
            실시간 인기 프로젝트
          </div>
          <div className="flex w-3/4 mx-auto text-base font-noto2">
            티밍에서 인기 높은 프로젝트를 구경해보세요!
          </div>

          <div className="flex items-stretch justify-center h-full mt-5">

            
            <ProjectCard _onClick={detailShow} img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>

          </div>

        </div>


        <div className="flex flex-col mt-10">

        <div>
        <div className="flex w-3/4 mx-auto text-2xl font-notoB">
            프로젝트를 찾는 중인 디자이너
          </div>
          <div className="flex w-3/4 mx-auto text-base font-noto2">
            티밍에서 인기 높은 프로젝트를 구경해보세요!
        </div>
        </div>
        </div>

        <div className="flex justify-center w-screen h-[30vh] p-[1rem]">

          <ProfileCard profile={ProfileImg1} tier={Tier} project1={project1} project2={project1}></ProfileCard>

          <ProfileCard profile={ProfileImg1} tier={Tier} project1={project1} project2={project1}></ProfileCard>

        </div>

        <div className="flex flex-col w-screen bg-[#3E1782] justify-center items-center text-center h-[20vh] mb-[1rem]">
          <div className="text-2xl text-white font-notoB">
          개발자라면?
          </div>
          <div className="text-2xl text-white font-notoB">
          깃허브 링크를 등록하고 레벨 뱃지를 부여 받아보세요
          </div>
        </div>


        <div className="flex flex-col h-[50vh]">

          <div className="flex w-3/4 mx-auto text-2xl font-notoB">
            실시간 인기 프로젝트
          </div>
          <div className="flex w-3/4 mx-auto text-base font-noto2">
            티밍에서 인기 높은 프로젝트를 구경해보세요!
          </div>

          <div className="flex items-stretch justify-center h-full mt-5">

            
            <ProjectCard _onClick={detailShow} img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>
            <ProjectCard img={ProjectImage} text={"파이썬으로 배우는 금융공학/퀀트"} nickName={"우아한형제"}></ProjectCard>

          </div>

        </div>


        <div className="flex flex-col mt-10">

        <div>
        <div className="flex w-3/4 mx-auto text-2xl font-notoB">
            프로젝트를 찾는 중인 디자이너
          </div>
          <div className="flex w-3/4 mx-auto text-base font-noto2">
            티밍에서 인기 높은 프로젝트를 구경해보세요!
        </div>
        </div>
        </div>

        <div className="flex justify-center w-screen h-[30vh] p-[1rem]">

          <ProfileCard profile={ProfileImg1} tier={Tier} project1={project1} project2={project1}></ProfileCard>

          <ProfileCard profile={ProfileImg1} tier={Tier} project1={project1} project2={project1}></ProfileCard>

        </div>

      </div>
    </Wrap>
  );
}

export default Main;