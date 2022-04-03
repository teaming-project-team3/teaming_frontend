import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImagesS3Update } from "../../../redux/modules/image";
import { updateUserInfoAPI } from "../../../redux/modules/users";
import ProfileImage from "../upload/ProfileImage";

export const BasicInfo = (props) => {
  const { stats } = props;
  const dispatch = useDispatch();

  const [userNickName, setUserNickName] = React.useState(props.nickName);
  const [intro, setIntro] = React.useState(props.stats.introduction);
  const [gitUrl, setGitUrl] = React.useState(props.stats.url);
  const profileUrl = useSelector((state)=>state.image.image_url);

  function dataFactory(){

    const newData = {
      "nickname": userNickName,
      "introduction": intro,
      "profileUrl": profileUrl,
      "position": stats.position,
      "front" : stats.front,
      "back" : stats.back,
      "design" : stats.design,
      "portfolioUrl" : stats.portfolioUrl,
      "url": gitUrl,
      }

      dispatch(uploadImagesS3Update(newData, (data)=>{dispatch(updateUserInfoAPI(data))}));

  }

  
    return (
        <div className="h-fit w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
        <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
          기본 정보
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8 border-b-2">
          닉네임
          <input
            className="w-1/2 ml-3 mr-10 border-2 rounded"
            value={userNickName}
            onChange={(event) => setUserNickName(event.target.value)}
          ></input>
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8 border-b-2">
          프로필 이미지
          <ProfileImage
          ></ProfileImage>
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8 border-b-2">
          소개말
          <textarea
            rows={4}
            className="w-1/2 ml-3 mr-10 border-2 rounded"
            value={intro}
            onChange={(event) => setIntro(event.target.value)}
          ></textarea>
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8">
          GitHub URL
          <input
            className="w-1/2 ml-3 mr-10 border-2 rounded"
            placeholder={gitUrl}
            onChange={(event) => setGitUrl(event.target.value)}
          ></input>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-1/3 p-3 text-center text-white bg-purple-400 rounded font-noto2" onClick={()=>{dataFactory()}}>
            <button>적용 하기</button>
          </div>
        </div>
      </div>
    );
  };

export default BasicInfo;