import React, { useCallback, useState, createRef } from "react";
import Button from "../element/Button";
import styled from "styled-components";
// TOAST UI Editor import
import { useDispatch, useSelector } from "react-redux";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { jobs, numberOfPeople } from "../data/createProject/CreateProjectData";
import S3Upload from "../Components/Organisms/upload/S3Upload";
import Image from "../Components/Atoms/Image";
import { actionCreators } from "../redux/modules/projects";
import Input from "../Components/Atoms/Input";

function CreateProject() {

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [projectTitle, setProjectTitle] = useState("");
  const [projectContents, setProjectContents] = useState("");
  const preview = useSelector((state) => state.image.preview);
  const S3ImgUrl = useSelector((state) => state.image.image_url);

  const editorRef = createRef();

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
  }

  function onChangeMD() {
    console.log(editorRef.current.getInstance().getMarkdown());
    setProjectContents(editorRef.current.getInstance().getMarkdown());
  }

  function createProjectFunc() {
    const data = {
      title: projectTitle,
      imgUrl: S3ImgUrl,
      contents: projectContents,
      stack: [["designer",selNum[0]],["front",selNum[1]],["back",selNum[2]]],
      period: toStringByFormatting(endDate),
    };

    dispatch(actionCreators.createProjectAPI(data));

  }

  const orderByLabel = useCallback(
    (a, b) => a.label.localeCompare(b.label),
    []
  );

  const orderOptions = useCallback(
    (values) =>
      values
        .filter((v) => v.isFixed)
        .sort(orderByLabel)
        .concat(values.filter((v) => !v.isFixed).sort(orderByLabel)),
    [orderByLabel]
  );

  const [selJobs, setSelJobs] = useState([]);

  const handleChange = useCallback(
    (inputValue, { action, removedValue }) => {
      switch (action) {
        case "remove-value": // delete with 'x'
        case "pop-value": // delete with backspace
          if (removedValue.isFixed) {
            setSelJobs(orderOptions([...inputValue, removedValue]));
            return;
          }
          break;
        case "clear": // clear button is clicked
          setSelJobs(jobs.filter((v) => v.isFixed));
          return;
        default:
      }
      setSelJobs(inputValue);
    },
    [orderOptions]
  );

  const [selNum, setSelNum] = useState([0, 0, 0]);

  function handleNums(id, job, event) {
    console.log(id);
    if (job === "back") {
      const newSel = selNum.map((num, idx) => {
        if (idx === 2) {
          return event.value;
        } else {
          return num;
        }
      });
      setSelNum(newSel);
    } else if (job === "front") {
      const newSel = selNum.map((num, idx) => {
        if (idx === 1) {
          return event.value;
        } else {
          return num;
        }
      });
      setSelNum(newSel);
    } else if (job === "designer") {
      const newSel = selNum.map((num, idx) => {
        if (idx === 0) {
          return event.value;
        } else {
          return num;
        }
      });
      setSelNum(newSel);
    }
  }

  //dev
  return (
    <div className="flex flex-col items-center justify-center p-10">
      
      <div className="w-3/4 text-[2.5rem] text-black font-notoB">프로젝트 등록</div>

      <div className="w-3/4 text-[2.5rem] text-black font-notoB rounded-lg">
        <Input>
        </Input>
      </div>


      <div className="title">
        프로젝트 제목 :
        <input
          onChange={(event) => setProjectTitle(event.target.value)}
        ></input>
      </div>

      <div>
        <img alt="null"></img>
        작성자 이름 : 홍길동
      </div>

      <div>구하는 직무 : 프론트 2명, 백 2명, 디자이너 2명</div>
      <Select options={jobs} value={selJobs} isMulti onChange={handleChange} />

      {selJobs &&
        selJobs.map((lang, idx) => (
          <>
            <div key={idx} display="flex">
              <div style={{ width: "300px" }}>
                value: {lang.value},{idx}
              </div>
              <div style={{ width: "300px" }}>
                <Select
                  options={numberOfPeople}
                  onChange={(e) => {
                    handleNums(idx, lang.value, e);
                  }}
                >
                  필요인원
                </Select>
              </div>
            </div>
          </>
        ))}

      <div>
        직무별 필요조건
        {/* 이 부분을 넣을까 말까 */}
      </div>

      <div>
        <img alt="null"></img>
        프로젝트 관련 이미지 업로드 및 프리뷰
      </div>

      <div>
        프로젝트 상세설명 :{/* 마크다운 적용? */}
        <Editor
          previewStyle="vertical"
          height="79vh"
          initialEditType="markdown"
          initialValue="마크다운으로 내용을 입력하세요."
          ref={editorRef}
          onChange={onChangeMD}
        ></Editor>
      </div>

      <div>
        이미지 업로드 :
        <S3Upload />
      </div>

      <div style={{ width: "300px" }}>
        <Image
          shape="rectangle"
          src={preview ? preview : "http://via.placeholder.com/400x300"}
        ></Image>
      </div>

      <div>
        모집기간 2022.03.05~2022.03.31
        {/* 달력을 이용하여 날짜 선택 */}
        <div className="calender-container">
          <div className="calender-box">
            <div className="date">시작날짜</div>
            <div
              style={{
                backgroundColor: "#FF6347",
                border: "1px",
                width: "150px",
              }}
            >
              <MyDatePicker
                selected={startDate}
                dateFormat="yyyy-MM-dd" // 날짜 형식
                onChange={(date) => setStartDate(date)}
              ></MyDatePicker>
            </div>
          </div>
          <div className="calender-box">
            <div className="date">종료날짜</div>
            <div
              style={{
                backgroundColor: "#FF6347",
                border: "1px",
                width: "150px",
              }}
            >
              <MyDatePicker
                selected={endDate}
                dateFormat="yyyy-MM-dd" // 날짜 형식
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
        </div>
      </div>

      <Button _onClick={createProjectFunc}>입력 완료</Button>
    </div>
  );
}

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  height: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: transparent;
  color: #00bfff;
  border: 1px solid;
`; // styled-components 이용 스타일륑

export default CreateProject;
