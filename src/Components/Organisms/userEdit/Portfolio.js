import { useState } from "react";
import Select from "react-select";
import ModalSelect from "../../../pages/ModalSelect";
import Images from "../upload/Images";
import styled from "styled-components";
import DatePicker from "react-datepicker";

const MyDatePicker = styled(DatePicker)`
  width: 90%;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  color: #000000;
`; // styled-components 이용 스타일륑

export const Portfolio = (props) => {

  const [projectName, setProjectName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectContents, setProjectContents] = useState();
  const [projectURL, setProjectURL] = useState();


  return (
    <div className="w-full h-full">
      <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8 border-b-2">
        <div className="w-1/3 pl-8">프로젝트명</div>
        <input
          className="w-1/2 ml-3 mr-10 border-2 rounded"
          placeholder={""}
          onChange={(event) => setProjectName(event.target.value)}
        ></input>
      </div>

      <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8 border-b-2">
        <div className="w-1/3 pl-8">프로젝트 사진</div>
        <Images/>
      </div>

      <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8 border-b-2">
        <div className="w-1/3 pl-8">모집 기간</div>

        <div className="flex w-2/3">
          {/* 달력을 이용하여 날짜 선택 */}
          <div className="calender-container">
            <div className="flex calender-box">
              <div className="mr-2 date">시작일</div>
              <div className="ml-2">
                <MyDatePicker
                  selected={startDate}
                  dateFormat="yyyy-MM-dd" // 날짜 형식
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
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

      <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8 border-b-2">
        소개말
        <textarea
          rows={4}
          className="w-1/2 ml-3 mr-10 border-2 rounded"
          placeholder={""}
          onChange={(event) => setProjectContents(event.target.value)}
        ></textarea>
      </div>

      <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8">
        <div className="w-1/3 pl-8">프로젝트URL</div>
        <input
          className="w-1/2 ml-3 mr-10 border-2 rounded"
          placeholder={""}
          onChange={(event) => setProjectURL(event.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Portfolio;
