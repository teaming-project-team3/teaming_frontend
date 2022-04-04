import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "../Components/Organisms/main/ProjectCard";
import tw from "tailwind-styled-components";
import {
  clearCategoryProject,
  loadProjectsCatMainAPI,
} from "../redux/modules/projectsCategory";
import Spinner from "../Components/Organisms/Spinner";
import { useInView } from "react-intersection-observer";
import ProjectDetailModal from "./ProjectDetailModal";
import { actionCreators } from "../redux/modules/projects";
import Survey from "./Survey";

const CategoryBtn = tw.div`
rounded-[1.5rem] border-[0.125rem] border-solid text-base 
box-border bg-white cursor-pointer py-[0.45rem] mt-[1.75rem] mr-[0.5rem]
${(props) => (props.$isChecked ? `border-[#7545F2]` : `border-[#E4E8EB]`)};
`;

function ProjectSearch(props) {
  let isLoading = useSelector((state) => state.projectsCategory.isLoading);
  const dispatch = useDispatch();

  const allProjects = useSelector(
    (state) => state.projectsCategory.projectsAll
  );
  const devProjects = useSelector(
    (state) => state.projectsCategory.projectsDev
  );
  const designerProjects = useSelector(
    (state) => state.projectsCategory.projectsDesigner
  );

  const [modalIsOpen, setModalIsOpen] = useState(props.blocker);
  const [contents, setContents] = useState(allProjects);
  const [check, setIsChecked] = useState(1);
  const [page, setPage] = useState([1, 1, 1]);

  const [showDetail, setShowDetail] = useState(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    setModalIsOpen(props.blocker);
  }, [props.blocker]);

  useEffect(() => {
    return () => {
      dispatch(clearCategoryProject());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setContents(allProjects);
  }, [allProjects]);

  useEffect(() => {
    setContents(devProjects);
  }, [devProjects]);

  useEffect(() => {
    setContents(designerProjects);
  }, [designerProjects]);

  useEffect(() => {
    if (check === 1) {
      dispatch(loadProjectsCatMainAPI("rank", page[0]));
      setPage([page[0] + 1, page[1], page[2]]);
      setContents(allProjects);
    } else if (check === 2) {
      dispatch(loadProjectsCatMainAPI("dev", page[1]));
      setPage([page[0], page[1] + 1, page[2]]);
      setContents(devProjects);
    } else if (check === 3) {
      console.log("design projects", page);
      dispatch(loadProjectsCatMainAPI("design", page[2]));
      setPage([page[0], page[1], page[2] + 1]);
      setContents(designerProjects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const clickAllProject = () => {
    setContents(allProjects);
    setIsChecked(1);
  };

  const clickDevProject = () => {
    //dispatch(loadProjectsCatMainAPI("dev",page[1]));
    //setPage([page[0],page[1]+1,page[2]]);
    setContents(devProjects);
    setIsChecked(2);
  };

  const clickDesignProject = () => {
    //dispatch(loadProjectsCatMainAPI("design",page[2]));
    //setPage([page[0],page[1],page[2]+1]);
    setContents(designerProjects);
    setIsChecked(3);
  };

  const detailShow = (id) => {
    dispatch(
      actionCreators.getProjectDetailAPI(id, () => {
        setShowDetail(true);
      })
    );

    return;
  };

  return (
    <div className="flex w-[90rem] max-h-[152.688rem] mx-auto">
      <Survey
        modalIsOpen={modalIsOpen}
        close={(checker) => {
          props.setBlocker(checker);
        }}
        className="z-10"
      ></Survey>
      <ProjectDetailModal
        setSurveyOpen={props.setBlocker}
        showDetail={showDetail}
        callBackSetShowFalse={() => {
          return setShowDetail(false);
        }}
      ></ProjectDetailModal>
      <div className="flex flex-col w-[69.25rem] mx-auto">
        <div className="mt-[7.5rem]">
          <div className="text-2xl text-gray-900 font-notoB">
            👊 너! 내 동료가 돼라!
          </div>
          <div className="mt-[0.75rem] text-base text-gray-600 font-noto2">
            내가 힘을 발휘할 수 있는 프로젝트를 찾아보세요
          </div>
        </div>

        <div className="flex">
          <CategoryBtn onClick={clickAllProject} $isChecked={check === 1}>
            <p className="px-[0.5rem] w-[5rem] h-[1.563rem]">✏️ 전체</p>
          </CategoryBtn>
          <CategoryBtn onClick={clickDevProject} $isChecked={check === 2}>
            <p className="px-[0.5rem] w-[6rem] h-[1.563rem]">💻 개발자</p>
          </CategoryBtn>
          <CategoryBtn onClick={clickDesignProject} $isChecked={check === 3}>
            <p className="px-[0.5rem] w-[7rem] h-[1.563rem]">🎨 디자이너</p>
          </CategoryBtn>
        </div>

        <div className="flex flex-wrap w-[69.25rem] max-h-[119.813rem] ml-[-2.25rem]">
          {contents.map((item) => {
            return (
              <div className="w-[15.625rem] h-[18.75rem] mb-[2rem] mr-[1rem]">
                <ProjectCard
                  _onClick={detailShow}
                  id={item._id}
                  key={item._id}
                  img={item.imgUrl[0]}
                  stack={item.stack}
                  text={item.title}
                  profileUrl={item.profileUrl}
                  nickName={item.nickname}
                ></ProjectCard>
              </div>
            );
          })}
        </div>

        <div className="h-[10vh] w-full" ref={ref}>
          {isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default ProjectSearch;
