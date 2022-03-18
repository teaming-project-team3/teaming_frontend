import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../Components/Modals/Modal";
import BannerImg from "../static/BannerImg.png";
import RightCursor from "../static/RightCursor.png";
import Pic from "../static/Pic.png"
import Pic2 from "../static/Pic2.png"

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 2964px;
`

const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 499px;
  left: 0px;
  top: 74px;
  background: #010101;
`

const BannerTitle = styled.div`
  margin-left: 332px;
  padding-top: 169px;
  width: 315px;
  height: 94px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  color: #FFFFFF;
`

const BannerLogo = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;

  margin-left: 836.6px;
  margin-top: -200px;
  
  width: 636.97px;
  height: 367.23px;
`

const BannerSubTitle = styled.div`
  margin-left: 332px;
  padding-top: 116px;
  width: 228px;
  height: 46px;
  left: 166px;
  top: 279px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #FFFFFF;
`
const SubBanner = styled.div`
  margin-left: 166px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 48px;
  position: absolute;
  width: 540px;
  height: 168px;
  left: 166px;
  top: 629px;
  background: #7545F2;
  border-radius: 12px;
`

const SubBannerTitle = styled.div`
  margin-right: 48px;
  margin-top: 28px;
  margin-bottom: 76px;
  width: 160px;
  height: 64px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20.3691px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
`

const SubBannerBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  position: absolute;
  width: 110.73px;
  height: 38px;
  left: 0px;
  top: 74px;
  background: #FFFFFF;
  border-radius: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 32px;
`

const SubBannerBtnTitle = styled.div`
  position: static;
  width: 45px;
  height: 18px;
  left: 16px;
  top: 10px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
`

const Cursor = styled.div`
  //background-image: url(${RightCursor});
  background-repeat: no-repeat;
  position: absolute;
  width: 13.73px;
  height: 12.02px;
  border: 0px solid #000000;
  margin: 0px 65px;
`

const CharImg = styled.div`
  background-image: url(${Pic});
  background-repeat: no-repeat;
  position: static;
  width: 166px;
  height: 128px;
  left: 326px;
  top: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 50px;
`

const SubBanner2 = styled.div`
  margin-left: 166px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 48px;
  position: absolute;
  width: 540px;
  height: 168px;
  left: 734px;
  top: 629px;
  background: #0C42C1;
  border-radius: 12px;
`

// const SubBannerTitle = styled.div`
//   margin-right: 48px;
//   margin-top: 28px;
//   margin-bottom: 76px;
//   width: 160px;
//   height: 64px;
//   font-family: 'Noto Sans CJK KR';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 20.3691px;
//   line-height: 150%;
//   color: #FFFFFF;
//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `

const SubBannerTitle2 = styled.div`
  margin-left: 50px;
  position: static;
  width: 250px;
  height: 64px;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20.3691px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

const SubBannerBtn2 = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  position: absolute;
  width: 110.73px;
  height: 38px;
  left: 0px;
  top: 74px;
  background: #FFFFFF;
  border-radius: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 32px;
`

const SubBannerBtnTitle2 = styled.div`
  position: static;
  width: 45px;
  height: 18px;
  left: 16px;
  top: 10px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: auto;
`

const Cursor2 = styled.div`
  //background-image: url(${RightCursor});
  background-repeat: no-repeat;
  position: absolute;
  width: 13.73px;
  height: 12.02px;
  border: 0px solid #000000;
  margin: 0px 65px;
`

const CharImg2 = styled.div`
  background-image: url(${Pic2});
  background-repeat: no-repeat;
  position: static;
  width: 166px;
  height: 128px;
  left: 326px;
  top: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 50px;
`




function Main() {
  return (
    <Wrap>
      <Container>
        <>
          <Banner>
            <BannerTitle>프로젝트에 즐거움을 모두에게 성장을</BannerTitle>
            <BannerSubTitle>개발자와 디자이너라면 누구나 참여할 수 있는 티밍 !</BannerSubTitle>
            <BannerLogo />
          </Banner>
          <div>
            <SubBanner>
              <SubBannerTitle>사이드 프로젝트를 찾는 분이라면?</SubBannerTitle>
              <SubBannerBtn><SubBannerBtnTitle>바로가기</SubBannerBtnTitle><Cursor /> </SubBannerBtn>
              <CharImg />
            </SubBanner>
            <SubBanner2>
              <SubBannerTitle2>사이드 프로젝트 아이디어가 있으신 분이라면?</SubBannerTitle2>
              <SubBannerBtn2><SubBannerBtnTitle2>바로가기</SubBannerBtnTitle2><Cursor /> </SubBannerBtn2>
              <CharImg2 />
            </SubBanner2>
          </div>

        </>
      </Container>
    </Wrap>
  );
}

export default Main;