function UserCard(props) {
  return (
    <div className="w-1/5 h-[40vh] m-10">
              <div className="flex justify-center h-1/3 mb-[-7vh] border-t-2 border-l-2 border-r-2">
                <img src={props.profile} alt={""} width={"100vw"} height={"100vh"}></img>
              </div>
              <div className="flex flex-col items-center justify-center bg-white h-2/3 rounded-xl">

                <div className="flex text-base text-center font-notoB text-[1.5rem]">
                  조민혁
                </div>

                <div className="flex text-base text-center font-noto3 text-[1rem]">
                  UX/UI Designer
                </div>

              </div>
    </div>
  );
}

export default UserCard;