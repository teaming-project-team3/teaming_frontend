import project1 from "../../../static/images/userStats/exProject01.png";
import ProfileCard from "./ProfileCard";
import Tier from "../../../static/images/main/tier.svg";
import Slider from "react-slick";

function ProfileList(props) {

  const { data, title } = props;

    ProfileList.defaultProps = {
        data : [{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        },{
            imgUrl:"",
            stack:[],
            title:"",
            profileUrl:"",
            nickname:"",
        }],
    }

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  return (
      <div>
        <div className="flex flex-col mt-[6.75rem]">
          <div>
            <div className="flex w-3/4 mx-auto text-2xl font-notoB">
              {title.main}
            </div>
            <div className="flex w-3/4 mx-auto text-base font-noto2">
              {title.sub}
            </div>
          </div>
        </div>

        
        <Slider {...sliderSettings}>
            <div className="flex w-fit">
              <div className="flex justify-center w-full mt-10">
            <ProfileCard
              _onClick={props.detailShow}
              id={data[0]._id}
              key={0}
              nickname={data[0].nickname}
              profile={data[0].profileUrl}
              position={data[0].position}
              projects={data[0].project}
              tier={Tier}
              project1={project1}
              project2={project1}
            ></ProfileCard>

            <ProfileCard
            _onClick={props.detailShow}
              id={data[1]._id}
              key={1}
              nickname={data[1].nickname}
              profile={data[1].profileUrl}
              position={data[1].position}
              projects={data[1].project}
              tier={Tier}
              project1={project1}
              project2={project1}
            ></ProfileCard>
              </div>
            </div>
            <div className="flex w-fit">
              <div className="flex justify-center w-full mt-10">
              <ProfileCard
              _onClick={props.detailShow}
              id={data[2]._id}
              key={2}
              nickname={data[2].nickname}
              profile={data[2].profileUrl}
              position={data[2].position}
              projects={data[2].project}
              tier={Tier}
              project1={project1}
              project2={project1}
            ></ProfileCard>

            <ProfileCard
            _onClick={props.detailShow}
            id={data[3]._id}
            key={3}
              nickname={data[3].nickname}
              profile={data[3].profileUrl}
              position={data[3].position}
              projects={data[3].project}
              tier={Tier}
              project1={project1}
              project2={project1}
            ></ProfileCard>
              </div>
            </div>
        </Slider>
        


    </div>
  );
}

export default ProfileList;
