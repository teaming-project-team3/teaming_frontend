import ProjectCard from "../main/ProjectCard";

function InvolvedProject(props) {
    
  return (
    <div className="flex flex-col justify-center mb-10 w-fit">
        <div className="flex flex-wrap w-[54.688rem] bg-white box-border rounded-[0.625rem]">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
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
