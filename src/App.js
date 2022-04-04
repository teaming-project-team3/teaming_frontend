import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirect from "./pages/KakaoRedirect";
import Login from "./pages/Login"
import Header from "./Components/Header"
import Main from "./pages/Main";
import Survey from "./pages/Survey"
import UserStat from "./pages/UserStat"
import ProjectDetailModal from "./pages/ProjectDetailModal"
import CreateProject from "./pages/CreateProject"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DMJoin from "./Components/Organisms/DMJoin/DMJoin";
import DMChat from "./Components/Organisms/DMChat/DMChat";
import ProjectRoom from "./pages/ProjectRoom";
import ScrollToTop from "./shared/ScrollToTop"
import UserEdit from "./pages/UserEdit";
import ProjectSearch from "./pages/ProjectSearch";
import Images from "./Components/Organisms/upload/Images";
import Privacy from "./pages/Privacy";
import ChatBox from "./Components/Organisms/DMChat/ChatBox";
import UpdateProject from "./pages/UpdateProject";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginMaintainer } from "./redux/modules/users";


function App() {

  const surveyChecker = useSelector((state) => state.users.surveyCheck);

  const [blocker, setBlocker] = useState(surveyChecker);

  const dispatch = useDispatch();

  useEffect(()=>{

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
          <Route path="/survey" element={<Survey/>} />
          <Route path="/userStats" element={<UserStat />} />
          <Route path="/userEdit" element={<UserEdit />} />
          <Route path="/createProject" element={<CreateProject/>} />
          <Route path="/updateProject" element={<UpdateProject/>} />
          <Route path="/ProjectRoom" element={<ProjectRoom/>} />
          <Route path="/projectDetail" element={<ProjectDetailModal/>} />
          <Route path="/projectFind" element={<ProjectSearch blocker={blocker} setBlocker={setBlocker}/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao/redirect" element={<KakaoRedirect />} />
          <Route path="/chat/join" element={<DMJoin/>}/>
          <Route path="/chat/dm" element={<DMChat/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/test" element={<ChatBox/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
