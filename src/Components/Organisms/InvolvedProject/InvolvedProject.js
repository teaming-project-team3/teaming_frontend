import ProjectCard from "../main/ProjectCard";
import img from '../../../static/project.jpg'
import { useSelector } from "react-redux";

function InvolvedProject(props) {

  const myProjects = useSelector((state)=>state.users.myProjects);
  
  console.log("involvedProjects", myProjects);

  return (
    <div className="flex flex-col justify-center mb-10 w-fit">
        <div className="flex flex-wrap w-[57.2rem] bg-white box-border rounded-[0.625rem] pt-10 pb-10">
        
          {myProjects?

          myProjects.map((project)=>{
            console.log("involvedProjects ,in map!", project);
            return(<ProjectCard id={project._id} img={project.imgUrl} text={project.title} nickName={project.userId} stack={project.stack} profileUrl={project.profileUrl?project.profileUrl:""}/>)
          })

          :

          <div className="w-full text-center font-notoB">
            참여중인 프로젝트가 없습니다. 프로젝트에 참여해보세요!
          </div>

          }
        </div>

    </div>
  );
}

export default InvolvedProject;
