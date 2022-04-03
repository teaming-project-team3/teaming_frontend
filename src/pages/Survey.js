import React, { useState, useMemo } from "react";
import Select from "react-select";
import Input from "../Components/Atoms/Input";
import { ModalCustom } from "./ModalCustom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
import TabMenu from "../Components/Modals/TabMenu";
import { useEffect } from "react";

function Survey(props) {
  const [modalIsOpen, setModalOpen] = useState(props.modalIsOpen);
  const dispatch = useDispatch();
  const [position, setPosition] = useState("");
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);

  console.log("modal is open?", modalIsOpen);

  useEffect(()=>{
    console.log("useEffect change")
    setModalOpen(props.modalIsOpen);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.modalIsOpen])

  // useEffect(()=>{
    
  //   console.log("Parents! ability", skillsFront)
  //   console.log("params", modalIsOpen)
  // },[abilityFront, modalIsOpen, skillsFront])
  
  const positions = useMemo(
    () => [
      { value: "front", label: "Dev/FrontEnd" },
      { value: "back", label: "Dev/BackEnd" },
      { value: "design", label: "Designer" },
    ],
    []
  );

  const sendSurveyData = (callback) => {

    if (url1===""||url2===""||url3===""){
      window.alert("포트폴리오를 입력하세요!");
      return;
    }

    if (position===""){
      window.alert("포지션을 입력하세요!");
      return;
    }

    const data={
      position : position,
      front : {
      ability: abilityFront,
      skills : skillsFront,
      },
      back: {
      ability: abilityBack,
      skills : skillsBack,
      },
      design : {
      ability: abilityDesigner,
      skills : skillsDesigner,
      },
      portfolioUrl : [url1,url2,url3],
      url: url,
      }


    dispatch(userActions.surveyAPI(data, callback));

  }

  return (
    <>
    { modalIsOpen && 
    <div className="fixed top-0 left-0 z-10 flex items-center w-full h-screen bg-black justify center bg-opacity-70">
    <ModalCustom checker={modalIsOpen} confirm={sendSurveyData} close={()=>{props.close(false)}}>

      <div className="flex justify-center m-5 text-base font-noto2">
        프로필을 완성하기 위한 다음 정보를 입력해주세요!
      </div>

      <div className="mb-2 ml-5 text-base font-noto1">포지션<span className="text-red-600 font-notoB">*</span></div>

      <Select className="ml-5 mr-5" options={positions} placeholder={position} onChange={(e)=>{
        setPosition(e.value)
      }}/>

      <div className="mb-2 ml-5 text-base mt-7 font-noto1">깃허브 URL : </div>

      <Input
        custom={"w-[90%] h-[2.875rem]"}
        value={url}
        placeholder="Git hub url"
        _onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></Input>

      <TabMenu abilityFront={abilityFront} skillsFront={skillsFront} abilityBack={abilityBack} 
      skillsBack={skillsBack} abilityDesigner={abilityDesigner} skillsDesigner={skillsDesigner}/>
        
      <div className="mt-5 mb-2 text-base font-noto1">
        <div className="mb-8 ml-2">
        포트폴리오 URL   
        </div>
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #1"
        _onChange={(e) => {
          setUrl1(e.target.value);
        }}
      ></Input>
     
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #2"
        _onChange={(e) => {
          setUrl2(e.target.value);
        }}
      ></Input>
     
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #3"
        _onChange={(e) => {
          setUrl3(e.target.value);
        }}
      ></Input>
      </div>
      


      </ModalCustom>
    </div>
  }
  </>
  );
}

export default Survey;
