import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../element/Button";


function Survey() {
    const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Modal isOpen={modalIsOpen} 
    onRequestClose={() => setModalIsOpen(false)}
    ariaHideApp={false}
    >
    <div className="App">
        <div>프로젝트 상세 내용</div>
    </div>

    <div>
        <img alt=""></img>
    </div>

    <div>
        프로젝트 내용
    </div>

      <Button>참가하기</Button>
    </Modal>
  );
}

export default Survey;
