import React, { useState, useCallback, useMemo } from "react";
import Modal from "react-modal";
import Button from "../element/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import {proLangInit, skillsInit} from "../data/survey/SurveyData";

// makeAnimated creates animated wrappers around components passed in as arguments.
// If no arguments are passed, builtin components are wrapped instead.
const animatedComponents = makeAnimated();

function Survey() {
  const [value, setValue] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  // selected values, initially it lists all options in order
  const [selectedPosition, setSelectedPosition] = useState(null);
  

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
      setSelProLang(inputValue);
    },
    [proLang, orderOptions]
  );

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setProLang([...proLang, newValue]);
      setSelProLang([...selProLang, newValue]);
    },
    [proLang]
  );

  return (
    <Modal isOpen={modalIsOpen} 
    onRequestClose={() => setModalIsOpen(false)}
    ariaHideApp={false}
    >
      <div className="App">
        <div>설문조사</div>

        <div className="Position">Position</div>
        <Select options={positions} />

        <div>
        깃허브 URL : 
        <input></input>
        </div>

        <CreatableSelect
          isMulti // show multiple options
          isClearable={proLang.some((v) => !v.isFixed)} // clear button shows conditionally
          value={selProLang}
          options={proLang}
          styles={styles}// styles that do not show 'x' for fixed options
          onChange={handleChange}
          onCreateOption={handleCreate}
          components={animatedComponents} // animate builtin components
        />

        <CreatableSelect
          isMulti // show multiple options
          isClearable={proLang.some((v) => !v.isFixed)} // clear button shows conditionally
          value={selProLang}
          options={skillsInit}
          styles={styles}// styles that do not show 'x' for fixed options
          onChange={handleChange}
          onCreateOption={handleCreate}
          components={animatedComponents} // animate builtin components
        />

      <div style={{width: '300px'}} display='flex' >
        <Select>
          사용기간
        </Select>
        <Select>
          능숙도
        </Select>
      </div>

        <div>
        대표 프로젝트 #1 URL : 
        <input></input>
        </div>

        <div>
        대표 프로젝트 #2 URL : 
        <input></input>
        </div>

        <div>
        대표 프로젝트 #3 URL : 
        <input></input>
        </div>


        {/* <div className="category">Loading Select</div>
      <Select options={options} isLoading />

      <div className="category">Clearable Select</div>
      <Select options={options} defaultValue={options[0]} isClearable />

      <div className="category">Disabled Select</div>
      <Select options={options} defaultValue={options[0]} isDisabled />

      <div className="category">Select with multiple values</div>
      <Select options={options} defaultValue={options} isMulti />

      <div className="category">Select that is initially open</div>
      <Select options={options} defaultValue={options[0]} defaultMenuIsOpen /> */}
      </div>

      <Button>입력 완료</Button>
    </Modal>
  );
}

export default Survey;
