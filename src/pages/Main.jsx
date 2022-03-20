import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import Survey from "../pages/Survey";
import { actionCreators } from "../redux/modules/projects";
import Badge from "../static/Badge.png";
import BannerImg from "../static/BannerImg.png";
import emoji from "../static/emoji.png";
import monocle from "../static/monocle.png";
import Pic from "../static/Pic.png";
import Pic2 from "../static/Pic2.png";
import pngwing from "../static/pngwing.png";
import RightCursor from "../static/RightCursor.png";
import ProjectDetailModal from "./ProjectDetailModal";

const Wrap = styled.div`
  width: 100%;
  height: 2964px;
  display: flex;
  justify-content: center;
  background-color: #F7F7F7;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 2964px;
  background-color: #F7F7F7;

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

// const Cursor2 = styled.div`
//   //background-image: url(${RightCursor});
//   background-repeat: no-repeat;
//   position: absolute;
//   width: 13.73px;
//   height: 12.02px;
//   border: 0px solid #000000;
//   margin: 0px 65px;
// `

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

const FirstTitle = styled.div`
  position: absolute;
  width: 240px;
  height: 38px;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 905px 330px 2021px;
`

const FirecrackerImg = styled.div`
  background-image: url(${pngwing});
  background-repeat: no-repeat;
  position: absolute;
  left: 205px;
  right: 0%;
  top: 0%;
  bottom: 0%;
`

const FirstSubTitle = styled.div`
  position: absolute;
  width: 300px;
  height: 24px;
  left: 0px;
  top: 42px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  flex-grow: 0;
  margin: 905px 330px 2021px;
`

const LiveCard = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 332px;
  top: 1005px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const LiveCardImg = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const LiveCardJobBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const LiveCardJobTitle = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const LiveCardTitle = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const LiveCardUnderscore = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const LiveCardProfile = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;

  background-color: #D3D3D3;
  border-radius: 10px;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const LiveCardUser = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const LiveCard2 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 622px;
  top: 1005px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const LiveCardImg2 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const LiveCardJobBtn2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const LiveCardJobTitle2 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const LiveCardTitle2 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const LiveCardUnderscore2 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const LiveCardProfile2 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const LiveCardUser2 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const LiveCard3 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 908px;
  top: 1005px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px; 
`

const LiveCardImg3 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const LiveCardJobBtn3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const LiveCardJobTitle3 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const LiveCardTitle3 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const LiveCardUnderscore3 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const LiveCardProfile3 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const LiveCardUser3 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const LiveCard4 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 1200px;
  top: 1005px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const LiveCardImg4 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const LiveCardJobBtn4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const LiveCardJobTitle4 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const LiveCardTitle4 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const LiveCardUnderscore4 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const LiveCardProfile4 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const LiveCardUser4 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const ProjectFindDesignerTitle = styled.div`
  position: absolute;
  width: 304px;
  height: 38px;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1413px 330px 2021px;
`

const LovelyImg = styled.div`
  background-image: url(${monocle});
  position: absolute;
  width: 34px;
  height: 34px;
  left: 290px;
  top: 0px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 6px;
`

const ProjectFindDesignerSubTitle = styled.div`
  position: absolute;
  width: 300px;
  height: 24px;
  left: 0px;
  top: 42px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 1413px 330px 2021px;
`

const DesignerCard = styled.div`
  position: absolute;
  width: 550px;
  height: 138px;
  left: 166px;
  top: 1513px;

  background: #FFFFFF;
  border-radius: 12px;
  margin: 0px 161px 2021px;
`

const ProfileImg = styled.div`
  position: static;
  width: 68px;
  height: 68px;
  left: 0px;
  top: 0px;

  //background: url(image.png);
  
  border: 1.32164px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 105.731px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 14px;
`

const StarBadge = styled.div`
  background-image: url(${Badge});
  position: absolute;
  width: 26px;
  height: 26px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 94px;
`

const DesignerName = styled.div`
  position: absolute;
  left: 17.75%;
  right: 55.01%;
  top: 3.46%;
  bottom: 3.46%;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12.9px 4px 0px 30px;
`

const UXUITitle = styled.div`
  position: absolute;
  width: 83px;
  height: 18px;
  left: 150.06px;
  top: 4px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150% ;
  color: #593CE5;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 16px 4px 0px 30px;
