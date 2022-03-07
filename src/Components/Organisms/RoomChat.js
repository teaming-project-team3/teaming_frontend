import React from "react";

export default function RoomChat() {

  return (
    <>
    <div>
      <div id="roomWrap">
        <div id="roomList">
          <div id="roomHeader">채팅 방 목록</div>
          <div id="roomSelect">
            <div class="roomEl active" data-id="1">
              Everyone
            </div>
            <div class="roomEl" data-id="2">
              VueJS
            </div>
            <div class="roomEl" data-id="3">
              ReactJS
            </div>
            <div class="roomEl" data-id="4">
              AngularJS
            </div>
          </div>
        </div>
      </div>
      <div id="chatWrap">
        <div id="chatHeader">Everyone</div>
        <div id="chatLog">
          <div class="anotherMsg">
            <span class="anotherName">Jo</span>
            <span class="msg">Hello, Nice to meet you.</span>
          </div>
          <div class="myMsg">
            <span class="msg">Nice to meet you, too.</span>
          </div>
        </div>

        <form id="chatForm">
          <input
            type="text"
            autocomplete="off"
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
