import styled from "styled-components";
import React, {useState} from "react";

const Waraper = styled.div`
  margin-left: 1000px;
`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  //justify-content: center;
  background: #F2F3F7;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px; 
`

const Title = styled.h1`
  position: absolute;
  width: 328px;
  height: 47px;
  left: 332px;
  top: 193px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  color: #121414;
`

const SubTitle = styled.div`
  position: absolute;
  width: 356px;
  height: 23px;
  left: 332px;
  top: 252px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 350;
  font-size: 18px;
  line-height: 130%;
  color: #71797D;
`

const AllBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  position: static;
  width: 106px;
  height: 44px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border: 2px solid #7545F2;
  box-sizing: border-box;
  border-radius: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 230px 8px 0px 332px;
`

const AllTitle = styled.div`
  position: static;
  width: 60px;
  height: 50px;
  left: 28px;
  top: -3px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #7545F2;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const DevBtn = styled.button`
  margin-top: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  position: static;
  width: 120px;
  height: 44px;
  left: 114px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;

`

const DevTitle = styled.div`
  position: static;
  width: 74px;
  height: 50px;
  left: 28px;
  top: -3px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #71797D;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const DesignBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  position: static;
  width: 135px;
  height: 44px;
  left: 242px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 24px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 230px 8px;
`

const DesignTitle = styled.div`
  position: static;
  width: 89px;
  height: 50px;
  left: 28px;
  top: -3px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #71797D;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const Card1 = styled.div`
  position: absolute;
  width: 349px;
  height: 412px;
  left: 332px;
  top: 415px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const CardImg1 = styled.div`
  position: absolute;
  width: 349px;
  height: 200px;
  left: 0px;
  top: 0px;
  background-color: #6d7b97;
  //background: url(.jpg);
  border-radius: 4px 4px 0px 0px;
`
const Job1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;position: absolute;
  width: 77px;
  height: 22px;
  left: 16px;
  top: 220px;
  background: #7545F2;
  border-radius: 20px;
`

const JobTitle1 = styled.div`
  left: 12px;
  top: 2px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
`

const CardTitle1 = styled.div`
  position: absolute;
  width: 317px;
  height: 23px;
  left: 16px;
  top: 256px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #121414;
`

const CardTitleSub1 = styled.div`
  position: absolute;
  width: 317px;
  height: 42px;
  left: 16px;
  top: 291px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #5D6669;
`

const CardUnderscore1 = styled.div`
  position: absolute;
  width: 317px;
  height: 1px;
  left: 16px;
  top: 349px;
  background: #F0F0F0;
`

const CardProfile1 = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  left: 16px;
  top: 366px;
  
  background-color: #6d7b97;
  border-radius: 50%;
  display: inline-block;
`

const CardUsername1 = styled.div`
  position: absolute;
  width: 65px;
  height: 21px;
  left: 48px;
  top: 370px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #71797D;
`


const Card2 = styled.div`
  position: absolute;
  width: 349px;
  height: 412px;
  left: 711px;
  top: 415px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const CardImg2 = styled.div`
  position: absolute;
  width: 349px;
  height: 200px;
  left: 0px;
  top: 0px;
  background-color: #6d7b97;
  //background: url(.jpg);
  border-radius: 4px 4px 0px 0px;
`
const Job2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;position: absolute;
  width: 77px;
  height: 22px;
  left: 16px;
  top: 220px;
  background: #7545F2;
  border-radius: 20px;
`

const JobTitle2 = styled.div`
  left: 12px;
  top: 2px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
`

const CardTitle2 = styled.div`
  position: absolute;
  width: 317px;
  height: 23px;
  left: 16px;
  top: 256px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #121414;
`

const CardTitleSub2 = styled.div`
  position: absolute;
  width: 317px;
  height: 42px;
  left: 16px;
  top: 291px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #5D6669;
`

const CardUnderscore2 = styled.div`
  position: absolute;
  width: 317px;
  height: 1px;
  left: 16px;
  top: 349px;
  background: #F0F0F0;
`

const CardProfile2 = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  left: 16px;
  top: 366px;
  
  background-color: #6d7b97;
  border-radius: 50%;
  display: inline-block;
