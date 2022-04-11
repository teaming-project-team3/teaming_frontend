import React, { useEffect, useState } from "react";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate } from "react-router";
import { ProjectDetailModalCustom } from "../Components/Modals/ProjectDetailModalCustom";
import UrlLink from "../Components/Molecules/UrlLink";
import GitHubLogo from "../static/images/userStats/gitLogo.png";
import { useSelector } from "react-redux";
import JobTable from "../Components/Organisms/main/detail/JobTable";
import Badge from "../Components/Molecules/Badge";
import SwiperSliderProjectModal from "../Components/Molecules/SwiperSilderProjectModal";
import { apis } from "../apis/apis";
import ReactGA from "react-ga";

function ProjectDetailModal(props) {
  const modalIsOpen = props.showDetail;
  const data = useSelector((state) => state.projects.projectDetail);
  const surveyCheck = useSelector((state) => state.users.surveyCheck)
  const [isMaker, setIsMaker] = useState(false);


    //프로젝트 maker 여부 체크
    const checkMaker = () => {

      if(data.nickname.nickname === localStorage.getItem("userId")){
        setIsMaker(true);
      }
  
    }
  
  useEffect(()=>{
    checkMaker();

    return(()=>setIsMaker(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[modalIsOpen])


  const navigate = useNavigate();

  const goDeleteProject = () => {

    apis
      .deleteProjectAPI(data._id)
        .then((res)=>{
          window.alert("삭제가 완료되었습니다!")
          navigate('/');
        })
        .catch((err)=>{
          window.alert("잠시 후 다시 시도해주세요!");
          navigate('/');
        })

  }

  const goUpdateProject = () => {

    navigate('/updateProject', {state: data._id});

  }

  useEffect(() => {
    checkMaker();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callJoinAPI = () => {
    apis
      .joinProjectAPI(data._id)
      .then((res)=>{
        console.log("res",res)

        ReactGA.event({
          category: "Project",
          action: "projectRoom",
          label: "projectRoom",
        });
        
        navigate("/projectRoom", { state: {id: data._id, title: data.title, isLeader: res.data.leaderCheck, involved: res.data.projectInCheck}});

      })
      .catch((err)=>{
        console.log("err",err)
      })
  }

  const dateFactory = (date) => {
     return date.split("T")[0]
  }

  return (
    <>
      {modalIsOpen && (
        <div className="fixed top-0 left-0 z-10 flex flex-col items-center w-full h-screen bg-black justify center bg-opacity-70">
          <ProjectDetailModalCustom
            checker={modalIsOpen}
            callback={props.callBackSetShowFalse}
            confirm={() => {
              if(surveyCheck){
                window.alert("설문조사 후에 프로젝트 생성이 가능합니다!")
                props.callBackSetShowFalse()
                props.setSurveyOpen(true);
              }else{
                
                callJoinAPI();
              }
            }}
          >

            <div className="flex h-[40vh] justify-center bg-cover">
              <SwiperSliderProjectModal imgUrlList={data.imgUrl} />
            </div>

            <div className="h-[20vh]"></div>

            <div className="p-10 text-4xl text-center text-black font-notoB">
              {data.title}
            </div>
            
            {isMaker &&

              <div className="flex justify-center w-full">
              <div
                className="p-3 mr-1 text-center text-white bg-red-300 border rounded w-fit font-noto2 hover:border-red-500"
                onClick={goDeleteProject}
              >
                <button>프로젝트 삭제</button>
              </div>
              <div
                className="p-3 ml-1 text-center text-white bg-green-300 border rounded w-fit font-noto2 hover:border-green-500"
                onClick={goUpdateProject}
              >
                <button>프로젝트 수정</button>
              </div>
              </div>

            }

            <div className="p-10 text-xl text-center text-gray-600 font-noto2">
              마감 : {dateFactory(data.period)}
              <div className="text-base text-red-500 font-noto2">
                남은 인원 : 디자인 {data.left[0]} 명 / 프론트 {data.left[1]} 명
                / 백 {data.left[2]} 명
              </div>
            </div>

            <div className="text-sm text-center text-gray-700 font-noto-2">
              {data.subContents}
            </div>

            <div className="flex flex-wrap justify-center m-10 bg-[#E5E5E5]">
              {/* 모집내용 블럭 */}
              <div className="w-full bg-white box-border rounded-[0.625rem]">
                <div className="text-xl font-bold font-noto2 mt-7 pl-[3.6rem] pb-6 border-b-2">
                  프로젝트 소개
                </div>

                <div className="pt-10 pb-10 pr-10 pl-[3.6rem] text-base whitespace-pre-line font-noto2 text-ellipsis">
                  <Viewer initialValue={data.contents} />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center p-10 bg-[#E5E5E5]">
              {/* 모집요건 블럭 */}
              <div className="w-full justify-center bg-white box-border rounded-[0.625rem]">
                <div className="text-xl font-bold font-noto2 mt-7 pl-[3.6rem] pb-6 border-b-2">
                  모집요건
                </div>

                <JobTable data={data.stack} left={data.left} />
              </div>
            </div>

            <div className="flex justify-center bg-[#E5E5E5] mb-10 p-10 gap-x-4">
              <div className="flex justify-center w-full">
                <div className="w-full bg-white box-border rounded-[0.625rem]">
                  <div className="text-xl font-bold font-noto2 mt-7 pl-[3.6rem] pb-6 border-b-2">
                    사용기술
                  </div>

                  <div className="flex m-10">
                    <div className="flex flex-wrap">
                      {/* 랜덤하게 색상 적용 */}
                      <Badge skills={data.skills} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start w-full">
                <div className="bg-white box-border rounded-[0.625rem] w-full">
                  <div className="text-xl font-bold font-noto2 mt-7 pl-[3.6rem] pb-6 border-b-2">
                    URL
                  </div>

                  <UrlLink logo={GitHubLogo} url={data.referURL}></UrlLink>
                </div>
              </div>
            </div>
          </ProjectDetailModalCustom>
        </div>
      )}
    </>
  );
}

export default ProjectDetailModal;
