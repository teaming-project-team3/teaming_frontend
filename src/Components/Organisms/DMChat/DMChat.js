import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom';

import TextContainer from '../../Atoms/TextContainer/TextContainer'
import Messages from '../../Atoms/Messages/Messages'
import InfoBar from '../../Atoms/InfoBar/InfoBar'
import Input from '../../Atoms/Input/Input'

import './Chat.css'
//서버 주소
//const ENDPOINT = 'http://localhost:5000'
//const ENDPOINT = 'http://21dd-49-142-123-104.ngrok.io/waitroom'
const ENDPOINT = "http://3.36.75.239/waitroom"

let socket

const DMChat = ( ) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const location = useLocation();
  console.log(location)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    console.log("start", name, room)

    socket = io(ENDPOINT, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });

    setRoom(room)
    setName(name)

    console.log("before join : ", room, name)

    socket.emit('join', { name, room }, (error) => {
      console.log("join : ", error)
      if (error) {
        alert("join Error",error)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log("message : ", message)
      setMessages((messages) => [...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      console.log("roomData", users)
      setUsers(users)
    })

    return (()=>{
      console.log("willunmount")
      socket.disconnect()});
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      console.log("before SendMessage", message)
      let sendData = {sender: name, message: message, room: room}
      socket.emit('sendMessage', sendData, () => setMessage(''))
      
      let data = {user: "curr", test: message}
      setMessages((messages) => [...messages, data])

      console.log("after SendMessage", message)
    }
  }

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  )
}

export default DMChat