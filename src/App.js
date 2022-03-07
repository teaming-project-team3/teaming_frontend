import "./App.css";
import SignUp from "./pages/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TempOAuth from "./pages/TempOAuth";
import KakaoRedirect from "./pages/KakaoRedirect";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TempOAuth />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/oauth/kakao/redirect" element={<KakaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
