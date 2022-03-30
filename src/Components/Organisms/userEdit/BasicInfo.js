import ProfileImage from "../upload/ProfileImage";

export const BasicInfo = (props) => {


  
    return (
        <div className="h-fit w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
        <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
          기본 정보
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8 border-b-2">
          닉네임
          <input
            className="w-1/2 ml-3 mr-10 border-2 rounded"
            placeholder={props.nickName}
            onChange={(event) => props.setUserNickName(event.target.value)}
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
            placeholder={""}
            onChange={(event) => props.setIntro(event.target.value)}
          ></textarea>
        </div>

        <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pl-8 pb-8 ml-8">
          GitHub URL
          <input
            className="w-1/2 ml-3 mr-10 border-2 rounded"
            placeholder={""}
            onChange={(event) => props.setGitId(event.target.value)}
          ></input>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-1/3 p-3 text-center text-white bg-purple-400 rounded font-noto2">
            <button>적용 하기</button>
          </div>
        </div>
      </div>
    );
  };

export default BasicInfo;