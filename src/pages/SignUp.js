import React from "react";
//import styled from "styled-components";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
// import S3Upload from "../Components/Organisms/upload/S3Upload";
// import Image from "../Components/Atoms/Image";
//import {apis} from "../apis/apis"
import styled from "styled-components";
// import tw from "tailwind-styled-components";
import KakaoSignupBtn from "../static/KakaoSignupBtn.png";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1024px;
`

const Title = styled.h1`
  padding-top: 111px;
  padding-bottom: 8px;
  width: 96px;
  height: 34px;
  left: 527px;
  top: 192px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  color: #121414;
`;

const SubTitle = styled.h5`
  padding-top: 42px;
  padding-bottom: 46px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #5D6669;
`;

const EmailTitle = styled.div`
  width: 69px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`

const EmailInput = styled.input`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`;

const NameTitle = styled.div`
  padding-top: 24px;
  width: 79px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`;

const NameInput = styled.input`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`;

const PwTitle = styled.div`
  padding-top: 25px;
  width: 59px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`

const PwInput = styled.input`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const PwInput2 = styled.input`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const SignupTitle = styled.div`
  width: 52px;
  height: 21px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const CheckBox = styled.input`
  margin-top: 15px;
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const CheckTitle = styled.div`
  position: static;
  width: 78px;
  height: 18px;
  left: 0px;
  top: 0px;
  
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: #121414;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: -23px 32px;
`
const Look = styled.a`
  margin-top: 15px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #5C3FBF;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const CheckBox2 = styled.input`
  margin-top: 9px;
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const CheckTitle2 = styled.div`
  position: static;
  width: 161px;
  height: 18px;
  left: 0px;
  top: 0px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: #121414;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: -23px 32px;
`
const Look2 = styled.a`
  margin-top: 7px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #5C3FBF;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const Or = styled.div`
  margin-top: 14px;
  margin-: 122px;
  width: 26px;
  height: 21px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #A7AAAB;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const UnderscoreLeft = styled.hr`
  position: static;
  width: 170px;
  height: 1px;
  left: 0px;
  top: 18px;

  background: #E4E8EB;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 9px;
`

const UnderscoreRight = styled.hr`
  position: static;
  width: 170px;
  height: 1px;
  left: 214px;
  top: 18px;

  background: #E4E8EB;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 24px 9px;
`

const KakaoBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 172px;
  width: 384px;
  height: 46px;
  background: #FEE500;
  border-radius: 4px;
`

const KakaoLogo = styled.div`
  margin-top: 9.62px;
  background-image: url(${KakaoSignupBtn});
  background-repeat: no-repeat;
  position: static;
  width: 30px;
  height: 30px;
  left: 130px;
  top: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const KakaoTitle = styled.div`
  width: 94px;
  height: 21px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #3E4849;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`

const UnderscoreBottom = styled.div`
  margin-top: 98px;
  width: 1108px;
  height: 0px;
  border: 1px solid #EBEEF1;
`

const BottomLogo = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 87px;
  height: 29px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20.5645px;
  line-height: 29px;
  color: #593CE5;
`



function SignUp() {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
 // const [user_name, setUserName] = React.useState("");
 //  const preview = useSelector((state) => state.image.preview);
  
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
    <Wrap>
      <Container>
        {/*<div>*/}
        {/*  이미지 업로드 :*/}
        {/*  <S3Upload/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*<Image*/}
        {/*  shape="circle"*/}
        {/*  src={*/}
        {/*    preview*/}
        {/*      ? preview*/}
        {/*      : "http://via.placeholder.com/400x300"*/}
        {/*  }*/}
        {/*  ></Image>*/}
        {/*</div>*/}
        <div style={{width: "384px"}}>
          <div>
            <Title>회원가입</Title>
            <SubTitle>티밍과 함께 프로젝트에 함께할 동료를 찾아보세요!</SubTitle>
          </div>
          <div>
            <EmailTitle>
              이메일(ID) *{" "}
              <EmailInput
                placeholder="아이디 입력"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </EmailTitle>
          </div>
          <div>
            <NameTitle>
              이름/ 기업명 *{" "}
              <NameInput
                placeholder="이름/ 기업명 입력"
                onChange={(e) => {
                  console.log(e.target.value);
                  setNickName(e.target.value);
                }}
              />
            </NameTitle>
          </div>
          <div>
            <PwTitle>
              비밀번호 *{" "}
              <PwInput
                placeholder="비밀번호 입력"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
              <PwInput2
                placeholder="비밀번호 확인"
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }}
              />
            </PwTitle>
          </div>

          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div>
              <CheckBox type="checkbox" />
              <CheckTitle>[필수] 이용약관</CheckTitle>
            </div>
            <Look>보기</Look>
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div>
              <CheckBox2 type="checkbox"/>
              <CheckTitle2>[필수] 개인동의 수집 이용동의서</CheckTitle2>
            </div>
            <Look2>보기</Look2>
          </div>
          <div>
            <Button _onClick={signUp}><SignupTitle>회원가입</SignupTitle></Button>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <UnderscoreLeft /><Or>또는</Or><UnderscoreRight/>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <KakaoBtn>
             <KakaoLogo /><KakaoTitle>카카오 회원가입</KakaoTitle>
            </KakaoBtn>
          </div>
          </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <UnderscoreBottom />
          <BottomLogo>Teaming</BottomLogo>
        </div>
      </Container>
    </Wrap>
  );
}

export default SignUp;
