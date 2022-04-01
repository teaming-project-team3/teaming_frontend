import React, { useEffect } from "react";
import Image from "../Components/Atoms/Image";
import GitHubLogo from "../static/images/userStats/gitLogo.png";
import { useSelector } from "react-redux";
import StatFamily from "../Components/Organisms/userStat/StatFamily";
import { UserDetailModalCustom } from "../Components/Modals/UserDetailModalCustom";

UserDetailModal.defaultProps = {
  data:{
    back:{ability:[],skills:[]},
    front:{ability:[],skills:[]},
    design:{ability:[],skills:[]},
    introduction:"",
    portfolioUrl:[],
    position:"",
    url:"",
    userId:{
      dmRooms:[],
      email:"",
      kakaoId:"",
      nickname:"",
      profileUrl:"",
      suveyCheck:true,
    }
  }
}

function UserDetailModal(props) {

  //user의 id값 넘겨받으면 동작 -> loading을 넣을까말까?
  
  const modalIsOpen = props.showUser;
  const data = useSelector((state)=>state.users.selectedUser.length===0?UserDetailModal.defaultProps.data:state.users.selectedUser);  
  
  console.log("userDetail : ", data);
  // const testString =
  //   "## hi\n > section\n ```jsx\n let code = 1;\n``` \n *bias* \n **bold**";


  useEffect(() => {
  }, []);

  return (
    <>
      { modalIsOpen && 
      <div className="fixed top-0 left-0 z-10 flex items-center w-full h-screen bg-black justify center bg-opacity-70">
      <UserDetailModalCustom
        checker={modalIsOpen}
        callback={props.callBackSetShowFalse}
        confirm={() => { // DM 구현시 필요
        }}
      >
        
        
        <div className="flex justify-center w-screen mt-[-4.063rem]">
          <Image shape="circle" src={data.userId.profileUrl?data.userId.profileUrl:""} size={"130"}></Image>
        </div>

        <text className="flex justify-center mt-8 text-4xl font-notoB text-[#121414]">
          {()=>{
          console.log("data", data);
          }}
          {data.userId.nickname?data.userId.nickname:""}
        </text>
        
        <text className="flex justify-center mt-4 text-[1.375rem] font-noto2 text-[#71797D]">
          {data.position?data.position:"position"}
        </text>

        <div className="flex justify-center">
          <text className="flex content-center mt-8 w-[80vh] text-[0.875rem] font-noto2 text-[#71797D] whitespace-pre-wrap">
            {data.introduction}
          </text>
        </div>

        <div className="flex justify-center w-full">
        <StatFamily stats={data} GitHubLogo={GitHubLogo}/>
        </div>
        
          
      </UserDetailModalCustom>
      </div>
      }
    </>
  );
}

export default UserDetailModal;
