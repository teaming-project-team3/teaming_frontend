import React, { useEffect } from "react";
import Button from "../element/Button";
import { Viewer } from "@toast-ui/react-editor";
import { ModalCustom } from "./ModalCustom";
import { useNavigate } from "react-router";

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
    <div className="overflow-scroll">
      <ModalCustom
        checker={modalIsOpen}
        callback={props.callBackSetShowFalse}
        confirm={()=>{navigate('/projectRoom')}}
      >
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

        <Button>참가하기</Button>
      </ModalCustom>
    </div>
  );
}

export default ProjectDetailModal;