`

const CardUsername2 = styled.div`
  position: absolute;
  width: 65px;
  height: 21px;
  left: 48px;
  top: 370px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #71797D;
`

const Card3 = styled.div`
  position: absolute;
  width: 349px;
  height: 412px;
  left: 1090px;
  top: 415px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const CardImg3 = styled.div`
  position: absolute;
  width: 349px;
  height: 200px;
  left: 0px;
  top: 0px;
  background-color: #6d7b97;
  //background: url(.jpg);
  border-radius: 4px 4px 0px 0px;
`
const Job3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 12px;position: absolute;
  width: 77px;
  height: 22px;
  left: 16px;
  top: 220px;
  background: #7545F2;
  border-radius: 20px;
`

const JobTitle3 = styled.div`
  left: 12px;
  top: 2px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
`

const CardTitle3 = styled.div`
  position: absolute;
  width: 317px;
  height: 23px;
  left: 16px;
  top: 256px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #121414;
`

const CardTitleSub3 = styled.div`
  position: absolute;
  width: 317px;
  height: 42px;
  left: 16px;
  top: 291px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #5D6669;
`

const CardUnderscore3 = styled.div`
  position: absolute;
  width: 317px;
  height: 1px;
  left: 16px;
  top: 349px;
  background: #F0F0F0;
`

const CardProfile3 = styled.div`
  position: absolute;
  width: 26px;
  height: 26px;
  left: 16px;
  top: 366px;
  
  background-color: #6d7b97;
  border-radius: 50%;
  display: inline-block;
`

const CardUsername3 = styled.div`
  position: absolute;
  width: 65px;
  height: 21px;
  left: 48px;
  top: 370px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #71797D;
`

function FindProject() {


  return (
    <Wrap>
      <Container>
        <div>
          <Title>👊 너! 내 동료가 돼라!</Title>
          <SubTitle>내가 힘을 발휘할 수 있는 프로젝트를 찾아보세요</SubTitle>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "736px"}}>
          <AllBtn><AllTitle>✏️ 전체</AllTitle></AllBtn>
          <DevBtn><DevTitle>💻 개발자</DevTitle></DevBtn>
          <DesignBtn><DesignTitle>🎨 디자이너</DesignTitle></DesignBtn>
        </div>
        <div>
          <Card1>
            <CardImg1 />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "736px"}}>
              <Job1><JobTitle1>Back-End</JobTitle1></Job1>
              <CardTitle1>파이썬으로 배우는 금융공학/퀀트</CardTitle1>
              <CardTitleSub1>현직 금융공학자에게 배우는 파이썬, 퀀트 투자 교육, 금융공학 올인원 패키지!</CardTitleSub1>
            </div>
            <CardUnderscore1 />
            <div>
              <CardProfile1 />
              <CardUsername1>우아한형제</CardUsername1>
            </div>
          </Card1>
          <Card2>
            <CardImg2 />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "736px"}}>
              <Job2><JobTitle2>Back-End</JobTitle2></Job2>
              <CardTitle2>파이썬으로 배우는 금융공학/퀀트</CardTitle2>
              <CardTitleSub2>현직 금융공학자에게 배우는 파이썬, 퀀트 투자 교육, 금융공학 올인원 패키지!</CardTitleSub2>
            </div>
            <CardUnderscore2 />
            <div>
              <CardProfile2 />
              <CardUsername2>우아한형제</CardUsername2>
            </div>
          </Card2>
          <Card3>
            <CardImg3 />
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "736px"}}>
              <Job3><JobTitle3>Back-End</JobTitle3></Job3>
              <CardTitle3>파이썬으로 배우는 금융공학/퀀트</CardTitle3>
              <CardTitleSub3>현직 금융공학자에게 배우는 파이썬, 퀀트 투자 교육, 금융공학 올인원 패키지!</CardTitleSub3>
            </div>
            <CardUnderscore3 />
            <div>
              <CardProfile3 />
              <CardUsername3>우아한형제</CardUsername3>
            </div>
          </Card3>
        </div>

      </Container>
    </Wrap>

  );
}

export default FindProject;