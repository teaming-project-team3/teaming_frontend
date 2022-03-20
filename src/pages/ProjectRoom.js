import * as React from "react";
import RadarChart from "../Components/Molecules/RadarChart";
import RoomChat from "../Components/Organisms/RoomChat";
import UserCard from "../Components/Organisms/UserCard";
import Button from "../element/Button";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import Slider from "react-slick";
import { useNavigate } from "react-router";

export default function ProjectRoom() {
  const navigate = useNavigate();
  const [isLeader, setIsLeader] = React.useState(false);
  const [curr, setCurrUser] = React.useState("userA");

  const [page, setPage] = React.useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }
  }, [isLeader]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <div>방제목 :</div>

        <Button>프로젝트 상세 내용</Button>

        {isLeader && <Button>프로젝트 시작!</Button>}

        <div style={{ width: "300px" }} display="flex">
          <RadarChart curr={curr}></RadarChart>
        </div>

        <Slider {...sliderSettings}>
          <div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "300px", margin: "auto" }}>
              <UserCard userId={"userA"} />
            </div>

            <div
              style={{ width: "300px", margin: "auto" }}
              onMouseOver={() => setCurrUser("userB")}
              onMouseOut={() => {
                setCurrUser("userA");
              }}
              onClick={()=>{navigate('/userStats')}}
            >
              <UserCard userId={"userB"} />
            </div>

            <div
              style={{ width: "300px", margin: "auto" }}
              onMouseOver={() => setCurrUser("userC")}
              onMouseOut={() => {
                setCurrUser("userA");
              }}
            >
              <UserCard userId={"userC"} />
            </div>
          </div>
          </div>
          <div>
          <div style={{ display: "flex" }}>
            <div
              style={{ width: "300px", margin: "auto" }}
              onMouseOver={() => setCurrUser("userC")}
              onMouseOut={() => {
                setCurrUser("userA");
              }}
            >
              <UserCard userId={"userC"} />
            </div>

            <div
              style={{ width: "300px", margin: "auto" }}
              onMouseOver={() => setCurrUser("userC")}
              onMouseOut={() => {
                setCurrUser("userA");
              }}
            >
              <UserCard userId={"userC"} />
            </div>

            <div
              style={{ width: "300px", margin: "auto" }}
              onMouseOver={() => setCurrUser("userC")}
              onMouseOut={() => {
                setCurrUser("userA");
              }}
            >
              <UserCard userId={"userC"} />
            </div>
          </div>
          </div>
        </Slider>

        <div>
          <RoomChat></RoomChat>
        </div>
        <PaginationHorizontal>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={50}
            pageRangeDisplayed={5}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          ></Pagination>
        </PaginationHorizontal>
      </div>
    </>
  );
}

const PaginationHorizontal = styled.div`
  & ul li {
    list-style-type: none;
    float: left;
    margin-right: 4px;
  }
`;
