import ProjectCard from "../main/ProjectCard";
import img from "../../../static/project.jpg";

function InvolvedProject(props) {
  const { img, projectTitle, nickName } = props;

  return (
    <div className="flex flex-col justify-center mb-10 w-fit">
      <div className="flex flex-wrap w-[54.688rem] justify-around bg-white box-border rounded-[0.625rem]">
        <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
          참여중인 프로젝트
        </div>

        {/* <div className="flex flex-"> */}
        <ProjectCard img={img} text={projectTitle} nickName={nickName} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"} />
        {/* </div> */}

      </div>

      {/* {isLoading ?
        <Spinner/>
        :
        contents.map((item) => {
            console.log("ProjectSearch, item", item);
            return(<ProjectCard
            key={item._id}
            img={item.imgUrl[0]}
            stack={item.stack}
            text={item.title}
            profileUrl={
            item.profileUrl
            }
            nickName={item.nickname}></ProjectCard>)

        })
        } */}
    </div>
  );
}

export default InvolvedProject;
