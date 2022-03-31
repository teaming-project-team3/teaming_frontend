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
import CreateProject from "./pages/CreateProject"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TempOAuth from "./pages/TempOAuth";
import DMJoin from "./Components/Organisms/DMJoin/DMJoin";
import DMChat from "./Components/Organisms/DMChat/DMChat";
import UserInfo from "./pages/UserInfo";
import ProjectRoom from "./pages/ProjectRoom";
import ScrollToTop from "./shared/ScrollToTop"
import UserEdit from "./pages/UserEdit";
import VideoChat from "./pages/VideoChat";
import ProjectSearch from "./pages/ProjectSearch";
import Images from "./Components/Organisms/upload/Images";
import ProjectRoomTemp from "./pages/ProjectRoom_temp";


function App() {


  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/oauth" element={<TempOAuth />} />
          <Route path="/myPage" element={<MyPage/>} />
          <Route path="/survey" element={<Survey/>} />
          <Route path="/userStats" element={<UserStat />} />
          <Route path="/userEdit" element={<UserEdit />} />
          <Route path="/createProject" element={<CreateProject/>} />
          <Route path="/ProjectRoom" element={<ProjectRoom/>} />
          <Route path="/projectDetail" element={<ProjectDetailModal/>} />
          <Route path="/projectFind" element={<ProjectSearch/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/kakao/redirect" element={<KakaoRedirect />} />
          <Route path="/chat/join" element={<DMJoin/>}/>
          <Route path="/chat/dm" element={<DMChat/>}/>
          <Route path="/chat/dm" element={<DMChat/>}/>
          <Route path="/testChat" element={<VideoChat/>}/>
          <Route path="/images" element={<Images/>}/>
          <Route path="/ProjectRoomTemp" element={<ProjectRoomTemp/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
