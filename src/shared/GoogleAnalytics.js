import {useEffect} from "react";
import ReactGA from "react-ga";

const Analytics = () => {
  const pathName = window.location.pathname;
  useEffect(() => {
    //로컬 환경에서는 카운팅이 안되도록 조건을 줌
    if(process.env.NODE_ENV === "production") {
      //initialize: 추적ID를 초기화하여 적용
      ReactGA.initialize("G-33MVJMMLQH");
      // set: 페이지 설정
      ReactGA.set({page: pathName});
      //pageview: 설정된 페이지에 사용자가 보낸 요청의 수를 세어 준다
      ReactGA.pageview(pathName);
    }
 }, [pathName]);
  return <></>;
}

export default Analytics;