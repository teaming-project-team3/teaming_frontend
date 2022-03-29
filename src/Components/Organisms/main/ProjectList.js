import ProjectCard from "./ProjectCard";
//import ProjectImage from "../../../static/project.jpg";

function ProjectList(props) {

    const { data, title } = props;

    ProjectList.defaultProps = {
        data : [{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        }],
    }


  return (
    <div className="flex flex-col mt-[6.75rem]">
          <div className="flex w-3/4 mx-auto text-2xl font-notoB">
            {title.main}
          </div>
          <div className="flex w-3/4 mx-auto text-base font-noto2">
            {title.sub}
          </div>

          {data &&
          <div className="flex items-stretch justify-center h-full mt-[2.125rem]">
            
            <ProjectCard
              key={0}
              _onClick={props.detailShow}
              img={data[0].imgUrl}
              stack={data[0].stack}
              text={data[0].title}
              profileUrl={
                data[0].profileUrl
              }
              nickName={data[0].nickname}
            ></ProjectCard>
            <ProjectCard
            key={1}
              _onClick={props.detailShow}
              img={data[1].imgUrl}
              stack={data[1].stack}
              text={data[1].title}
              profileUrl={
                data[1].profileUrl
              }
              nickName={data[1].nickname}
            ></ProjectCard>
            <ProjectCard
            key={2}
              _onClick={props.detailShow}
              img={data[2].imgUrl}
              stack={data[2].stack}
              text={data[2].title}
              profileUrl={
                data[2].profileUrl
              }
              nickName={data[2].nickname}
            ></ProjectCard>
            <ProjectCard
            key={3}
              _onClick={props.detailShow}
              img={data[3].imgUrl}
              stack={data[3].stack}
              text={data[3].title}
              profileUrl={
                data[3].profileUrl
              }
              nickName={data[3].nickname}
            ></ProjectCard>
         
          </div>
          }
        </div>
  );
}

export default ProjectList;
