import React from "react";
//import styled from "styled-components";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
import S3Upload from "../Components/Organisms/upload/S3Upload";
import Image from "../Components/Atoms/Image";
//import {apis} from "../apis/apis"
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  position: absolute;
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
  position: absolute;
  width: 291px;
  height: 21px;
  left: 529px;
  top: 234px;

  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #5D6669;
`;

const EmailTitle = styled.div`
  position: absolute;
  width: 69px;
  height: 21px;
  left: 528px;
  top: 301px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`

const EmailInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`;

const NameTitle = styled.div`
  position: absolute;
  width: 79px;
  height: 21px;
  left: 529px;
  top: 398px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`;

const NameInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`;

const PwTitle = styled.div`
  position: absolute;
  width: 59px;
  height: 21px;
  left: 528px;
  top: 496px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`

const PwInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 384px;
  height: 46px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const PwInput2 = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 384px;
  height: 46px;
  left: 528px;
  top: 575px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const SignupBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 172px;
  position: absolute;
  width: 384px;
  height: 45px;
  left: 528px;
  top: 692px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`

const SignupTitle = styled.div`
  position: static;
  width: 52px;
  height: 21px;
  left: 166px;
  top: 12px;
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
  position: absolute;
  width: 16px;
  height: 16px;
  left: 528px;
  top: 636px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const CheckTitle = styled.div`
  position: absolute;
  width: 78px;
  height: 18px;
  left: 564px;
  top: 635px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #121414;
`
const Look = styled.a`
  position: absolute;
  width: 23px;
  height: 18px;
  left: 0px;
  top: 0px; 
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
  margin: 635px 530px 371px 887px;
`

const CheckBox2 = styled.input`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 528px;
  top: 661px;
  background: #FFFFFF;
  border: 1px solid #E4E8EB;
  box-sizing: border-box;
  border-radius: 4px;
`

const CheckTitle2 = styled.div`
  position: absolute;
  width: 161px;
  height: 18px; 
  left: 564px;
  top: 660px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #121414;
`
const Look2 = styled.a`
  position: absolute;
  width: 23px;
  height: 18px;
  left: 0px;
  top: 0px; 
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
  margin: 660px 530px 371px 887px;
`

const Or = styled.div`
  position: absolute;
  width: 26px;
  height: 21px;
  left: 707px;
  top: 751px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #A7AAAB;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 9px;
`

const UnderscoreLeft = styled.div`
  position: absolute;
  width: 170px;
  height: 1px;
  left: 528px;
  top: 761px;
  background: #E4E8EB;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 9px;
`

const UnderscoreRight = styled.div`
  position: absolute;
  width: 170px;
  height: 1px;
  left: 742px;
  top: 761px;
  background: #E4E8EB;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 9px;
`

const KakaoBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 172px;
  position: absolute;
  width: 384px;
  height: 46px;
  left: 528px;
  top: 786px;
  background: #FEE500;
  border-radius: 4px;
`


const KakaoTitle = styled.div`
  position: absolute;
  width: 94px;
  height: 21px;
  left: 160px;
  top: 12.5px;
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
  position: absolute;
  width: 1108px;
  height: 0px;
  left: 166px;
  top: 930px;
  border: 1px solid #EBEEF1;
`

const BottomLogo = styled.div`
  position: absolute;
  width: 87px;
  height: 29px;
  left: 677px;
  top: 963px;
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
        <Title>회원가입</Title>
        <SubTitle>티밍과 함께 프로젝트에 함께할 동료를 찾아보세요!</SubTitle>
        <EmailTitle>
          이메일(ID) *{" "}
          <EmailInput
            placeholder="아이디 입력"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </EmailTitle>
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
        <PwTitle>
          비밀번호 *{" "}
          <PwInput
            placeholder="비밀번호 입력"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </PwTitle>
        <PwInput2
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />
        <CheckBox type="checkbox" />
        <CheckTitle>[필수] 이용약관</CheckTitle>
        <Look>보기</Look>
        <CheckBox2 type="checkbox"/>
        <CheckTitle2>[필수] 개인동의 수집 이용동의서</CheckTitle2>
        <Look2>보기</Look2>
        <Button _onClick={signUp}><SignupTitle>회원가입</SignupTitle></Button>
        <UnderscoreLeft /><Or>또는</Or><UnderscoreRight/>
        <KakaoBtn><KakaoTitle>카카오 회원가입</KakaoTitle></KakaoBtn>
        <UnderscoreBottom />
        <BottomLogo>Teaming</BottomLogo>
      </Container>
    </Wrap>
  );
}

export default SignUp;
