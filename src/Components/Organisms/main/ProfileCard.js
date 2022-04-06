
import project1 from "../../../static/images/userStats/exProject01.png";
import SwiperSliderPortFolioMain from "../../Molecules/SwiperSilderPortFolioMain";
//import tw from "tailwind-styled-components";

// const ProfileBox = tw.div`
// w-[4.25rem] h-[4.25rem] ml-[0.875rem] mt-[1rem]
// ${(props)=>(props.profile?"":`hidden`)}
//`

function ProfileCard(props) {

  const { nickname, position, id, _onClick } = props;

  function nicknameFilter(nick){
    return nick.split("&")[0]
  }

  const positionFilter = (value) => {

    if(value==="front"){
      return "Dev/FrontEnd"
    }else if(value==="back"){
      return "Dev/BackEnd"
    }else if(value==="design"){
      return "Designer"
    }

  }

  // eslint-disable-next-line no-const-assign
  let nick = nicknameFilter(nickname)

  return (
    <div
      onClick={()=>{
        //유저 모달을 적용하기
        _onClick(id)}}
      className="flex justify-around w-[33.563rem] h-[9.188rem] mx-[1.063rem] bg-white rounded-[0.625rem] border-2 cursor-pointer shadow-xl hover:border-purple-200"
    >

      <div className="flex flex-col justify-around mr-[1.875rem] ml-2">
          <div className="mr-[0.625rem] text-[1.2rem] font-notoB text-black]">
            {nick}
          </div>
          <div className="font-noto2 text-[#593CE5]">{positionFilter(position)}</div>
      </div>
      
      {props.data && props.data.portfolioUrl &&  props.data.portfolioUrl.length>1 ?
        <div className="flex justify-around h-full">
          <SwiperSliderPortFolioMain imgUrlList={props.data.portfolioUrl[0].imageUrl?props.data.portfolioUrl[0].imageUrl:project1}/>
          <SwiperSliderPortFolioMain imgUrlList={props.data.portfolioUrl[1].imageUrl?props.data.portfolioUrl[1].imageUrl:project1}/>
        </div>
        : props.data.portfolioUrl && props.data.portfolioUrl.length===1 ?
        <div className="flex justify-around h-full">
        <SwiperSliderPortFolioMain imgUrlList={props.data.portfolioUrl[0].imageUrl?props.data.portfolioUrl[0].imageUrl:project1}/>
        <SwiperSliderPortFolioMain imgUrlList={project1}/>
        </div>
        : props.data.portfolioUrl && props.data.portfolioUrl.length===0 ?
        <div className="flex justify-around h-full">
        <SwiperSliderPortFolioMain imgUrlList={project1}/>
        <SwiperSliderPortFolioMain imgUrlList={project1}/>
        </div>
        :
        <></>
      }
      
    </div>
  );
}

export default ProfileCard;
