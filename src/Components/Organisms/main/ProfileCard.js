import Image from "../../Atoms/Image";

function ProfileCard(props) {
  return (
<div
            className={`flex w-1/3 h-3/4 bg-white rounded-xl p-[1rem] m-[1rem]`}
          >
            <div className="w-1/5">
            <Image shape={"circle"} src={props.profile}></Image>
            </div>

            <div className="flex flex-col w-2/5">

              <div className="flex items-center h-1/2">
                <img src={props.tier} alt={""} className="m-1"></img>
                <div className="text-sm font-noto2 text-black] m-1">김기진</div>
                <div className="font-noto2 text-xs text-[#593CE5] m-1">UI/UX 디자이너</div>
              </div>

              <div className="items-center content-center justify-center h-1/2">
              <div className="bg-[#593CE5] rounded w-3/4 p-1 text-white text-sm mx-auto text-center">
                프로필보기
              </div>
              </div>

            </div>
            
            <div className="flex w-2/5">
                <img src={props.project1} alt={""} className="h-full rounded-[0.625rem]"></img>
                <img src={props.project2} alt={""} className="h-full rounded-[0.625rem]"></img>
            </div>
          
          
          </div>
  );
}

export default ProfileCard;