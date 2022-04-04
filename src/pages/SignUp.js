import React, { useState } from "react";
import Button from "../element/Button";
import emailCheck from "../shared/common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
import styled from "styled-components";
import KakaoSignupBtn from "../static/KakaoSignupBtn.png";
import HorizonLine from "../Components/Atoms/HorizonLine";
import { useNavigate } from "react-router";
import AWS from 'aws-sdk';
import ProfileImage from "../Components/Organisms/upload/ProfileImage";
import { KAKAO_AUTH_URL } from "../apis/kakao/kakao";

const Title = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  color: #121414;
`;

const SubTitle = styled.h5`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #5d6669;
`;

const EmailTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`;

const EmailInput = styled.input`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #e4e8eb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const NameTitle = styled.div`
  font-family: "Noto Sans CJK KR";
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
  background: #ffffff;
  border: 1px solid #e4e8eb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const PwTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #121414;
`;

const PwInput = styled.input`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #e4e8eb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const PwInput2 = styled.input`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 384px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #e4e8eb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const SignupTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const CheckTitle = styled.div`
  position: static;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #121414;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Look = styled.a`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-decoration-line: underline;
  color: #5c3fbf;
  order: 1;
`;

const KakaoBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 172px;
  width: 384px;
  height: 46px;
  background: #fee500;
  border-radius: 4px;
`;

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
`;

const KakaoTitle = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #3e4849;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`;

const UnderscoreBottom = styled.div`
  margin-top: 98px;
  width: 1108px;
  height: 0px;
  border: 1px solid #ebeef1;
`;

const BottomLogo = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 87px;
  height: 29px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20.5645px;
  line-height: 29px;
  color: #593ce5;
`;

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [id, setId] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [imgFile,setImgFile] = useState("");

  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
  };
  
  const signUp = async (e) => {
    e.preventDefault();
    console.log("checking signup!");
    if(!bChecked){
      window.alert("이용약관에 동의해주세요!")
      return;
    }

    if (id === "" || pwd === "" || nickName === "" || pwdCheck === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if (pwd!==pwdCheck){
      window.alert("암호가 일치하지 않습니다!")
      return;
    }

    const data = {
      email: id,
      password: pwd,
      passwordCheck: pwdCheck,
      nickname: nickName,
      profileUrl: "",
    };

    uploadFile(imgFile, data);

  };

  const REGION = "ap-northeast-2";
  const S3_BUCKET = 'teaming.link';

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_BASE_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
  });
  
  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
  });

  const uploadFile = (file, data) => {
    const imgName = `${id}_${new Date().getTime()}`
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: "upload/" + imgName + file.name
    };
    
    myBucket.putObject(params)
      .on('httpUploadProgress', (evt, res) => {
        let imgUrl = "https://s3.ap-northeast-2.amazonaws.com"+res.request.httpRequest.path
        data = {...data, profileUrl: imgUrl};
        
      dispatch(userActions.signUp(data, () => {navigate('/login')}));

      })
      .send((err) => {
        if (err) {window.alert("잠시 후 다시 시도해주세요.", err)
                  console.log(err)
      }
      })
    
  }

  return (
    <div className="flex justify-center w-screen mt-3">
      <div className="flex flex-col items-center justify-center w-1/2 gap-3">
        <Title>회원가입</Title>

        <SubTitle>티밍과 함께 프로젝트에 함께할 동료를 찾아보세요!</SubTitle>

        <div>
          <EmailTitle>이메일(ID) <span className="text-red-600 font-notoB">*</span> </EmailTitle>
          <EmailInput
            placeholder="아이디 입력"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <div>
          <EmailTitle>Profile Image <span className="text-red-600 font-notoB">*</span> </EmailTitle>
          <div className="w-[384px]">
          <ProfileImage setProfileUrl={setImgFile}/>
          </div>
        </div>

        

        <div>
          <NameTitle>이름 <span className="text-red-600 font-notoB">*</span> </NameTitle>
          <NameInput
            placeholder="이름 입력"
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <PwTitle>비밀번호 <span className="text-red-600 font-notoB">*</span> </PwTitle>
          <PwInput
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <PwInput2
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </div>

        <div
          className="grid grid-cols-12 w-[384px] p-1 items-center place-content-center mx-auto"
        >
          
          <input checked={bChecked} onChange={(e) => checkHandler(e)} className="col-span-1 col-start-1" type="checkbox"/>
          <CheckTitle className="col-span-10 col-start-2">[필수] 이용약관 및 개인동의 수집 이용동의서 <span className="text-red-600 font-notoB">*</span></CheckTitle>
          <Look onClick={()=>{window.open('/privacy')}} className="col-span-1 col-start-12 cursor-pointer">보기</Look>
        </div>

        <div>
          <Button _onClick={signUp}>
            <SignupTitle>회원가입</SignupTitle>
          </Button>
        </div>

        <div className="w-1/2">
          <HorizonLine text={"또는"}></HorizonLine>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <KakaoBtn onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}>
            <KakaoLogo />
            <KakaoTitle>카카오 회원가입</KakaoTitle>
          </KakaoBtn>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UnderscoreBottom />
          <BottomLogo>Teaming</BottomLogo>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
