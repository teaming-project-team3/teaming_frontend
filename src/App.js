import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirect from "./pages/KakaoRedirect";
import Header from "./Components/Header"
import ScrollToTop from "./shared/ScrollToTop"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginMaintainer } from "./redux/modules/users";
import { Login, UserEdit, ProjectSearch, Privacy, UpdateProject, Main, UserStat, CreateProject, SignUp, ProjectRoom } from "./pages";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const surveyChecker = useSelector((state) => state.users.surveyCheck);

  const [blocker, setBlocker] = useState(surveyChecker);
  console.log("check app blocker", blocker)

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("check app surveyCheck", surveyChecker)
    setBlocker(surveyChecker);

  },[surveyChecker])

  useEffect(()=>{
    
    dispatch(loginMaintainer(localStorage.getItem("userId")!==null))

    return(()=>{})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <BrowserRouter>
      <Header setBlocker={setBlocker} />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main blocker={blocker} setBlocker={setBlocker}/>} />
          <Route path="/userStats" element={<UserStat />} />
          <Route path="/userEdit" element={<UserEdit />} />
          <Route path="/createProject" element={<CreateProject/>} />
          <Route path="/updateProject" element={<UpdateProject/>} />
          <Route path="/ProjectRoom" element={<ProjectRoom/>} />
          <Route path="/projectFind" element={<ProjectSearch blocker={blocker} setBlocker={setBlocker}/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao/redirect" element={<KakaoRedirect setBlocker={setBlocker} />} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