`

const DesignerBtn = styled.button`
  position: absolute;
  width: 168px;
  height: 32px;
  left: 94px;
  top: 40px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 14px 0px;
`

const DesignerBtnTitle = styled.div`
  position: absolute;
  width: 58px;
  height: 18px;
  left: 55px;
  top: 7px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const PortfolioOne = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 300px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

const PortfolioTwo = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 418px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

const DesignerCard2 = styled.div`
  position: absolute;
  width: 550px;
  height: 138px;
  left: 737px;
  top: 1513px;

  background: #FFFFFF;
  border-radius: 12px;
  margin: 0px 161px 2021px;
`
// const ProfileImg2 = styled.div`
//   position: static;
//   width: 68px;
//   height: 68px;
//   left: 0px;
//   top: 0px;
//
//   //background: url(image.png);
//
//   border: 1.32164px solid #EBEBEB;
//   box-sizing: border-box;
//   border-radius: 105.731px;
//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 10px 14px;
// `

const StarBadge2 = styled.div`
  background-image: url(${Badge});
  position: absolute;
  width: 26px;
  height: 26px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 94px;
`

const DesignerName2 = styled.div`
  position: absolute;
  left: 17.75%;
  right: 55.01%;
  top: 3.46%;
  bottom: 3.46%;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12.9px 4px 0px 30px;
`

const UXUITitle2 = styled.div`
  position: absolute;
  width: 83px;
  height: 18px;
  left: 150.06px;
  top: 4px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150% ;
  color: #593CE5;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 16px 4px 0px 30px;
`

const DesignerBtn2 = styled.button`
  position: absolute;
  width: 168px;
  height: 32px;
  left: 94px;
  top: 40px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 14px 0px;
`

const DesignerBtnTitle2 = styled.div`
  position: absolute;
  width: 58px;
  height: 18px;
  left: 55px;
  top: 7px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const PortfolioOne2 = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 300px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

// const PortfolioTwo2 = styled.div`
//   position: absolute;
//   width: 110px;
//   height: 114px;
//   left: 418px;
//   top: 12px;
//   background: url(image.png);
//   box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
//   border-radius: 10px;
//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 0px 8px;
// `

const MiddleBanner = styled.div`
  position: absolute;
  width: 99.8%;
  height: 132px;
  left: 2px;
  top: 1759px;
  background: #3E1782;
`

const MiddleBannerTitle = styled.div`
  position: absolute;
  margin: 28px 323px;
  width: 519px;
  height: 76px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #FFFFFF;
`

const MiddleBannerBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  position: absolute;
  width: 195.73px;
  height: 38px; 
  margin: 47px 1250px;
  background: #FFFFFF;
  border-radius: 50px;
`

const MiddleBannerBtnTitle = styled.div`
  position: static;
  width: 130px;
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
  margin: 0px 20px;
`

const FeTitle = styled.div`
  position: absolute;
  width: 366px;
  height: 66px;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1999px 330px 2021px;
`

const FeFirecrackerImg = styled.div`
  background-image: url(${pngwing});
  background-repeat: no-repeat;
  position: absolute;
  left: 315px;
  right: 0%;
  top: 0%;
  bottom: 0%;
`

const FeSubTitle = styled.div`
  position: absolute;
  width: 359px;
  height: 24px;
  left: 0px;
  top: 42px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  flex-grow: 0;
  margin: 2003px 330px 2021px;
`

const FeCard = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 332px;
  top: 2099px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const FeCardImg = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const FeCardJobBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const FeCardJobTitle = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const FeCardTitle = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const FeCardUnderscore = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const FeCardProfile = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;

  background-color: #D3D3D3;
  border-radius: 10px;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const FeCardUser = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const FeCard2 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 622px;
  top: 2099px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const FeCardImg2 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const FeCardJobBtn2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const FeCardJobTitle2 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const FeCardTitle2 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const FeCardUnderscore2 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const FeCardProfile2 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const FeCardUser2 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const FeCard3 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 908px;
  top: 2099px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px; 
`

const FeCardImg3 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const FeCardJobBtn3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const FeCardJobTitle3 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const FeCardTitle3 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const FeCardUnderscore3 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const FeCardProfile3 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const FeCardUser3 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const FeCard4 = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  left: 1200px;
  top: 2099px;
  background: #FFFFFF;
  box-shadow: 0px 0.845506px 6.76404px 2.53652px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`

const FeCardImg4 = styled.div`
  position: absolute;
  width: 250px;
  height: 170px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 4px 4px 0px 0px;
