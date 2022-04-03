import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "../Components/Organisms/main/ProjectCard";
import tw from "tailwind-styled-components";
import { clearCategoryProject, loadProjectsCatMainAPI } from "../redux/modules/projectsCategory";
import Spinner from "../Components/Organisms/Spinner";
import { useInView } from "react-intersection-observer"
import ProjectDetailModal from "./ProjectDetailModal";
import { actionCreators } from "../redux/modules/projects";
import Survey from "./Survey";

const CategoryBtn = tw.div`
rounded-3xl border-2 border-solid text-base 
box-border px-4 py-2 m-2 bg-white cursor-pointer
${(props) => (props.$isChecked? `border-[#7545F2]` : `border-[#E4E8EB]`)};
`

function ProjectSearch(props) {
    let isLoading = useSelector((state)=>state.projectsCategory.isLoading);
    const dispatch = useDispatch();

    const allProjects = useSelector((state)=>state.projectsCategory.projectsAll);
    const devProjects = useSelector((state)=>state.projectsCategory.projectsDev);
    const designerProjects = useSelector((state)=>state.projectsCategory.projectsDesigner);

    const [modalIsOpen, setModalIsOpen] = useState(props.blocker);
    const [contents, setContents] = useState(allProjects);
    const [check, setIsChecked] = useState(1);
    const [page, setPage] = useState([1,1,1]);

    const [showDetail, setShowDetail] = useState(false);

    const [ref, inView] = useInView();

    useEffect(()=>{
      console.log("state!!! search!!!!!!!!!!!!!!!!!!!!")
      setModalIsOpen(props.blocker);
  
    },[props.blocker])

    useEffect(()=>{
      console.log("in UseEffect with start");
      //dispatch(loadProjectsCatMainAPI("rank",page[0]));
      //setPage([page[0]+1,page[1],page[2]]);

      return (()=>{
        dispatch(clearCategoryProject());
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
      setContents(allProjects);
    },[allProjects])

    useEffect(()=>{
      setContents(devProjects);
    },[devProjects])

    useEffect(()=>{
      setContents(designerProjects);
    },[designerProjects])

    useEffect(()=>{
      if(check===1){
        console.log("in UseEffect inView");
        dispatch(loadProjectsCatMainAPI("rank",page[0]));
        setPage([page[0]+1,page[1],page[2]+1]);
        setContents(allProjects);
      }else if(check===2){
        dispatch(loadProjectsCatMainAPI("dev",page[1]));
        setPage([page[0],page[1]+1,page[2]]);
        setContents(devProjects);
      }else if(check===3){
        dispatch(loadProjectsCatMainAPI("design",page[2]));
        setPage([page[0],page[1],page[2]+1]);
        setContents(designerProjects);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    const clickAllProject = () => {

        setContents(allProjects);
        setIsChecked(1);
        
    }

    const clickDevProject = () => {
        
        //dispatch(loadProjectsCatMainAPI("dev",page[1]));
        //setPage([page[0],page[1]+1,page[2]]);
        setContents(devProjects);
        setIsChecked(2);
        
    }

    const clickDesignProject = () => {
        
        //dispatch(loadProjectsCatMainAPI("design",page[2]));
        //setPage([page[0],page[1],page[2]+1]);
        setContents(designerProjects);
        setIsChecked(3);
        
    }

    const detailShow = (id) => {
      console.log("project card clicked", id);
  
      dispatch(actionCreators.getProjectDetailAPI(id, ()=>{setShowDetail(true)}));
  
      return;
    };


  return (
    <div className="flex w-screen h-fit bg-[#F2F3F7] justify-center pt-10 pb-10">
        <Survey modalIsOpen={modalIsOpen} close={(checker)=>{
          console.log("call props.setBlocker", checker)
          props.setBlocker(checker)}
          } className="z-10"></Survey>
        <ProjectDetailModal
          setSurveyOpen={props.setBlocker}
          showDetail={showDetail}
          callBackSetShowFalse={() => {
            console.log("setShowDetailFalse");
            return setShowDetail(false);
          }}
        ></ProjectDetailModal>
      <div className="flex flex-col w-[80vw]">
        
        <div className="m-3">
          <div className="mb-2 text-2xl text-gray-900 font-notoB">👊 너! 내 동료가 돼라!</div>
          <div className="text-base text-gray-600 font-noto2">내가 힘을 발휘할 수 있는 프로젝트를 찾아보세요</div>
        </div>

        <div className="flex">
            <CategoryBtn onClick={clickAllProject} $isChecked={check===1}>✏️ 전체</CategoryBtn>
            <CategoryBtn onClick={clickDevProject} $isChecked={check===2}>💻 개발자</CategoryBtn>
            <CategoryBtn onClick={clickDesignProject} $isChecked={check===3}>🎨 디자이너</CategoryBtn>
        </div>

        <div className="flex flex-wrap w-full pt-10 mt-10 bg-white rounded-md">
        
            {isLoading ?
            <Spinner/>
            :
            contents.map((item) => {
                console.log("ProjectSearch, item", item);
                return(
                <div className="mb-5">
                <ProjectCard
                _onClick={detailShow}
                id={item._id}
                key={item._id}
                img={item.imgUrl[0]}
                stack={item.stack}
                text={item.title}
                profileUrl={
                item.profileUrl
                }
                nickName={item.nickname}></ProjectCard>
                </div>)

            })
            }


        </div>

        <div className="h-[10vh] w-full" ref={ref}>
          
        </div>

      </div>
    </div>

  );
}

export default ProjectSearch;