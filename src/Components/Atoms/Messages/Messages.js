import React, { useRef } from 'react'
import { useEffect } from 'react';

//import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message/Message'

import './Messages.css'

const Messages = ({ messages, name }) => {
  const messageBoxRef = useRef();

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };
    useEffect(() => {
      scrollToBottom();
    }, [messages]);

  return(<div className='overflow-y-scroll' ref={messageBoxRef}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>)
}

export default Messages