`

const FeCardJobBtn4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.69101px 10.1461px;
  position: absolute;
  width: 89.29px;
  height: 21.38px;
  left: 13.53px;
  top: 186.01px;
  background: #7545F2;
  border-radius: 16.9101px;
`

const FeCardJobTitle4 = styled.div`
  position: static;
  width: 69px;
  height: 18px;
  left: 10.15px;
  top: 1.69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const FeCardTitle4 = styled.div`
  position: absolute;
  width: 220px;
  height: 24px;
  left: 13.53px;
  top: 216.45px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #121414;
`

const FeCardUnderscore4 = styled.div`
  position: absolute;
  width: 220px;
  height: 1px;
  left: 14px;
  top: 248px;
  background: #F0F0F0;
`

const FeCardProfile4 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  background-color: #D3D3D3;
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 262px 7px;
`

const FeCardUser4 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  left: 27px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #71797D;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 262.11px 7px;
`

const ProjectFindDevTitle = styled.div`
  position: absolute;
  width: 304px;
  height: 38px;
  left: 0px;
  top: 0px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 2507px 330px 2021px;
`

const DevLovelyImg = styled.div`
  background-image: url(${emoji});
  position: absolute;
  width: 34px;
  height: 34px;
  left: 268px;
  top: 0px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 6px;
`

const ProjectFindDevSubTitle = styled.div`
  position: absolute;
  width: 300px;
  height: 24px;
  left: 0px;
  top: 42px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 2511px 330px 2021px;
`

const DevCard = styled.div`
  position: absolute;
  width: 550px;
  height: 138px;
  left: 166px;
  top: 2607px;

  background: #FFFFFF;
  border-radius: 12px;
  margin: 0px 161px 2021px;
`

const DevProfileImg = styled.div`
  position: static;
  width: 68px;
  height: 68px;
  left: 0px;
  top: 0px;

  //background: url(image.png);
  
  border: 1.32164px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 105.731px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 14px;
`

const DevStarBadge = styled.div`
  background-image: url(${Badge});
  position: absolute;
  width: 26px;
  height: 26px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 94px;
`

const DevName = styled.div`
  position: absolute;
  left: 17.75%;
  right: 55.01%;
  top: 3.46%;
  bottom: 3.46%;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12.9px 4px 0px 30px;
`

const DevTitle = styled.div`
  position: absolute;
  width: 83px;
  height: 18px;
  left: 150.06px;
  top: 4px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150% ;
  color: #593CE5;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 16px 4px 0px 30px;
`

const DevBtn = styled.button`
  position: absolute;
  width: 168px;
  height: 32px;
  left: 94px;
  top: 40px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 14px 0px;
`

const DevBtnTitle = styled.div`
  position: absolute;
  width: 58px;
  height: 18px;
  left: 55px;
  top: 7px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const DevPortfolioOne = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 300px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

const DevPortfolioTwo = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 418px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

const DevCard2 = styled.div`
  position: absolute;
  width: 550px;
  height: 138px;
  left: 737px;
  top: 2607px;

  background: #FFFFFF;
  border-radius: 12px;
  margin: 0px 161px 2021px;
`
// const ProfileImg2 = styled.div`
//   position: static;
//   width: 68px;
//   height: 68px;
//   left: 0px;
//   top: 0px;
//
//   //background: url(image.png);
//
//   border: 1.32164px solid #EBEBEB;
//   box-sizing: border-box;
//   border-radius: 105.731px;
//   flex: none;
//   order: 0;
//   flex-grow: 0;
//   margin: 10px 14px;
// `

const DevStarBadge2 = styled.div`
  background-image: url(${Badge});
  position: absolute;
  width: 26px;
  height: 26px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 94px;
`

const DevName2 = styled.div`
  position: absolute;
  left: 17.75%;
  right: 55.01%;
  top: 3.46%;
  bottom: 3.46%;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12.9px 4px 0px 30px;
`

const DevTitle2 = styled.div`
  position: absolute;
  width: 92px;
  height: 18px;
  left: 150.06px;
  top: 4px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150% ;
  color: #593CE5;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 16px 4px 0px 30px;
`

