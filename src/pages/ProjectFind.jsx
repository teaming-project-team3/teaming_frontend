import styled from "styled-components";
import {motion} from "framer-motion"

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
  left: 166px;
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
  left: 166px;
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
  margin: 230px 8px ;
`

const AllTitle = styled.div`
  position: static;
  width: 50px;
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
  width: 64px;
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
  width: 79px;
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
      </Container>
    </Wrap>

  );
}

export default FindProject;