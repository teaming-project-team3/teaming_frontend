// 리다이렉트될 화면

import React, {useEffect} from "react";
import ReactGA from "react-ga";
import {apis} from "../apis/apis"
import { useNavigate } from "react-router";
import { setCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { setIsLogIn } from "../redux/modules/users";
import Spinner from "../Components/Organisms/Spinner";

//import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";

const KakaoRedirect = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    apis
    .kakaoSend(code)
      .then((res) => {
        if(res.data.success){
          console.log("kakao",res);
          localStorage.setItem("userId", res.data.nickname);
          setCookie("token", res.data.Authorization, 1);
          dispatch(setIsLogIn(res.data.profileUrl, !res.data.suveyCheck));
          ReactGA.event({
            category: "User",
            action: "User Login",
            label: "Login",
          });
          props.setBlocker(true);
          navigate("/")
      }
      })
      .catch((err) => {
        console.log("kakao err : " , err);
      })
    });

  return <Spinner/>;
};

export default KakaoRedirect;