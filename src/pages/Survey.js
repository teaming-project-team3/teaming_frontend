import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import Input from "../Components/Atoms/Input";
import { SurveyModal } from "./SurveyModal";
import ModalSelect from "./ModalSelect";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

function Survey(props) {
  const params = useParams();
  const location = useLocation();
  const modalIsOpen = location.state;
  const [url, setUrl] = useState("");
  const [type_num, setType] = useState("1");
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);

  useEffect(()=>{
    
    console.log("Parents! ability", skillsFront)
    console.log("params", modalIsOpen)
  },[abilityFront])
  
  const positions = useMemo(
    () => [
      { value: "Dev/FrontEnd", label: "Dev/FrontEnd" },
      { value: "Dev/BackEnd", label: "Dev/BackEnd" },
      { value: "Designer", label: "Designer" },
    ],
    []
  );

  const checkType = (e) => {
    if (e.target.value == "1") {
      setType("1");
    } else if (e.target.value == "2") {
      setType("2");
    } else if (e.target.value == "3") {
      setType("3");
    }
  };

  return (
    <div className="overflow-scroll">
    <SurveyModal checker={modalIsOpen}>

      <div className="flex justify-center m-5 text-base font-noto2">
        프로필을 완성하기 위한 다음 정보를 입력해주세요!
      </div>

      <div className="mb-2 ml-5 text-base font-noto1">포지션</div>

      <Select className="ml-5 mr-5" options={positions} />

      <div className="mb-2 ml-5 text-base mt-7 font-noto1">깃허브 URL : </div>

      <Input
        custom={"w-[90%] h-[2.875rem]"}
        value={url}
        placeholder="Git hub url"
        _onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></Input>

        <div>
          <input
            name="radio"
            type="radio"
            id="type1"
            value="1"
            checked={type_num == "1"}
            onChange={checkType}
          />
          <label htmlFor="1">FrontEnd</label>
          <br />
          <input
            name="radio"
            type="radio"
            id="type2"
            value="2"
            checked={type_num == "2"}
            onChange={checkType}
          />
          <label htmlFor="2">BackEnd</label>
          <br />
          <input
            name="radio"
            type="radio"
            id="type3"
            value="3"
            checked={type_num == "3"}
            onChange={checkType}
          />
          <label htmlFor="3">Designer</label>
        </div>

        {type_num === "1" && ( <ModalSelect position={"1"} ability={abilityFront} skills={skillsFront}/>)}
        {type_num === "2" && ( <ModalSelect position={"2"} ability={abilityBack} skills={skillsBack}/>)}
        {type_num === "3" && ( <ModalSelect position={"3"} ability={abilityDesigner} skills={skillsDesigner}/>)}
        
      <div className="mt-5 mb-2 text-base font-noto1">
        <div className="mb-8 ml-2">
        포트폴리오 URL   
        </div>
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #1"
        _onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></Input>
     
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #2"
        _onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></Input>
     
        <Input
        custom={"w-[90%] h-[2.875rem] mb-1"}
        value={url}
        placeholder="Project Url #3"
        _onChange={(e) => {
          setUrl(e.target.value);
        }}
      ></Input>
      </div>
      


      </SurveyModal>
    </div>
  );
}

export default Survey;