const DevBtn2 = styled.button`
  position: absolute;
  width: 168px;
  height: 32px;
  left: 94px;
  top: 40px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 14px 0px;
`

const DevBtnTitle2 = styled.div`
  position: absolute;
  width: 58px;
  height: 18px;
  left: 55px;
  top: 7px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const DevPortfolioOne2 = styled.div`
  position: absolute; 
  width: 110px;
  height: 114px;
  left: 300px;
  top: 12px;
  background: url(image.png);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`

function Main() {

  const location = useLocation();
  const dispatch = useDispatch();
  const projectsData = useSelector((state)=> state.projects.projectsMain)
  //const projectDetail = useSelector((state)=> state.projects.projectDetail)
  const modalIsOpen = location.state;
  const [showDetail, setShowDetail] = useState(false);

  console.log("main, projectsData : ",projectsData)

  useEffect(()=>{

    dispatch(actionCreators.loadProjectsMainAPI())    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const detailShow = (e) => {

    console.log("project card clicked");

    dispatch(actionCreators.getProjectDetailAPI(e.value));

    setShowDetail(true);

    return;

  }
  
  return (
    <Wrap>
      <Survey modalIsOpen={modalIsOpen}></Survey>
      <ProjectDetailModal showDetail={showDetail} callBackSetShowFalse={()=>{
        console.log("setShowDetailFalse")
        return setShowDetail(false)}}></ProjectDetailModal>
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
          <div>
            <FirstTitle>실시간 인기 프로젝트<FirecrackerImg /></FirstTitle>
            <FirstSubTitle>티밍에서 인기 높은 프로젝트를 구경해보세요!</FirstSubTitle>
            <LiveCard onClick={detailShow} value={"boardId"}>
              <LiveCardImg /><LiveCardJobBtn><LiveCardJobTitle>백엔드 개발자</LiveCardJobTitle></LiveCardJobBtn>
              <LiveCardTitle>파이썬으로 배우는 금융공학/퀀트</LiveCardTitle>
              <LiveCardUnderscore />
              <div>
                <LiveCardProfile />
                <LiveCardUser>우아한형제</LiveCardUser>
              </div>
            </LiveCard>
            <LiveCard2>
              <LiveCardImg2 /><LiveCardJobBtn2><LiveCardJobTitle2>백엔드 개발자</LiveCardJobTitle2></LiveCardJobBtn2>
              <LiveCardTitle2>파이썬으로 배우는 금융공학/퀀트</LiveCardTitle2>
              <LiveCardUnderscore2 />
              <div>
                <LiveCardProfile2 />
                <LiveCardUser2>우아한형제</LiveCardUser2>
              </div>
            </LiveCard2>
            <LiveCard3>
              <LiveCardImg3 /><LiveCardJobBtn3><LiveCardJobTitle3>백엔드 개발자</LiveCardJobTitle3></LiveCardJobBtn3>
              <LiveCardTitle3>파이썬으로 배우는 금융공학/퀀트</LiveCardTitle3>
              <LiveCardUnderscore3 />
              <div>
                <LiveCardProfile3 />
                <LiveCardUser3>우아한형제</LiveCardUser3>
              </div>
            </LiveCard3>
            <LiveCard4>
              <LiveCardImg4 /><LiveCardJobBtn4><LiveCardJobTitle4>백엔드 개발자</LiveCardJobTitle4></LiveCardJobBtn4>
              <LiveCardTitle4>파이썬으로 배우는 금융공학/퀀트</LiveCardTitle4>
              <LiveCardUnderscore4 />
              <div>
                <LiveCardProfile4 />
                <LiveCardUser4>우아한형제</LiveCardUser4>
              </div>
            </LiveCard4>
          </div>
          <div>
            <ProjectFindDesignerTitle>프로젝트를 찾는 중인 디자이너<LovelyImg/></ProjectFindDesignerTitle>
            <ProjectFindDesignerSubTitle>함께 프로젝트를 진행할 개발자를 찾아보세요!</ProjectFindDesignerSubTitle>
            <DesignerCard>
              <ProfileImg />
              <StarBadge /><DesignerName>김기진 · </DesignerName><UXUITitle>UX/ UI 디자이너</UXUITitle>
              <DesignerBtn><DesignerBtnTitle>프로필 보기</DesignerBtnTitle></DesignerBtn>
              <PortfolioOne /><PortfolioTwo />
            </DesignerCard>
            <DesignerCard2>
              <ProfileImg />
              <StarBadge2 /><DesignerName2>김기진 · </DesignerName2><UXUITitle2>UX/ UI 디자이너</UXUITitle2>
              <DesignerBtn2><DesignerBtnTitle2>프로필 보기</DesignerBtnTitle2></DesignerBtn2>
              <PortfolioOne2 /><PortfolioTwo />
            </DesignerCard2>
          </div>
          <div>
            <MiddleBanner>
              <MiddleBannerTitle>
                개발자라면?<br/>깃허브 링크를 등록하고 레벨 뱃지를 부여 받아보세요
              </MiddleBannerTitle>
              <MiddleBannerBtn>
                <MiddleBannerBtnTitle>지금 바로 프로필 등록하기</MiddleBannerBtnTitle>
              </MiddleBannerBtn>
            </MiddleBanner>
          </div>
          <div>
            <FeTitle>프론트엔드 개발자 모집 프로젝트 <FeFirecrackerImg /></FeTitle>
            <FeSubTitle>프론트엔드 개발자가 필요한 프로젝트에 지원해보세요!</FeSubTitle>
            <FeCard>
              <FeCardImg /><FeCardJobBtn><FeCardJobTitle>백엔드 개발자</FeCardJobTitle></FeCardJobBtn>
              <FeCardTitle>파이썬으로 배우는 금융공학/퀀트</FeCardTitle>
              <FeCardUnderscore />
              <div>
                <FeCardProfile />
                <FeCardUser>우아한형제</FeCardUser>
              </div>
            </FeCard>
            <FeCard2>
              <FeCardImg2 /><FeCardJobBtn2><FeCardJobTitle2>백엔드 개발자</FeCardJobTitle2></FeCardJobBtn2>
              <FeCardTitle2>파이썬으로 배우는 금융공학/퀀트</FeCardTitle2>
              <FeCardUnderscore2 />
              <div>
                <FeCardProfile2 />
                <FeCardUser2>우아한형제</FeCardUser2>
              </div>
            </FeCard2>
            <FeCard3>
              <FeCardImg3 /><FeCardJobBtn3><FeCardJobTitle3>백엔드 개발자</FeCardJobTitle3></FeCardJobBtn3>
              <FeCardTitle3>파이썬으로 배우는 금융공학/퀀트</FeCardTitle3>
              <FeCardUnderscore3 />
              <div>
                <FeCardProfile3 />
                <FeCardUser3>우아한형제</FeCardUser3>
              </div>
            </FeCard3>
            <FeCard4>
              <FeCardImg4 /><FeCardJobBtn4><FeCardJobTitle4>백엔드 개발자</FeCardJobTitle4></FeCardJobBtn4>
              <FeCardTitle4>파이썬으로 배우는 금융공학/퀀트</FeCardTitle4>
              <FeCardUnderscore4 />
              <div>
                <FeCardProfile4 />
                <FeCardUser4>우아한형제</FeCardUser4>
              </div>
            </FeCard4>
          </div>
          <div>
            <ProjectFindDevTitle>프로젝트를 찾는 중인 개발자<DevLovelyImg/></ProjectFindDevTitle>
            <ProjectFindDevSubTitle>함께 프로젝트를 진행할 개발자를 찾아보세요!</ProjectFindDevSubTitle>
            <DevCard>
              <DevProfileImg />
              <DevStarBadge /><DevName>김기진 · </DevName><DevTitle>백엔드 개발자</DevTitle>
              <DevBtn><DevBtnTitle>프로필 보기</DevBtnTitle></DevBtn>
              <DevPortfolioOne /><DevPortfolioTwo />
            </DevCard>
            <DevCard2>
              <DevProfileImg />
              <DevStarBadge2 /><DevName2>김기진 · </DevName2><DevTitle2>프론트엔드 개발자</DevTitle2>
              <DevBtn2><DevBtnTitle2>프로필 보기</DevBtnTitle2></DevBtn2>
              <DevPortfolioOne2 /><DevPortfolioTwo />
            </DevCard2>
          </div>
        </>
      </Container>
    </Wrap>
  );
}

export default Main;