import tw from "tailwind-styled-components";

const UserCardTw = tw.div`
w-full h-full
${(props) => (props.$shows ? "" : `hidden`)};
`;

function UserCardTemp(props) {

  const { stats, _onMouseOver, _onMouseOut, userDetailShow } = props;

  const nameManufacture = (name) => {
     return name.split("&")[0]
  }

  return (
    <UserCardTw $shows={props.$shows} className="w-full h-full" onClick={()=>{userDetailShow(stats.userId)}}
    onMouseOver={()=>{_onMouseOver(stats.userId)}} onMouseOut={()=>{_onMouseOut()}}>
      <div className="flex justify-center h-1/3 mb-[-6vh]">
        <img
          src={stats.profileUrl}
          alt={""}
          className="w-1/3 aspect-square"
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center bg-white h-5/6 rounded-xl">
        <div className="flex text-base text-center font-notoB text-[1.5rem]">
          {nameManufacture(stats.nickname)}
        </div>

        <div className="flex text-base text-center font-noto3 text-[1rem]">
          {stats.position}
        </div>
      </div>
    </UserCardTw>
  );
}

export default UserCardTemp;
