import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { titles } from "../Components/Organisms/main/data/titles";
import JumboTron from "../Components/Organisms/main/JumboTron";
import MainBanner from "../Components/Organisms/main/MainBanner";
import ProfileList from "../Components/Organisms/main/ProfileList";
import ProjectList from "../Components/Organisms/main/ProjectList";
import ShortCutCards from "../Components/Organisms/main/ShortCutCards";
import Spinner from "../Components/Organisms/Spinner";
import Survey from "../pages/Survey";
import { actionCreators } from "../redux/modules/projects";
import Pic from "../static/Pic.png";
import Pic2 from "../static/Pic2.png";
import ProjectDetailModal from "./ProjectDetailModal";

const Wrap = styled.div`
  width: 90rem;
  justify-content: center;
  background-color: #e5e5e5;
`;

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projectsData = useSelector((state) => state.projects.projectsMain);
  //const projectDetail = useSelector((state)=> state.projects.projectDetail)
  const modalIsOpen = location.state;
  const [showDetail, setShowDetail] = useState(false);
  const rankList = useSelector((state)=>state.projects.projectsRank);
  const deadLineList = useSelector((state)=> state.projects.projectsDeadline);
  const matesDesigner = useSelector((state)=> state.projects.matesDesigner);
  const matesDev = useSelector((state)=> state.projects.matesDev);
  const designerWanted = useSelector((state)=>state.projects.projectsDesigner);
  const devWanted = useSelector((state)=>state.projects.projectsDev);

  let isLoading = useSelector((state)=>state.projects.isLoading);

  console.log("main, projectsData : ", projectsData, isLoading);

  useEffect(() => {
    setTimeout(() => dispatch(actionCreators.loadProjectsMainAPI()), 3000);
    //dispatch(actionCreators.loadProjectsMainAPI());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detailShow = (e) => {
    console.log("project card clicked");

    dispatch(actionCreators.getProjectDetailAPI(e.value));

    setShowDetail(true);

    return;
  };

  return (
    <Wrap className="pb-10 mx-auto my-0">
      {isLoading?
        <Spinner/>
        :
      <><Survey modalIsOpen={modalIsOpen}></Survey><ProjectDetailModal
          showDetail={showDetail}
          callBackSetShowFalse={() => {
            console.log("setShowDetailFalse");
            return setShowDetail(false);
          } }
        ></ProjectDetailModal><div className="flex flex-col">
            <JumboTron></JumboTron>

            <div className="flex justify-center mt-[3.5rem]">
              <ShortCutCards
                _onClick={() => {
                  navigate("/");
                } }
                img={Pic}
                bg={"#7545F2"}
                text={"사이드 프로젝트를 찾는 분이라면?"}
              ></ShortCutCards>

              <ShortCutCards
                _onClick={() => {
                  navigate("/createProject");
                } }
                img={Pic2}
                bg={""}
                text={"사이드 프로젝트 아이디어가 있으신 분이라면?"}
              ></ShortCutCards>
            </div>

            <ProjectList title={titles.rank} detailShow={detailShow} data={rankList} />

            <ProfileList title={titles.matesDesigner} data={matesDesigner} />

            <MainBanner />

            <ProjectList title={titles.deadline} detailShow={detailShow} data={deadLineList} />

            <ProfileList title={titles.matesDev} data={matesDev} />

            <ProjectList title={titles.wantedDesigner} detailShow={detailShow} data={designerWanted} />

            <ProjectList title={titles.wantedDev} detailShow={detailShow} data={devWanted} />


          </div></>
      }
    </Wrap>
  );
}

export default Main;
