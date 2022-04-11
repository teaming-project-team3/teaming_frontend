import { useState } from "react";
import { apis } from "../../apis/apis";
import backArrow from "../../static/images/projectRoom/backPress.svg";
//import onlineIcon from '../../icons/onlineIcon.png'

function ProjectRoomHeader(props) {

  const [start, setStart] = useState(false);


  const requestJoin = () => {

    (props.involved? 
      apis
      .postInvolvedOut(props.projectId, props.involved)
      .then((res)=>{
        console.log("involvedOut:",res)
        props.involvedToggle();
      })
      .catch((err)=>{
        console.log("involved err:",err)
      })      
      :
      apis
      .postInvolvedIn(props.projectId, props.involved)
      .then((res)=>{
        console.log("involvedIn:",res)
        props.involvedToggle();
      })
      .catch((err)=>{
        console.log("involved err:",err)
      })
      )
  }

  const close = () => {
    apis
    .postClosed(props.projectId)
    .then((res)=>{
      console.log("close:",res)
      setStart(true);
    })
    .catch((err)=>{
      console.log("close err:",err)
    })
  }


  return (
    <div className="flex h-[10vh] w-full items-center">
      <div
        className="flex items-center justify-center h-full cursor-pointer aspect-square"
        onClick={() => {
          if (window.confirm('정말로 나가시겠습니까?'))
          {
              props.goBack();
          }
          else
          {
              
          }
          
        }}
      >
        <img src={backArrow} alt={""}></img>
      </div>

      <div className="w-[60vw] text-xl text-black font-noto2">
        {props.title ? props.title : ""}
      </div>

      <div className="w-full"></div>
      <div className="flex justify-end w-full mr-10">
      {!start && props.isLeader && (
        <div
          className="w-1/5 p-3 text-center text-gray-700 bg-green-200 border rounded-full cursor-pointer font-noto2 hover:border-green-500"
          onClick={close}
        >
          <button>마감하기</button>
        </div>
      )}
      {!start && !props.isLeader && !props.involved && (
        <div
          className="w-1/5 p-3 text-center text-gray-700 bg-purple-100 border rounded-full cursor-pointer font-noto2 hover:border-purple-500"
          onClick={requestJoin}
        >
          <button>티밍하기</button>
        </div>
      )}
      {!start && !props.isLeader && props.involved && (
        <div
          className="w-1/5 p-3 text-center text-gray-700 bg-red-200 border rounded-full cursor-pointer font-noto2 hover:border-red-500"
          onClick={requestJoin}
        >
          <button>티밍취소</button>
        </div>
      )}
      </div>
      {/* <div className="flex m-10 font-noto2 justify-items-center">
          {users ? (
            <div>
              <div className='activeContainer'>
                <h2>
                  {users.map((name) => {
                    console.log("in users.map usersData", users)
                    return (
                    <div key={name.nickName} className='activeItem'>
                      {name.nickName}
                      <img alt='Online Icon' src={onlineIcon} />
                    </div>
                  )})}
                </h2>
              </div>
            </div>
            ) : null}
        </div> */}
    </div>
  );
}

export default ProjectRoomHeader;
