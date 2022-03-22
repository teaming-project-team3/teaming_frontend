
function ProjectCard(props) {
  return (
    <div onClick={props._onClick} className="flex flex-col w-1/6 ml-3 bg-white border-2 rounded-xl">
                
        <div className="h-2/3 rounded-xl">
        <img src={props.img} alt="projectImage" className="object-fill rounded-xl"></img>
        </div>

        <div className="flex flex-col items-stretch h-1/3">

        <div className="text-white text-[0.75rem] font-noto3 rounded-2xl bg-[#7545F2] w-fit">
            백엔드 개발자
        </div>

        <div className="text-black text-[1rem] font-noto2">
            {props.text}
        </div>

        </div>

        <div className="text-gray-600 text-[0.75rem] font-noto2 w-full">
            {props.nickName}
        </div>

  </div>
  );
}

export default ProjectCard;