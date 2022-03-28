import { useEffect, useState } from "react";
import Select from "react-select";
import {
  works,
  rolesDesigner,
  rolesDev,
} from "../../../data/createProject/CreateProjectData";
import minus from "../../../static/images/createProject/minus.png";
import plus from "../../../static/images/createProject/plus.png";

function Selector(props) {
  const [number, setNumber] = useState(0);
  const [selWorks, setSelWorks] = useState({ value: "0", label: "직무 선택" });
  const [selRoles, setSelRoles] = useState({
    value: "0",
    label: "상세 직무 선택",
  });

  useEffect(()=>{

    setSelectorValue();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[number, selWorks, selRoles])

  function setSelectorValue(){
    const data = {work: selWorks.value, role: selRoles.value, number: number};
    console.log("setSelectorValue", data)
    props.dataPush(data, props.idx);

  }

  function handleSel(e, checker) {
    console.log("handleSel", e.value, checker);
    if (checker === 1) {
      console.log("checker1", e.label);
      setSelWorks(e);
    } else if (checker === 2) {
      setSelRoles(e);
    }
  }

  function countNum(checker) {
    if (checker) {
      if (number === 3) {
        return;
      }
      setNumber(number + 1);
    } else {
      if (number === 0) {
        return;
      }
      setNumber(number - 1);
    }
  }

  return (
    <div className="flex w-full">
      <div className="w-1/3 m-2">
        <Select
          placeholder={selWorks.label}
          options={works}
          value={selWorks}
          onChange={(e) => {
            handleSel(e, 1);
          }}
        />
      </div>

      <div className="w-1/3 m-2">
        <Select
          placeholder={selRoles.label}
          options={selWorks.value === 1 ? rolesDesigner : rolesDev}
          value={selRoles}
          onChange={(e) => {
            handleSel(e, 2);
          }}
        />
      </div>

      <div className="flex w-1/3 m-2">
        <div
          className="m-1 w-fit"
          onClick={() => {
            countNum(false);
          }}
        >
          <img src={minus} alt={"-"} />
        </div>
        <div className="m-1">{number}</div>
        <div
          className="m-1 w-fit"
          onClick={() => {
            countNum(true);
          }}
        >
          <img src={plus} alt={"+"} />
        </div>
      </div>
    </div>
  );
}

export default Selector;
