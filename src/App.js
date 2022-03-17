import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import KakaoRedirect from "./pages/KakaoRedirect";
import Login from "./pages/Login"
import Header from "./Components/Header"
import Main from "./pages/Main";
import Survey from "./pages/Survey"
import UserStat from "./pages/UserStat"
import MyPage from "./pages/MyPage"
import ProjectDetailModal from "./pages/ProjectDetailModal"
import ProjectFind from "./pages/ProjectFind"
import CreateProject from "./pages/CreateProject"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectRoom from "./pages/ProjectRoom";
import TempOAuth from "./pages/TempOAuth";
import DMJoin from "./Components/Organisms/DMJoin/DMJoin";
import DMChat from "./Components/Organisms/DMChat/DMChat";
import UserInfo from "./pages/UserInfo";



function App() {
  return (
    <BrowserRouter>
      {/*<Header />*/}
        <Routes>
          <Route path="/" element={<ProjectRoom />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/oauth" element={<TempOAuth />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/myPage" element={<MyPage/>} />
          <Route path="/survey" element={<Survey/>} />
          <Route path="/userStats" element={<UserStat />} />
          <Route path="/createProject" element={<CreateProject/>} />
          <Route path="/projectDetail" element={<ProjectDetailModal/>} />
          <Route path="/projectFind" element={<ProjectFind/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao/redirect" element={<KakaoRedirect />} />
          <Route path="/chat/join" element={<DMJoin/>}/>
          <Route path="/chat/dm" element={<DMChat/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
