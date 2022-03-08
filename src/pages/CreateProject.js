import React from "react";
import Button from "../element/Button";
import styled from "styled-components";
// TOAST UI Editor import
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateProject() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  //dev
  return (
    <React.Fragment>
      <div>새로운 팀 만들기</div>

      <div className="title">
        프로젝트 제목 :<input></input>
      </div>

      

      <div>
        <img alt="null"></img>
        작성자 이름 : 홍길동
      </div>

      <div>구하는 직무 : 프론트 2명, 백 2명, 디자이너 2명</div>

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
        ></Editor>
      </div>

      <div>
        모집기간 2022.03.05~2022.03.31
        {/* 달력을 이용하여 날짜 선택 */}
        <div className="calender-container">
          <div className="calender-box">
            <div className="date">시작날짜</div>
            <div>
              <MyDatePicker
                selected={startDate}
                dateFormat="yyyy-MM-dd" // 날짜 형식
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="calender-box">
            <div className="date">종료날짜</div>
            <div>
              <MyDatePicker
                selected={endDate}
                dateFormat="yyyy-MM-dd" // 날짜 형식
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Button>입력 완료</Button>
    </React.Fragment>
  );
}

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  height: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: transparent;
  color: white;
  border: 1px solid;
`; // styled-components 이용 스타일륑

export default CreateProject;
