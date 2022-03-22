// 리다이렉트될 화면

import React, {useEffect} from "react";
import Button from "../element/Button";
import {apis} from "../apis/apis"

//import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";

const KakaoRedirect = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("code : ", code);



  function sendKakao(){
    
    //await dispatch(userActions.kakaoLogin(code));
    apis
      .kakaoSend(code)
        .then((res) => {
          console.log("kakao res : " , res);
        })
        .catch((err) => {
          console.log("kakao err : " , err);
        })

  }

  useEffect(() => {
        // const abc = async () => {
        //     const response = await api.get(`/auth/kakao/redirect?code=${code}`);
        //     console.log("in redirect : ", response)
        //     return response;
        // };
    });

  return <div>kakao login box
  <Button _onClick={sendKakao}>버튼</Button>
  </div>;
};

export default KakaoRedirect;