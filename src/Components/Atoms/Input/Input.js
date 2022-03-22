import React from 'react'
import arrow from "../../../static/images/projectRoom/chatButton.svg"

const Input = ({ setMessage, sendMessage, message }) => (
  <div className='relative flex items-center'>
    <input
      className='relative w-full mr-5 p-3 rounded-xl bg-[#F1F3F4]'
      type='text'
      placeholder='전송하려는 메세지를 입력하세요.'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessage(event) : null
      }
    />
      
    <img src={arrow} alt={"전송"} className='absolute cursor-pointer right-[5%] p-2 h-full' onClick={(e) => sendMessage(e)}>
    </img>
  </div>
)

export default Input