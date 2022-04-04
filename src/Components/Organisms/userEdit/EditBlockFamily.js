import React from "react";
import BasicInfo from "./BasicInfo";
import Portfolio from "./Portfolio";
import Specialization from "./Specialization";
import plus from "../../../static/images/createProject/plus.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { actionCreators, uploadImagesS3PortFolio } from "../../../redux/modules/image";

function EditBlockFamily(props) {
    const dispatch = useDispatch();
    const { stats, abilityFront, abilityBack, abilityDesigner, skillsFront,
    skillsBack, skillsDesigner, type_num, checkType, positions} = props;

    EditBlockFamily.defaultProps = {
      stats:{
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

    let temp = [];
    if(stats.portfolioUrl.length>0){
      temp = stats.portfolioUrl.map((item,idx)=>{
        return {...item, id:idx+1 }
      })
    }

    const [portfolioList, setPortfolioList] = React.useState(stats.portfolioUrl.length>0?temp:[{id:0}]);
    
    const navigate = useNavigate();
    const count = React.useRef(stats.portfolioUrl.length>0?stats.portfolioUrl.length+1:1);
    
  function addPortList () {

    if(portfolioList.length>=3){
      window.alert("포트폴리오는 3개 까지만 등록이 가능합니다!")
      return;
    }
    
    const temp = {id:count.current};

    setPortfolioList([...portfolioList, temp]);
    dispatch(actionCreators.setFilesArr([],count.current));

    count.current+=1;
  }

  function sendPortfolio () {
    
    const newData = {
      "nickname": stats.userId.nickname,
      "introduction": stats.introduction,
      "profileUrl": stats.userId.profileUrl,
      "position": stats.position,
      "front" : stats.front,
      "back" : stats.back,
      "design" : stats.design,
      "portfolioUrl" : [],
      "url": stats.url,
      }

    dispatch(uploadImagesS3PortFolio(portfolioList, newData, ()=>{navigate('/')} ));

  };

  function deletePortfolio (idx) {
    const removed = portfolioList.filter((item, i)=>{
      return item.id !== idx;
    })
    
    setPortfolioList(removed);

    dispatch(actionCreators.removeFilesArr(idx));

  }

  const dataPush = (data, idx) => {
    //인덱스 찾아서 추가
    const temp = portfolioList.map((item, i)=>{
      if(item.id===idx){
        return data;
      }else{
        return item;
      }
    })

    setPortfolioList(temp);

}


  return (
    <div className="flex flex-col justify-center w-fit">

            {/* 기본정보 블럭 */}
            <BasicInfo nickName={stats.userId.nickname} stats={stats} />

                <Specialization stats={stats} positions={positions} abilityFront={abilityFront}
              abilityBack={abilityBack} abilityDesigner={abilityDesigner} skillsFront={skillsFront}
              skillsBack={skillsBack} skillsDesigner={skillsDesigner} type_num={type_num}
              checkType={checkType} position={stats.position? stats.position:""}/>


              <div className="flex justify-center w-full mb-10 h-fit">
                <div className="mt-[2.188rem] h-fit w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
                  <div className="flex text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                    포트폴리오
                    <div className="m-2 border-4 cursor-pointer w-fit" onClick={addPortList}>
                      <img src={plus} alt={"+"} className="w-3" />
                    </div>
                  </div>

                  {portfolioList.map((item, idx) => {

                    return (
                      <Portfolio idx={item.id} key={idx} item={item} stats={stats} dataPush={dataPush} deletePortfolio={deletePortfolio} />
                    );
                  })}

                  <div className="flex justify-center w-full">
                    <div className="w-1/3 p-3 text-center text-white bg-purple-400 rounded font-noto2" onClick={sendPortfolio}>
                      <button>적용 하기</button>
                    </div>
                  </div>
                </div>
              </div>

          </div>
  );
}

export default EditBlockFamily;
