// 리다이렉트될 화면

import React, {useEffect} from "react";
import {apis} from "../apis/apis"
import { useNavigate } from "react-router";
import { setCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { setIsLogIn } from "../redux/modules/users";

//import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";

const KakaoRedirect = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("code : ", code);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    apis
    .kakaoSend(code)
      .then((res) => {
        console.log("kakao res : " , res);
        localStorage.setItem("userId", res.data.nickname);
        setCookie("token", res.data.Authorization, 1);
        console.log("login completed", res);
        
        dispatch(setIsLogIn());
        navigate("/")
      })
      .catch((err) => {
        console.log("kakao err : " , err);
      })
    });

  return <div>Loading...</div>;
};

export default KakaoRedirect;