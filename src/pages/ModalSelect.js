import React, { useCallback, useState, useMemo } from "react";
import {
  proLangInit,
  skillsInit,
  periodOfUse,
  proficiency,
} from "../data/survey/SurveyData";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
    deleteAbility,
  deleteSkills,
  resetAbility,
  resetSkills,
  updateAbility,
  updateSkills,
} from "../redux/modules/users";

const animatedComponents = makeAnimated();

function ModalSelect(props) {
  // styles that do not show 'x' for fixed options
  const dispatch = useDispatch();
  const position = props.position;
  const ability = props.ability? props.ability : null;
  const skill = props.skills? props.skills : null;

  const skillName = skill.map((item, i)=>{
    return {value:item.name, label:item.name}
  })


  const abilityName = ability.map((item, i)=>{
    return {value:item.name, label:item.name}
  })

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
  //setSelProLang(abilityName);
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

      setSelProLang(inputValue);

      if(removedValue){
          //삭제
          dispatch(deleteAbility(removedValue.value.toLowerCase(), position));
      }else{
          //추가
          dispatch(resetAbility(inputValue[inputValue.length-1], position));
      }

      
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [proLang, orderOptions]
  );

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setProLang([...proLang, newValue]);
      setSelProLang([...selProLang, newValue]);
      dispatch(resetAbility(newValue, position));
      //selProLang 배열에 들어있는 각 언어를 jsx로 추가할 수 있는가?
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      setSelFrame(inputValue);

      if(removedValue){
        //삭제
        dispatch(deleteSkills(removedValue.value.toLowerCase(), position));
        }else{
            //추가시 이미 있으면 기존 데이터 return하는 map 함수 구현하기
        dispatch(resetSkills(inputValue[inputValue.length-1], position));
        }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frameWorks, orderOptions]
  );

  const handleCreateFrame = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setFrameWorks([...frameWorks, newValue]);
      setSelFrame([...selFrame, newValue]);
      dispatch(resetSkills(newValue, position));
      //selProLang 배열에 들어있는 각 언어를 jsx로 추가할 수 있는가?
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frameWorks, selFrame]
  );

  return (
    <div>
      <div className="flex mt-5 mb-2 ml-5 text-base font-noto1">사용 언어</div>
      <CreatableSelect
        className="ml-5 mr-5"
        isMulti // show multiple options
        isClearable={proLang.some((v) => !v.isFixed)} // clear button shows conditionally
        value={abilityName}
        options={proLang}
        styles={styles} // styles that do not show 'x' for fixed options
        onChange={handleChange}
        onCreateOption={handleCreate}
        components={animatedComponents} // animate builtin components
      />

      {ability &&
        ability.map((data, idx) => {
          
          return(
          <>
            <div className="flex ml-5" key={idx}>
              <div className="w-24 m-3 text-lg font-notoB">{data.name}</div>
              <div className="m-3 w-28">
                <Select
                  options={periodOfUse}
                  placeholder={data.time? periodOfUse[data.time].label : "기간"}
                  onChange={(e) => {
                    //dispatch
                        let t = {
                          name: data.name,
                          time: e.value,
                          rate: data.rate,
                        };
                        dispatch(updateAbility(t, idx, position));
                    }}
                ></Select>
              </div>
              <div className="m-3 w-28">
                <Select
                  options={proficiency}
                  placeholder={data.time? proficiency[data.rate].label : "능숙도"}
                  onChange={(e) => {
                    //dispatch
                    let t = {
                      name: data.name,
                      time: data.time,
                      rate: e.value,
                    };
                    dispatch(updateAbility(t, idx, position));
                  }}
                ></Select>
              </div>
            </div>
          </>)
})}

      <div className="mt-5 mb-2 ml-5 text-base font-noto1">프레임워크</div>
      <CreatableSelect
        className="ml-5 mr-5"
        isMulti // show multiple options
        isClearable={frameWorks.some((v) => !v.isFixed)} // clear button shows conditionally
        value={skillName}
        options={skillsInit}
        styles={styles} // styles that do not show 'x' for fixed options
        onChange={handleChangeFrame}
        onCreateOption={handleCreateFrame}
        components={animatedComponents} // animate builtin components
      />

      {skill &&
        skill.map((data, idx) => (
          <>
            <div className="flex ml-5" key={idx}>
              <div className="w-24 m-3 text-lg font-notoB">{data.name}</div>
              <div className="m-3 w-28">
                <Select
                  options={periodOfUse}
                  placeholder={data.time? periodOfUse[data.time].label : "기간"}
                  onChange={(e) => {
                     //dispatch
                     let t = {
                      name: data.name,
                      time: e.value,
                      rate: data.rate,
                    };
                    dispatch(updateSkills(t, idx, position));
                  }}
                ></Select>
              </div>
              <div className="m-3 w-28">
                <Select
                  options={proficiency}
                  placeholder={data.time? proficiency[data.rate].label : "능숙도"}
                  onChange={(e) => {
                    //dispatch
                    let t = {
                      name: data.name,
                      time: data.time,
                      rate: e.value,
                    };
                    dispatch(updateSkills(t, idx, position));
                  }}
                ></Select>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default ModalSelect;
