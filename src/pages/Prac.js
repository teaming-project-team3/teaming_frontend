import React from "react";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
// import S3Upload from "../Components/Organisms/upload/S3Upload";
// import Image from "../Components/Atoms/Image";
//import {apis} from "../apis/apis"
import styled from "styled-components";
// import tw from "tailwind-styled-components";
import KakaoSignupBtn from "../static/KakaoSignupBtn.png";
import S3Upload from "../Components/Organisms/upload/S3Upload";
import Image from "../Components/Atoms/Image";

function Prac() {



  return (
   
        <div className="h-10 w-7">
         <S3Upload/>
        </div>
    
  );
}

export default Prac;
