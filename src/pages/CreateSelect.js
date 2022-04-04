import React, { useCallback, useState, useMemo } from "react";
import {
  requiredSkillsInit
} from "../data/survey/SurveyData";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { useEffect } from "react";

const animatedComponents = makeAnimated();

function CreateSelect(props) {
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

  const [proLang, setProLang] = useState(requiredSkillsInit);
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

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [proLang, orderOptions]
  );

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setProLang([...proLang, newValue]);
      setSelProLang([...selProLang, newValue]);
      //selProLang 배열에 들어있는 각 언어를 jsx로 추가할 수 있는가?
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [proLang, selProLang]
  );

  useEffect(()=>{
    
    props.setRequired(selProLang);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selProLang])

  return (
    <div>
      <div className="flex mt-5 mb-2 text-base font-noto1">사용 언어</div>
      <CreatableSelect
        className="mr-5"
        isMulti // show multiple options
        isClearable={proLang.some((v) => !v.isFixed)} // clear button shows conditionally
        value={selProLang}
        options={proLang}
        styles={styles} // styles that do not show 'x' for fixed options
        onChange={handleChange}
        onCreateOption={handleCreate}
        components={animatedComponents} // animate builtin components
      />
    </div>
  );
}

export default CreateSelect;
