import React from "react";
import {actionCreators as userActions} from "../redux/modules/users";
import emailCheck from "../shared/common";
import {useDispatch} from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

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

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <div>
      <div>
        <h2>로그인</h2>
        <p>
          티밍이 처음이신가요?
          <button onClick={() => {
            console.log("이메일로 회원가입")
            // history.push("/signup")
          }}>
            이메일로 회원가입
          </button>
        </p>
        <div>
          이메일(ID) {" "}
          <input
            value={id}
            placeholder="Normal value"
            onChange={(e) => {
              setId(e.target.value);
              // console.log(e.target.value);
            }}
          />
        </div>
        <div>
          비밀번호 {" "}
          <input
            value={pwd}
            placeholder="Normal value"
            type="password"
            onChange={(e) => {
              setPwd(e.target.value);
              // console.log(e.target.value);
            }}
            onSubmit={signUp}
          />
          <br/>
          <button onClick={() => {
            console.log("비밀번호를 잃어버리셨나요?");
          }}>
            비밀번호를 잃어버리셨나요?
          </button>
        </div>
      </div>

      <button onClick={signUp}>
        로그인
      </button>

      <div>또는</div>
      <div className="">
        <button onClick={() => {
          window.location.href = "https://github.com/";
        }}>
          <img src="" alt=""/>
          <span className="">카카오 로그인</span>
        </button>
      </div>


    </div>

  );
}

export default Login;