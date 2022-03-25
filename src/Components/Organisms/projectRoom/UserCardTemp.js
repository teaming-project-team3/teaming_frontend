import tw from "tailwind-styled-components";

const UserCardTw = tw.div`
w-full h-full
${(props) => (props.$shows ? "" : `hidden`)};
`;

function UserCardTemp(props) {

  return (
    <UserCardTw $shows={props.$shows} className="w-full h-full">
      <div className="flex justify-center h-1/3 mb-[-6vh]">
        <img
          src={props.profile}
          alt={""}
          className="w-1/3 aspect-square"
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center bg-white h-5/6 rounded-xl">
        <div className="flex text-base text-center font-notoB text-[1.5rem]">
          {localStorage.getItem("userId")}
        </div>

        <div className="flex text-base text-center font-noto3 text-[1rem]">
          UX/UI Designer
        </div>
      </div>
    </UserCardTw>
  );
}

export default UserCardTemp;
