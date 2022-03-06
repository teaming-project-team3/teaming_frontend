import React from "react";
import styled from "styled-components";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";

function SignUp() {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signUp = async (e) => {
    e.preventDefault();

    if (id === "" || pwd === "" || nickName === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    //redux & apis
    //img url FB

    //const imgUrl = await getImgUrlFB(id, _profilePreview)
    const imgUrl = "";

    dispatch(userActions.signUp(id, user_name, pwd, pwdCheck, imgUrl));
  };

  return (
    <div className="App">
      <div>
        아이디 :{" "}
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div>
        닉네임 :{" "}
        <input
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
      </div>
      <div>
        비밀번호 :{" "}
        <input
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </div>
      <div>
        비밀번호 확인 : <input 
        onChange={(e) => {
          setPwdCheck(e.target.value);
        }}
        />
      </div>
      <Button _onClick={signUp}>동의하고 회원가입</Button>
    </div>
  );
}

export default SignUp;
