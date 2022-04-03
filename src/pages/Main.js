import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { titles } from "../Components/Organisms/main/data/titles";
import MainBanner from "../Components/Organisms/main/MainBanner";
import ProfileList from "../Components/Organisms/main/ProfileList";
import ProjectList from "../Components/Organisms/main/ProjectList";
import ShortCutCards from "../Components/Organisms/main/ShortCutCards";
import Spinner from "../Components/Organisms/Spinner";
import Survey from "./Survey";
import { actionCreators } from "../redux/modules/projects";
import Pic from "../static/Pic.png";
import Pic2 from "../static/Pic2.png";
import ProjectDetailModal from "./ProjectDetailModal";
import SwiperSlider from "../Components/Molecules/SwiperSilder";
import UserDetailModal from "./UserDetailModal";
import { getSelectedUserInfo } from "../redux/modules/users";

const Wrap = styled.div`
  width: 90rem;
  justify-content: center;
  background-color: #e5e5e5;
`;

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const surveyCheck = useSelector((state) => state.users.surveyCheck);
  const projectsData = useSelector((state) => state.projects.projectsMain);
  //const projectDetail = useSelector((state)=> state.projects.projectDetail)
  const [modalIsOpen, setModalIsOpen] = useState(location.state)
  const [showDetail, setShowDetail] = useState(false);
  const [showUserDetail, setShowUserDetail] = useState(false);
  const rankList = useSelector((state)=>state.projects.projectsRank);
  const deadLineList = useSelector((state)=> state.projects.projectsDeadline);
  const matesDesigner = useSelector((state)=> state.projects.matesDesigner);
  const matesDev = useSelector((state)=> state.projects.matesDev);
  const designerWanted = useSelector((state)=>state.projects.projectsDesigner);
  const devWanted = useSelector((state)=>state.projects.projectsDev);
  const isLogin = useSelector((state) => state.users.is_login);

  let isLoading = useSelector((state)=>state.projects.isLoading);

  console.log("main, projectsData : ", projectsData, isLoading, modalIsOpen);

  useEffect(()=>{

    setModalIsOpen(location.state);

  },[location.state])

  useEffect(() => {
    setTimeout(() => dispatch(actionCreators.loadProjectsMainAPI()), 1000);
    //dispatch(actionCreators.loadProjectsMainAPI());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detailShow = (id) => {
    console.log("project card clicked", id);

    if(surveyCheck){
      window.alert("설문조사 후에 프로젝트 생성이 가능합니다!")
      console.log("surveyCheck", surveyCheck);
      setModalIsOpen(surveyCheck);
      return;
    }

    dispatch(actionCreators.getProjectDetailAPI(id, ()=>{setShowDetail(true)}));

    //setShowDetail(true);

    return;
  };

  const userDetailShow = (id) => {
    console.log("profile card clicked", id);

    dispatch(getSelectedUserInfo(id, ()=>{setShowUserDetail(true)}));
    
    return;
  };

  return (
    <Wrap className="pb-10 mx-auto my-0">
      {isLoading?
        <Spinner/>
        :
      <><Survey modalIsOpen={modalIsOpen} close={setModalIsOpen} className="z-10"></Survey>
      <ProjectDetailModal
          showDetail={showDetail}
          callBackSetShowFalse={() => {
            console.log("setShowDetailFalse");
            return setShowDetail(false);
          } }
        ></ProjectDetailModal>
        <UserDetailModal
          showUser={showUserDetail}
          callBackSetShowFalse={() => {
            console.log("setShowDetailFalse");
            return setShowUserDetail(false);
          } }
        >
        </UserDetailModal>
        <div className="flex flex-col">

            <SwiperSlider className="z-0"/>

            <div className="flex justify-center mt-[3.5rem]">
              <ShortCutCards
                _onClick={() => {
                  navigate("/projectFind");
                } }
                img={Pic}
                bg={"#7545F2"}
                text={"사이드 프로젝트를 찾는 분이라면?"}
              ></ShortCutCards>

              <ShortCutCards
                _onClick={() => {
                  if(!isLogin){
                    window.alert("로그인 후에 프로젝트 생성이 가능합니다!")
                  }
                  else if(surveyCheck){
                    window.alert("설문조사 후에 프로젝트 생성이 가능합니다!")
                    console.log("surveyCheck", surveyCheck);
                    setModalIsOpen(surveyCheck);
                  }else{
                    navigate("/createProject");
                  }
                }}
                img={Pic2}
                bg={""}
                text={"사이드 프로젝트 아이디어가 있으신 분이라면?"}
              ></ShortCutCards>
            </div>

            <ProjectList title={titles.rank} detailShow={detailShow} data={rankList} />

            <ProfileList title={titles.matesDesigner} detailShow={userDetailShow} data={matesDesigner} className="z-0"/>

            <MainBanner />

            <ProjectList title={titles.deadline} detailShow={detailShow} data={deadLineList} />

            <ProfileList title={titles.matesDev} detailShow={userDetailShow} data={matesDev} />

            <ProjectList title={titles.wantedDesigner} detailShow={detailShow} data={designerWanted} />

            <ProjectList title={titles.wantedDev} detailShow={detailShow} data={devWanted} />


          </div></>
      }
    </Wrap>
  );
}

export default Main;
