import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
       프로젝트 제목
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       인원수: n
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">채팅방 바로가기</Button>
    </CardActions>
  </React.Fragment>
);

const Items = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  list-style: none;
  margin-left: 500px;
  margin-top: -200px;
`;

const Item = styled.li`
  margin-right: 20px;
`;

const Cards = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  list-style: none;
  margin-left: 500px;
  margin-top: 50px;
`;

function MyPage() {

  return (
    <div style={{marginTop: "150px"}}>
      <h1>안녕하세요, 박영승님!</h1>
      <div>
        <div>
          claykr@gmail.com
        </div>
        <button>내 정보 수정하기</button>
        </div>
      <div>
        <h3>내가 참여한 프로젝트 n개</h3>
      </div>
      <div>
        <button>로그이웃</button>
      </div>

      <div>
        <Items>
          <Item>프로젝트</Item>
          <Item>쪽지</Item>
          <Item>좋아요</Item>
          <Item><button>참여 프로젝트 목록</button></Item>
        </Items>
      </div>
      <div>
        <Cards>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
        </Cards>
        <Cards>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
        </Cards>
        <Cards>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
          <Card variant="outlined" style={{marginRight: "20px"}}>{card}</Card>
        </Cards>
      </div>

      </div>

  );
}

export default MyPage;
