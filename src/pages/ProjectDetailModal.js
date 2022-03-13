import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../element/Button";
import ReactMarkdown from "react-markdown";
import { Viewer } from "@toast-ui/react-editor";

function Survey() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const testString =
    "## hi\n > section\n ```jsx\n let code = 1;\n``` \n *bias* \n **bold**";

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      ariaHideApp={false}
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
    </Modal>
  );
}

export default Survey;
