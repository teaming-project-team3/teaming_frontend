function ProjectCard(props) {
  return (
    <div
      onClick={props._onClick}
      className="flex flex-col max-w-[15.625em] max-h-[18.750em] ml-[2.250em] bg-white border-2 cursor-pointer rounded-[0.333em]"
    >
      <div className="h-2/3 rounded-[0.333em]">
        <img
          src={props.img}
          alt="projectImage"
          className="object-fill rounded-t-[0.333em]"
        ></img>
      </div>

      <div className="flex flex-col p-[0.813em] items-stretch h-1/3">
        <div className="px-2 text-white text-[0.75em] font-noto3 rounded-2xl bg-[#7545F2] w-fit">
          {props.stack}
        </div>

        <div className="py-[0.656em] text-black text-[1em] font-notoB truncate ...">
          {props.text}
        </div>
      </div>
      <div className="flex pl-[0.813em] pb-[1.250em] text-gray-600 text-[0.75em] font-noto2 w-full">
        <img
          src={props.profileUrl}
          alt={"project card"}
          className="flex-initial w-[1.250em] h-[1.250em] rounded-full"
        ></img>
        <p className="flex-initial pl-[0.438em]">{props.nickName}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
