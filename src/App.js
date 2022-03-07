import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import TempOAuth from "./pages/TempOAuth";
import KakaoRedirect from "./pages/KakaoRedirect";
import Login from "./pages/Login"
import Header from "./Components/Header"
import Main from "./pages/Main";
// import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/*<Route path="/" element={<TempOAuth />} />*/}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
