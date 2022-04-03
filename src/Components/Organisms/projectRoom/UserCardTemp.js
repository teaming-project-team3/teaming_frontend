import tw from "tailwind-styled-components";

const UserCardTw = tw.div`
w-full h-full cursor-pointer
${(props) => (props.$shows ? "" : `hidden`)};
`;

function UserCardTemp(props) {
  const { stats, _onMouseOver, _onMouseOut, userDetailShow } = props;

  const nameManufacture = (name) => {
    return name.split("&")[0];
  };

  return (
    <UserCardTw
      $shows={props.$shows}
      className="w-[19.125rem] h-[14.625rem] drop-shadow-xl"
      onClick={() => {
        userDetailShow(stats.userId);
      }}
      onMouseOver={() => {
        _onMouseOver(stats.userId);
      }}
      onMouseOut={() => {
        _onMouseOut();
      }}
    >
      <div className="flex mt-[-2.688rem] mb-[-4.188rem] justify-center">
        <img
          src={stats.profileUrl}
          alt={""}
          className="w-[6.875rem] h-[6.875rem] rounded-full aspect-square"
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center bg-white h-[14.625rem] rounded-xl">
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
