// 리다이렉트될 화면

import React from "react";
//import { actionCreators as userActions } from "../redux/modules/user";
//import Spinner from "./Spinner";

const KakaoRedirect = (props) => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

//   React.useEffect(async () => {
//     //await dispatch(userActions.kakaoLogin(code));
//   }, []);

  return <div>
      카카오 코드 : ${code}
  </div>;
};

export default KakaoRedirect;