import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../Components/Modals/Modal";
import BannerImg from "../static/BannerImg.png";

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

            </SubBanner>
            <SubBanner2>

            </SubBanner2>
          </div>

        </>
      </Container>
    </Wrap>
  );
}

export default Main;