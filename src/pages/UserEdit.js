/* eslint-disable no-const-assign */
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BasicInfo from "../Components/Organisms/userEdit/BasicInfo";
import Specialization from "../Components/Organisms/userEdit/Specialization";
import Portfolio from "../Components/Organisms/userEdit/Portfolio";
import plus from "../static/images/createProject/plus.png"
import { actionCreators, uploadImagesS3PortFolio } from "../redux/modules/image";

export default function UserEdit() {
  const stats = useSelector((state) => state.users.myStats);
  const [type_num, setType] = React.useState("1");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const [isLeader, setIsLeader] = React.useState(false);
  const [portfolioList, setPortfolioList] = React.useState([{id:0}]);
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);
  const imgList = useSelector((state)=>state.image.filesArr);
  const count = React.useRef(1);

  console.log("stats", stats);

  const positions = React.useMemo(
    () => [
      { value: "Dev/FrontEnd", label: "Dev/FrontEnd" },
      { value: "Dev/BackEnd", label: "Dev/BackEnd" },
      { value: "Designer", label: "Designer" },
    ],
    []
  );

  function addPortList () {
    
    console.log("addPortList");
    const temp = {id:count.current};

    setPortfolioList([...portfolioList, temp]);
    dispatch(actionCreators.setFilesArr([],count.current));

    count.current+=1;
  }

  console.log("init : ", stats);

  function sendPortfolio () {
    
    console.log("sendPortfolio", portfolioList, imgList);

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


    console.log("sendPortfolio", portfolioList);

    

    //dispatch(updatePortFolio(data));

  };

  function deletePortfolio (idx) {
    console.log("deletePortfolio", idx);
    const removed = portfolioList.filter((item, i)=>{
      return item.id !== idx;
    })
    
    console.log("after removed", removed);

    setPortfolioList(removed);

    dispatch(actionCreators.removeFilesArr(idx));

  }


  React.useEffect(() => {
    // if (isLeader === localStorage.getItem("userId")) {
    //   setIsLeader(true);
    // }

    //userStatsAPI연동할것
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkType = (e) => {
    if (e.target.value === "1") {
      setType("1");
    } else if (e.target.value === "2") {
      setType("2");
    } else if (e.target.value === "3") {
      setType("3");
    }
  };

  const dataPush = (data, idx) => {

    console.log("before dataPush", data, idx);
    //인덱스 찾아서 추가
    const temp = portfolioList.map((item, i)=>{
      if(item.id===idx){
        return data;
      }else{
        return item;
      }
    })

    console.log("after dataPush", data, temp);

    setPortfolioList(temp);

}

  return (
    <div className="bg-[#E5E5E5] pb-10">
      <div className="h-[30vh] bg-[#121414]" />

      <div className="flex justify-center w-screen mt-[4.313rem] mb-10">
        <div className="bg-white h-fit w-[12.813rem] mr-7 p-4 box-border rounded-[0.625rem]">
          <div className="bg-slate-200 rounded-[0.625rem] p-2.5 font-notoB text-gray-900 text-sm mb-3">
            나의 프로필
          </div>
          <div className="rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm mb-3">
            참여프로젝트
          </div>
        </div>

        {/* 기본정보 블럭 */}
        <BasicInfo nickName={stats.userId.nickname} stats={stats}/>
        
      </div>

        <Specialization stats={stats} positions={positions} abilityFront={abilityFront} 
        abilityBack={abilityBack} abilityDesigner={abilityDesigner} skillsFront={skillsFront} 
        skillsBack={skillsBack} skillsDesigner={skillsDesigner} type_num={type_num} 
        checkType={checkType}/>

      <div className="flex justify-center w-screen mb-10 h-fit">
        <div className="mt-[2.188rem] ml-[14.5rem] h-full w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
          <div className="flex text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
            포트폴리오
          <div className="m-2 border-4 cursor-pointer w-fit" onClick={addPortList}>
            <img src={plus} alt={"+"} className="w-3"/>
          </div>
          </div>

          {portfolioList.map((item, idx)=>{
            
            return(
            <Portfolio idx={item.id} key={idx} item={item} stats={stats} dataPush={dataPush} deletePortfolio={deletePortfolio}/>
            )
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
