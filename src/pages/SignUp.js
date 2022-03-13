import React from "react";
//import styled from "styled-components";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
import S3Upload from "../Components/Organisms/upload/S3Upload";
import Image from "../Components/Atoms/Image";
//import {apis} from "../apis/apis"

function SignUp() {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
 // const [user_name, setUserName] = React.useState("");
  const preview = useSelector((state) => state.image.preview);
  
  const signUp = (e) => {
    e.preventDefault();

    if (id === "" || pwd === "" || nickName === "" || pwdCheck === "") {
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
    //const imgUrl = "";

      const data = {
      email : "test@test2.com",
      password : "1q2w3e4r",
      passwordCheck : "1q2w3e4r",
      nickname : "test2",
      kakao: "test2"
      }

    dispatch(userActions.signUp(data));




    //회원가입 API 구현부
    //redux middlewear로 옮길 것. 오류발생하여 못함
    // apis
    //   .signup(data)
    //   .then((res) => {
    //     console.log("signup completed", res)
    //   })
    //   .catch((err) => {
    //     console.log("signup err : ", err)
    //   })

  };

  return (
    <div className="App">

      <div>
        이미지 업로드 : 
        <S3Upload/>

      </div>

      <div style={{ width: "300px" }}>
      <Image
        shape="circle"
        src={
          preview
            ? preview
            : "http://via.placeholder.com/400x300"
        }
        ></Image>
      </div>

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
