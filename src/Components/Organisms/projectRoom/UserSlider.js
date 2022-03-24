import Slider from "react-slick";
import VideoChat from "../../../pages/VideoChat";
import UserCard from "./UserCard";


function UserSlider(props) {
    
    const {exUser, _onMouseOut, _onMouseOver, videoMode, audioMode} = props;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
  
    return (
        
          <div className="w-[65vw] bg-red-400 mr-10">
            <Slider {...sliderSettings}>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">

                {videoMode &&
                <div className="w-1/4 h-[35vh] ml-10 mr-10 mt-5 mb-5 rounded-xl">
                    <VideoChat videoMode={videoMode} audioMode={audioMode}/>
                </div>
                }
                {!videoMode &&
                    <UserCard profile={exUser}></UserCard>
                }

                  
                  <UserCard 
                  _onMouseOver={_onMouseOver}
                  _onMouseOut={_onMouseOut}
                  profile={exUser}></UserCard>

                  <UserCard 
                  _onMouseOver={_onMouseOver}
                  _onMouseOut={_onMouseOut}
                  profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
              </div>
              <div className="w-fit h-[80vh] bg-[#F2F3F7]">
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
                <div className="flex">
                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>

                  <UserCard profile={exUser}></UserCard>
                </div>
              </div>
            </Slider>
          </div>
    );
  }
  
  export default UserSlider;