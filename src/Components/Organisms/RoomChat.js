import React from "react";

export default function RoomChat() {

  return (
    <>
    <div>
      <div id="roomWrap">
        <div id="roomList">
          <div id="roomHeader">채팅 방 목록</div>
          <div id="roomSelect">
            <div className="roomEl active" data-id="1">
              Everyone
            </div>
            <div className="roomEl" data-id="2">
              VueJS
            </div>
            <div className="roomEl" data-id="3">
              ReactJS
            </div>
            <div className="roomEl" data-id="4">
              AngularJS
            </div>
          </div>
        </div>
      </div>
      <div id="chatWrap">
        <div id="chatHeader">Everyone</div>
        <div id="chatLog">
          <div className="anotherMsg">
            <span className="anotherName">Jo</span>
            <span className="msg">Hello, Nice to meet you.</span>
          </div>
          <div className="myMsg">
            <span className="msg">Nice to meet you, too.</span>
          </div>
        </div>

        <form id="chatForm">
          <input
            type="text"
            autoComplete="off"
            size="30"
            id="message"
            placeholder="메시지를 입력하세요"
          />
          <input type="submit" value="보내기" />
        </form>
      </div>
      <div id="memberWrap">
        <div id="memberList">
          <div id="memberHeader">사람</div>
          <div id="memberSelect"></div>
        </div>
      </div>
    </div>
    </>
  );
}
