
import Image from "../../Atoms/Image";

function ProfileCard(props) {

  const { nickname, profile, position, id, _onClick } = props;

  function nicknameFilter(nick){
    return nick.split("&")[0]
  }

  // eslint-disable-next-line no-const-assign
  let nick = nicknameFilter(nickname)

  return (
    <div
      onClick={()=>{
        //유저 모달을 적용하기
        _onClick(id)}}
      className="flex w-[33.563rem] h-[9.188rem] mx-[1.063rem] bg-white rounded-[0.625rem] cursor-pointer"
    >
      <div className="w-[4.25rem] h-[4.25rem] ml-[0.875rem] mt-[1rem]">
        <Image shape={"circle"} src={profile}></Image>
      </div>

      <div className="flex flex-col mr-[1.875rem]">
        <div className="flex items-center h-1/2">
          <img src={props.tier} alt={""} className="mr-[0.412rem]"></img>
          <div className="mr-[0.625rem] text-[1rem] font-noto2 text-black]">
            {nick}
          </div>
          <div className="font-noto2 text-[#593CE5]">{position}</div>
        </div>

        <div className="items-center content-center justify-center">
          <div className="bg-[#593CE5] rounded text-white text-center">
            프로필보기
          </div>
        </div>
      </div>

      <div className="flex">
        <img
          src={props.project1}
          alt={""}
          className="rounded-[0.625rem] w-[6.875rem] h-[6.875rem] m-auto"
        ></img>
        <img
          src={props.project2}
          alt={""}
          className="rounded-[0.625rem] w-[6.875rem] h-[6.875rem] m-auto"
        ></img>
      </div>
    </div>
  );
}

export default ProfileCard;
