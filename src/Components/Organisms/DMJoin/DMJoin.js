import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const DMJoin = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>채팅</h1>
        <div>
          <input
            placeholder='이름'
            className='joinInput'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='채팅방'
            className='joinInput mt-20'
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat/dm?name=${name}&room=${room}`}
        >
          <button className={'button mt-20'} type='submit'>
            가입
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DMJoin