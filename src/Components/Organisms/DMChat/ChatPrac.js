import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

import Messages from "../../Atoms/Messages/Messages";
//import InfoBar from '../../Atoms/InfoBar/InfoBar'
import Input from "../../Atoms/Input/Input";
import { useDispatch } from "react-redux";
import { setNowUsers } from "../../../redux/modules/users";
//import { send } from 'process';

//서버 주소
const ENDPOINT = process.env.REACT_APP_BASE_URL_WJ + "/waitroom";
let socket;

const ChatPrac = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const location = useLocation();

  useEffect(() => {
    //const { name, room } = queryString.parse(location.search)

    const { name, room, title } = props;


    socket = io(ENDPOINT, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room, title }, (error) => {
      if (error) {
        alert("join Error", error);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      //setUsers(users)
      dispatch(setNowUsers(users));
    });

    return (()=>{
      socket.disconnect()
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      let sendData = { sender: name, message: message, room: room };
      socket.emit("sendMessage", sendData, () => setMessage(""));
      let data = { user: "curr", text: message };
      setMessages((messages) => [...messages, data]);
      setMessage("");
    }
  };

  return (
    <div className="relative flex flex-col h-full">
      <div className="relative flex flex-col w-full h-full p-2 bg-white rounded-xl">
        {/* <InfoBar room={room} /> */}
          <Messages messages={messages} name={"curr"} />
      </div>
      <div className="absolute bottom-0 w-full">
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatPrac;
