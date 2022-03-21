import React, { useEffect } from "react";
import Button from "../element/Button";
import { Viewer } from "@toast-ui/react-editor";
import { ModalCustom } from "./ModalCustom";
import { useNavigate } from "react-router";
import Image from "../Components/Atoms/Image";
import circleImg from "../static/images/projectDetail/detailCircle01.svg"
import jumboImg from "../static/images/projectDetail/detailExJumbo.svg"

function ProjectDetailModal(props) {
  const modalIsOpen = props.showDetail;
  const projectDetail = props.projectDetail;

  console.log("projectDetail : ", projectDetail);

  const testString =
    "## hi\n > section\n ```jsx\n let code = 1;\n``` \n *bias* \n **bold**";
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  return (
    <div className="flex w-[50vh] items-center justify-center content-center overflow-scroll">
      <ModalCustom
        checker={modalIsOpen}
        callback={props.callBackSetShowFalse}
        confirm={()=>{navigate('/projectRoom')}}
      >

          <div className="h-[30vh] justify-center bg-jumboDetail bg-cover" />

          <div className="flex justify-center w-screen mt-[-4.063rem]">
            <Image shape="circle" src={circleImg} size={"130"}></Image>
          </div>

          <div className="flex justify-center mt-[4.313rem]">
            {/* 포트폴리오 블럭 */}
            <div className="h-[67.625rem] w-[54.688rem] bg-white box-border rounded-[0.625rem]">
              <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                포트폴리오
              </div>
            
            {/* 깃헙 잔디 */}
            <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">
              <img src="https://ghchart.rshah.org/jamesujeon" alt="" />
            </div>
            
            
          </div>
          </div>

        <div className="flex justify-center w-screen">
          <div className="mt-[2.188rem] ml-[14.5rem] h-[26.438rem] w-[54.688rem] bg-white box-border rounded-[0.625rem]">
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              전문분야
            </div>

            <div className="flex mt-[3.75rem] ml-[1.8rem]">

            <div className="flex flex-wrap w-3/5">

            </div>

              <div className="h-[15.938rem] w-[15.938rem]">
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mt-[2.188rem] ml-[23.5rem] mb-[2.188rem] h-[26.438rem] w-[27rem] bg-white box-border rounded-[0.625rem]">
            
            <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
              URL
            </div>


          </div>
        </div>


        <div className="App">
          <div>프로젝트 상세 내용</div>
        </div>

        <div>
          <img alt=""></img>
        </div>

        <div>프로젝트 내용</div>

        <section>
          <h1 className="titleH1">타이틀</h1>
          <div className="date">날짜</div>
          <div>
            <Viewer initialValue={testString} />
          </div>
        </section>

      </ModalCustom>
    </div>
  );
}

export default ProjectDetailModal;
