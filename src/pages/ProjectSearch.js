import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../Components/Organisms/main/ProjectCard";
import tw from "tailwind-styled-components";

const CategoryBtn = tw.div`
rounded-3xl border-2 border-solid text-base 
box-border px-4 py-2 m-2 bg-white cursor-pointer
${(props) => (props.isChecked? `border-[#7545F2]` : `border-[#E4E8EB]`)};
`

function ProjectSearch() {

    const allProjects = useSelector((state)=>state.projects.projectsMain);
    const devProjects = useSelector((state)=>state.projects.projectsDev);
    const designerProjects = useSelector((state)=>state.projects.projectsDesigner);

    const [contents, setContents] = useState(allProjects);
    const [check, setIsChecked] = useState(1);

    useEffect(()=>{

    },[]);

    const clickAllProject = () => {

        setContents(allProjects);
        setIsChecked(1);
        
    }

    const clickDevProject = () => {

        setContents(devProjects);
        setIsChecked(2);
        
    }

    const clickDesignProject = () => {

        setContents(designerProjects);
        setIsChecked(3);
        
    }


  return (
    <div className="flex w-screen h-fit bg-[#F2F3F7] justify-center pt-10 pb-10">
      <div className="flex flex-col w-[90vw]">
        
        <div className="">
          <div className="text-3xl text-gray-900">👊 너! 내 동료가 돼라!</div>
          <div className="text-base text-gray-600">내가 힘을 발휘할 수 있는 프로젝트를 찾아보세요</div>
        </div>

        <div className="flex">
            <CategoryBtn onClick={clickAllProject} isChecked={check===1}>✏️ 전체</CategoryBtn>
            <CategoryBtn onClick={clickDevProject} isChecked={check===2}>💻 개발자</CategoryBtn>
            <CategoryBtn onClick={clickDesignProject} isChecked={check===3}>🎨 디자이너</CategoryBtn>
        </div>

        <div className="flex flex-wrap w-full">

        {contents.map((item) => {
            console.log("ProjectSearch, item", item);
            return(<ProjectCard
            img={item.imgUrl}
            stack={"Back-End"}
            text={item.title}
            profileUrl={
            "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
            }
            nickName={item.nickname}></ProjectCard>)

        })
        }


        </div>

      </div>
    </div>

  );
}

export default ProjectSearch;