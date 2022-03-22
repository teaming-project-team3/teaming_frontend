function UserCard(props) {
  
  
  return (
    <div 
    onMouseOver={props._onMouseOver}
    onMouseOut={props._onMouseOut} 
    className="w-1/4 h-[35vh] ml-10 mr-10 mt-5 mb-5 rounded-xl">
              <div className="flex justify-center h-1/3 mb-[-6vh]">
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