import React from "react";
import ProjectCard from "../Components/Organisms/main/ProjectCard";
import ProjectImage from "../static/project.jpg";


function ProjectSearch() {

  return (
    <div className="flex w-screen h-fit bg-[#F2F3F7] justify-center pt-10 pb-10">
      <div className="flex flex-col w-[80vw]">
        
        <div className="">
          <div className="text-3xl text-gray-900">👊 너! 내 동료가 돼라!</div>
          <div className="text-base text-gray-600">내가 힘을 발휘할 수 있는 프로젝트를 찾아보세요</div>
        </div>

        <div className="flex">
            <div className="rounded-3xl border-[#7545F2] border-2 border-solid text-base box-border px-4 py-2 m-2 bg-white">✏️ 전체</div>
            <div className="rounded-3xl border-[#E4E8EB] border-2 border-solid text-base box-border px-4 py-2 m-2 bg-white">💻 개발자</div>
            <div className="rounded-3xl border-[#E4E8EB] border-2 border-solid text-base box-border px-4 py-2 m-2 bg-white">🎨 디자이너</div>
        </div>

        <div className="flex flex-wrap w-full">
        <ProjectCard
        img={ProjectImage}
        stack={"Back-End"}
        text={"파이썬으로 배우는 금융공학/퀀트"}
        profileUrl={
          "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
        }
        nickName={"우아한형제"}></ProjectCard>
        <ProjectCard
        img={ProjectImage}
        stack={"Back-End"}
        text={"파이썬으로 배우는 금융공학/퀀트"}
        profileUrl={
          "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
        }
        nickName={"우아한형제"}></ProjectCard>
        <ProjectCard
        img={ProjectImage}
        stack={"Back-End"}
        text={"파이썬으로 배우는 금융공학/퀀트"}
        profileUrl={
          "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
        }
        nickName={"우아한형제"}></ProjectCard>
        <ProjectCard
        img={ProjectImage}
        stack={"Back-End"}
        text={"파이썬으로 배우는 금융공학/퀀트"}
        profileUrl={
          "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
        }
        nickName={"우아한형제"}></ProjectCard>
        <ProjectCard
        img={ProjectImage}
        stack={"Back-End"}
        text={"파이썬으로 배우는 금융공학/퀀트"}
        profileUrl={
          "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
        }
        nickName={"우아한형제"}></ProjectCard>

        </div>

      </div>
    </div>

  );
}

export default ProjectSearch;