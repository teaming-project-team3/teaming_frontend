/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//import {actionCreators as userActions} from "../redux/modules/users";
import emailCheck from "../shared/common";
//import {useDispatch} from "react-redux";
import { KAKAO_AUTH_URL } from "../apis/kakao/kakao";
import { apis } from "./../apis/apis";
import loginImg from "../static/loginImg.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import HorizonLine from "../Components/Atoms/HorizonLine";

const LoginImage = tw.div`
  flex
  m-auto
  justify-center	
  items-center
  h-screen
`;

// 로그인 기능
const Login = (props) => {
  //const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const signUp = async (e) => {
    e.preventDefault();

    if (id === "" || pwd === "") {
      window.alert("아이디 / 비밀번호를 확인해주세요! 🤨");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    //dispatch(userActions.loginFB(id, pwd));

    const data = {
      email: "test@test.com",
      password: "1q2w3e4r",
    };

    apis
      .login(data)
      .then((res) => {
        console.log("login completed", res);
      })
      .catch((err) => {
        console.log("login err : ", err);
      });
  };

  return (
    <LoginImage>
      {/* <Container>
        <div>Use the Container as any other React Component</div>
      </Container>
      <h1 className="text-3xl font-bold text-red-400 underline">
        Hello world!
      </h1> */}
      <img
        src={loginImg}
        alt="로그인이미지"
        className="mr-[6.563rem] h-[28.779rem] w-[32.125rem]"
      ></img>
      <div className="flex flex-col items-start content-start gap-2 h-96">
        <div>
          <div className="font-bold font-noto2 text-[1.625rem] leading-[130%]">
            로그인
          </div>
          <div className="font-normal font-noto2 text-[0.875rem] leading-[150%]">
            티밍이 처음이신가요?
            <Link
              to="/signUp"
              className="text-blue-600 font-normal font-noto2 text-[0.875rem] leading-[150%] underline"
            >
              이메일로 회원가입
            </Link>
          </div>
        </div>
        <div className="font-normal font-noto2 text-[0.875rem] leading-[150%]">
          이메일(ID)
        </div>
        <input
          className="w-[24rem] h-[2.875rem] border-2 border-inherit box-border rounded pl-2"
          value={id}
          placeholder="Normal value"
          onChange={(e) => {
            setId(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <div className="font-normal font-noto2 text-[0.875rem] leading-[150%]">
          비밀번호
        </div>
        <input
          className="w-[24rem] h-[2.875rem] border-2 border-inherit box-border rounded pl-2"
          value={pwd}
          placeholder="Normal value"
          type="password"
          onChange={(e) => {
            setPwd(e.target.value);
            // console.log(e.target.value);
          }}
          onSubmit={signUp}
        />
        <Link
          to="signUp"
          className="text-blue-600 font-normal font-noto2 text-[0.875rem] leading-[150%] underline"
        >
          비밀번호를 잃어버리셨나요?
        </Link>

        <button
          onClick={signUp}
          className="w-[24rem] h-[2.875rem] bg-[#593CE5] text-white text-sm shadow-login rounded"
        >
          로그인
        </button>
        <HorizonLine text="또는" />
        <button
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
          className="w-[24rem] h-[2.875rem] bg-[#FEE500] text-[#3E4849] text-sm shadow-login rounded"
        >
          카카오 로그인
        </button>
      </div>
    </LoginImage>
  );
};

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

export default Login;
