function SkillBadge(props) {

    const {src, name} = props;

  return (
    <div className="flex justify-center items-center 
    h-[2.375rem] border-[#EFF1F1] border-2 rounded-[1.875rem]
    pl-[1.4rem] pr-[1.4rem] pt-[0.563rem] pb-[0.563rem]
    w-fit
    mb-[0.859rem] mr-[0.523rem]
    ">
      <img src={src} className="h-[0.914rem] font-noto2 mr-[0.563rem]"></img>
      <div className="text-xs">{name}</div>
    </div>
  );
}

export default SkillBadge;