import ProjectCard from "../main/ProjectCard";
import img from '../../../static/project.jpg'

function InvolvedProject(props) {
    
  return (
    <div className="flex flex-col justify-center mb-10 w-fit">
        <div className="flex flex-wrap w-[54.688rem] justify-around bg-white box-border rounded-[0.625rem]">
        
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
        <ProjectCard img={img} text={"프로젝트 제목"} nickName={"닉네임"}/>
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
