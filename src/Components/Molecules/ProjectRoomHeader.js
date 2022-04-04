import backArrow from "../../static/images/projectRoom/backPress.svg";
//import onlineIcon from '../../icons/onlineIcon.png'


function ProjectRoomHeader(props) {
    
    //const {users} = props;
  
    return (
        <div className="flex h-[10vh] w-screen items-center">
          
        <div className="flex items-center justify-center h-full cursor-pointer aspect-square" onClick={()=>{props.goBack()}}>
          <img src={backArrow} alt={""}></img>
        </div>

        <div className="w-[60vw] text-xl text-black font-noto2">
          {props.title?props.title:""}
        </div>
        
        
        {/* {isLeader && <Button>프로젝트 시작!</Button>} */}

        {/* <div className="flex m-10 font-noto2 justify-items-center">
          {users ? (
            <div>
              <div className='activeContainer'>
                <h2>
                  {users.map((name) => {
                    console.log("in users.map usersData", users)
                    return (
                    <div key={name.nickName} className='activeItem'>
                      {name.nickName}
                      <img alt='Online Icon' src={onlineIcon} />
                    </div>
                  )})}
                </h2>
              </div>
            </div>
            ) : null}
        </div> */}


      </div>
    );
  }
  
  export default ProjectRoomHeader;