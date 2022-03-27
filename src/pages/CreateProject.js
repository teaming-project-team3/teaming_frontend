import React, { useCallback, useState, createRef, useEffect } from "react";
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
import { actionCreators } from "../redux/modules/projects";
import { useLocation } from "react-router";

function CreateProject() {
  const dispatch = useDispatch();

  const [endDate, setEndDate] = useState(new Date());

  const [projectTitle, setProjectTitle] = useState("");
  const [projectContents, setProjectContents] = useState("");
  const preview = useSelector((state) => state.image.preview);
  const S3ImgUrl = useSelector((state) => state.image.image_url);

  const editorRef = createRef();

  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

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
      stack: [
        ["designer", selNum[0]],
        ["front", selNum[1]],
        ["back", selNum[2]],
      ],
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
    <div className="flex justify-center w-screen bg-[#F2F3F7] h-fit">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-full text-[2.5rem] text-black font-notoB">
          프로젝트 등록
        </div>
        <div className="w-full text-[1rem] text-gray-500 font-noto2">
        팀원을 구하는 프로젝트 정보를 입력해주세요!
        </div>


        <div className="w-full m-10 bg-white h-fit rounded-2xl pr-8">
          <div className="w-full text-[1.5rem] text-black font-notoB p-8 border-b-2">
            프로젝트 정보
          </div>

          <div className="flex 
          flex-col
          w-full text-[1rem] text-black font-noto1 pt-8 pr-8 pb-8 ml-8">
            프로젝트 제목
              <input
              className="w-full p-2 mt-3 border-2 rounded font-noto2"
              placeholder="프로젝트 제목을 입력해주세요."
              onChange={(event) => setProjectTitle(event.target.value)}
            ></input>
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto1 pt-8 pr-8 pb-8 ml-8 border-b-2">
            프로젝트 사진
            <div className="w-1/4">
              <S3Upload />
            </div>
            <div className="w-1/2 mr-10">
              <img
                className="object-fill aspect-square"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
                alt={""}
              ></img>
            </div>
          </div>

          <div className="w-full text-[1rem] text-black font-noto2 p-6">
            <div className="p-2 mb-3">프로젝트 상세설명</div>
            {/* 마크다운 적용? */}
            <Editor
              className="m-[-2rem]"
              previewStyle="vertical"
              height="80vh"
              initialEditType="markdown"
              initialValue="마크다운으로 내용을 입력하세요."
              ref={editorRef}
              onChange={onChangeMD}
            ></Editor>
          </div>
        </div>

        <div className="w-5/6 m-10 bg-white h-fit rounded-2xl">
          <div className="w-full text-[1.5rem] text-black font-notoB p-8 border-b-2">
            모집 정보
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8 border-b-2">
            <div className="w-1/3">모집 인원</div>

            <div className="flex flex-col w-2/3">
            <div className="m-2">
              <Select
                options={jobs}
                value={selJobs}
                isMulti
                onChange={handleChange}
              />
            </div>

            {selJobs &&
              selJobs.map((lang, idx) => (
                <>
                  <div key={idx} className="flex m-2">
                    <div className="flex items-center justify-center w-1/3 text-base text-center border-2 font-noto2">
                      {lang.label}
                    </div>
                    <div className="w-1/3">
                      <Select
                        options={numberOfPeople}
                        onChange={(e) => {
                          handleNums(idx, lang.value, e);
                        }}
                      >
                      </Select>
                    </div>
                  </div>
                </>
              ))}
              </div>
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8">
          모집 기간
          {/* 달력을 이용하여 날짜 선택 */}
          <div className="calender-container">
            <div className="flex calender-box">
              <div className="mr-2 date">마감일</div>
              <div className="ml-2">
                <MyDatePicker
                  selected={endDate}
                  dateFormat="yyyy-MM-dd" // 날짜 형식
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="rounded bg-[#593CE5] w-1/3 p-3 text-white font-noto2 text-center">
        <button onClick={createProjectFunc}>프로젝트 등록하기</button>
        </div>

      </div>
    </div>
  );
}

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: #000000;
`; // styled-components 이용 스타일륑

export default CreateProject;
