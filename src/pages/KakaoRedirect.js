// 리다이렉트될 화면

import React from "react";
import Button from "../element/Button";
import {apis} from "../apis/apis"
//import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";

const KakaoRedirect = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("code : ", code);

  // const data = {
  //   user: code
  // }

  function sendKakao(){
    
    //await dispatch(userActions.kakaoLogin(code));
    apis
      .kakaoSend(code)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })

    
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    



  }, []);

  return <div>
      카카오 코드 : {code}
      <Button _onClick={sendKakao}>백엔드로 전송</Button>
  </div>;
};

export default KakaoRedirect;