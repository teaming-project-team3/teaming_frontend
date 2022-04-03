import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
// TOAST UI Editor import
import { useDispatch, useSelector } from "react-redux";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useLocation } from "react-router";
import plus from "../static/images/createProject/plus.png";
import Selector from "../Components/Organisms/createProject/Selector";
import Images from "../Components/Organisms/upload/Images";
import CreateSelect from "./CreateSelect";
import { useNavigate } from "react-router";

function UpdateProject(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.projects.projectDetail);

  const [endDate, setEndDate] = useState(new Date());

  const [projectTitle, setProjectTitle] = useState(data.title);
  const [projectSubTitle, setProjectSubTitle] = useState(data.subContents);
  const [projectContents, setProjectContents] = useState(data.contents);
  const [referUrl, setReferUrl] = useState(data.referURL);
  const [skills, setSkills] = useState([]);

  const editorRef = createRef();

  const location = useLocation();

  const id = location.state;

  const [workArr, setWorkArr] = useState([1]);


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

  async function updateProjectFunc() {

    const data = {
      title: projectTitle,
      subContents: projectSubTitle,
      contents: projectContents,
      stack: workArr,
      referUrl: referUrl,
      skills: skills,
      period: toStringByFormatting(endDate),
      //period: endDate,
    };

    dispatch(imageActions.uploadImagesS3(data,()=>{navigate('/')}, true, id));
    
  }

  function plusSelector(){
    const temp = workArr.length;
    
    setWorkArr([...workArr, temp+1])
  }

  const dataPush = (data, idx) => {

      console.log("before dataPush", data, idx);
      //인덱스 찾아서 추가
      const temp = workArr.map((item, i)=>{
        if(i===idx){
          return data;
        }else{
          return item;
        }
      })

      console.log("after dataPush", data, temp);

      setWorkArr(temp);

  }

  function requiredSkills(data){

    const temp = data.map((item)=>{
      return item.value;
    })

    setSkills(temp);

  }

  //dev
  return (
    <div className="flex justify-center w-screen bg-[#F2F3F7] h-fit">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="w-full text-[2.5rem] text-black font-notoB">
          프로젝트 수정
        </div>
        <div className="w-full text-[1rem] text-gray-500 font-noto2">
        수정하고자 하는 프로젝트 정보를 입력해주세요!
        </div>


        <div className="w-full pr-8 m-10 bg-white h-fit rounded-2xl">
          <div className="w-full text-[1.5rem] text-black font-notoB p-8 border-b-2">
            프로젝트 정보 
          </div>

          <div className="flex 
          flex-col
          w-full text-[1rem] text-black font-noto1 pt-8 pr-8 pb-8 ml-8">
            프로젝트 제목
              <input
              className="w-full p-2 mt-3 border-2 rounded font-noto2"
              value={projectTitle}
              onChange={(event) => setProjectTitle(event.target.value)}
            ></input>
          </div>

          <div className="flex 
          flex-col
          w-full text-[1rem] text-black font-noto1 pt-8 pr-8 pb-8 ml-8">
            프로젝트 부제
              <input
              className="w-full p-2 mt-3 border-2 rounded font-noto2"
              value={projectSubTitle}
              onChange={(event) => setProjectSubTitle(event.target.value)}
            ></input>
          </div>

          <div className="flex flex-col w-full text-[1rem] justify-between text-black font-noto1 pt-8 pr-8 pb-8 ml-8">
            <div className="mb-8 text-black font-noto1">
            이미지 업로드
            </div>
            
            <Images idx={-1}/>
          </div>

          <div className="w-full ml-5 text-[1rem] text-black font-noto2 p-6">
            <div className="p-2 mb-3">프로젝트 상세설명</div>
            {/* 마크다운 적용? */}
            <Editor
              className="m-[-2rem]"
              previewStyle="vertical"
              height="80vh"
              initialEditType="markdown"
              initialValue={projectContents}
              ref={editorRef}
              onChange={onChangeMD}
            ></Editor>
          </div>
        </div>

        <div className="w-full pr-8 bg-white h-fit rounded-2xl">
          <div className="w-full text-[1.5rem] text-black font-notoB p-8 border-b-2">
            모집 정보
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8">
            <div className="flex items-center w-1/3">
              모집 인원
              <div className="ml-2 border-2 h-fit" onClick={()=>{plusSelector()}}>
                <img src={plus} alt={"+"}/>
              </div>
            </div>
            
            <div className="flex flex-col w-2/3">
            {workArr.map((item, idx)=>{
              
              return <Selector key={idx} idx={idx} dataPush={dataPush}/>
            })
            }
            </div>
            
          </div>


          <div className="flex 
          flex-col
          w-full text-[1rem] text-black font-noto1 pt-8 pr-3 pb-8 ml-8">
            요구 스킬
          <CreateSelect setRequired={requiredSkills}/>
          
          </div>

          <div className="flex 
          flex-col
          w-full text-[1rem] text-black font-noto1 pt-8 pr-8 pb-8 ml-8">
            참고 URL
              <input
              className="w-full p-2 mt-3 border-2 rounded font-noto2"
              value={referUrl}
              onChange={(event) => setReferUrl(event.target.value)}
            ></input>
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8">
          모집 기간
          {/* 달력을 이용하여 날짜 선택 */}
          <div className="calender-container">
            <div className="flex calender-box">
              <div className="mr-2 cursor-pointer date">마감일</div>
              <div className="ml-2 cursor-pointer">
                <MyDatePicker
                  className="cursor-pointer"
                  selected={endDate}
                  dateFormat="yyyy-MM-dd" // 날짜 형식
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="rounded bg-[#593CE5] w-1/3 p-3 text-white font-noto2 text-center mt-10 cursor-pointer" onClick={updateProjectFunc}>
        <button>프로젝트 등록하기</button>
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

export default UpdateProject;
