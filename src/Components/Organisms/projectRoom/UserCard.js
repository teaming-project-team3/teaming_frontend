import video from "../../../static/images/projectRoom/video.png"
import mic from "../../../static/images/projectRoom/mic.png"
import tw from "tailwind-styled-components";

const UserCardTw = tw.div`
w-1/4 h-[35vh] ml-10 mr-10 
mt-5 mb-5 rounded-xl
${(props) => (props.isShow ? "" : `hidden`)};
`

function UserCard(props) {

  console.log("userCard props isShow",props.isShow);

  return (
    <UserCardTw
    isShow={props.isShow}
    onMouseOver={props._onMouseOver}
    onMouseOut={props._onMouseOut}
    className="userCardEx"
  >
      <div className="flex justify-center h-1/3 mb-[-6vh]">
        <img
          src={props.profile}
          alt={""}
          width={"100vw"}
          height={"100vh"}
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center bg-white h-2/3 rounded-xl">
        <div className="flex text-base text-center font-notoB text-[1.5rem]">
          조민혁
        </div>

        <div className="flex text-base text-center font-noto3 text-[1rem]">
          UX/UI Designer
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <img
          src={video}
          alt={"video"}
          className="w-1/4 p-3 cursor-pointer"
          onClick={props.videoToggle}
        />
        <img
          src={mic}
          alt={"mic"}
          className="w-1/4 p-3 cursor-pointer"
          onClick={props.audioToggle}
        />
      </div>
    </UserCardTw>
  );
}

export default UserCard;
