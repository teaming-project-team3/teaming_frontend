import React, { useState, useCallback, useMemo, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import {
  proLangInit,
  skillsInit,
  periodOfUse,
  proficiency,
} from "../data/survey/SurveyData";
import Input from "../Components/Atoms/Input";
import { SurveyModal } from "./SurveyModal";
import ModalSelect from "./ModalSelect";
import { useSelector } from "react-redux";


// makeAnimated creates animated wrappers around components passed in as arguments.
// If no arguments are passed, builtin components are wrapped instead.
const animatedComponents = makeAnimated();

function Survey() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
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

  },[abilityFront])
  
  const positions = useMemo(
    () => [
      { value: "Dev/FrontEnd", label: "Dev/FrontEnd" },
      { value: "Dev/BackEnd", label: "Dev/BackEnd" },
      { value: "Designer", label: "Designer" },
    ],
    []
  );

  // styles that do not show 'x' for fixed options
  const styles = useMemo(
    () => ({
      multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: "none" } : base;
      },
    }),
    []
  );

  // sort options with alphabet order
  const orderByLabel = useCallback(
    (a, b) => a.label.localeCompare(b.label),
    []
  );

  // listed fixed options first and then the delete-able options
  const orderOptions = useCallback(
    (values) =>
      values
        .filter((v) => v.isFixed)
        .sort(orderByLabel)
        .concat(values.filter((v) => !v.isFixed).sort(orderByLabel)),
    [orderByLabel]
  );

  const [proLang, setProLang] = useState(proLangInit);
  const [selProLang, setSelProLang] = useState(orderOptions([]));
  // handler for changes
  const handleChange = useCallback(
    (inputValue, { action, removedValue }) => {
      switch (action) {
        case "remove-value": // delete with 'x'
        case "pop-value": // delete with backspace
          if (removedValue.isFixed) {
            setSelProLang(orderOptions([...inputValue, removedValue]));
            return;
          }
          break;
        case "clear": // clear button is clicked
          setSelProLang(proLang.filter((v) => v.isFixed));
          return;
        default:
      }
      // if 이미 있으면 삭제하고,
      // console.log("selected : ", inputValue, langState, selProLang);
      // setLangState(inputValue);

      setSelProLang(inputValue);
    },
    [proLang, orderOptions]
  );

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setProLang([...proLang, newValue]);
      setSelProLang([...selProLang, newValue]);
      //selProLang 배열에 들어있는 각 언어를 jsx로 추가할 수 있는가?
    },
    [proLang, selProLang]
  );

  const [frameWorks, setFrameWorks] = useState(skillsInit);
  const [selFrame, setSelFrame] = useState(orderOptions([]));

  const handleChangeFrame = useCallback(
    (inputValue, { action, removedValue }) => {
      switch (action) {
        case "remove-value": // delete with 'x'
        case "pop-value": // delete with backspace
          if (removedValue.isFixed) {
            setSelFrame(orderOptions([...inputValue, removedValue]));
            return;
          }
          break;
        case "clear": // clear button is clicked
        setSelFrame(proLang.filter((v) => v.isFixed));
          return;
        default:
      }
      // if 이미 있으면 삭제하고,
      // console.log("selected : ", inputValue, langState, selProLang);
      // setLangState(inputValue);

      setSelFrame(inputValue);
    },
    [frameWorks, orderOptions]
  );

  const handleCreateFrame = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setFrameWorks([...frameWorks, newValue]);
      setSelFrame([...selFrame, newValue]);
      //selProLang 배열에 들어있는 각 언어를 jsx로 추가할 수 있는가?
    },
    [frameWorks, selFrame]
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
    <SurveyModal>

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
