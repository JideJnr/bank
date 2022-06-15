import React from 'react'
import ChatTaskbar from './ChatTaskbar'
import ChatMessage from './ChatMessage'
import {useLocation} from 'react-router-dom'
import Taskbar from './../../../component/Taskbar'


function ChatContainer() {
  const location = useLocation()
  const {client} = location.state
  const user2 = client.uid
  return (
    <div className='max-w-screen max-h-screen overscroll-none '>
        
        <div className='flex  p-5  bg-[#111111] text-white w-full h-16   font-medium fixed top-0'>

     
          
       
        </div>
        <ChatMessage user2={user2} client={client}/>
        <div className='absolute bottom-2 bg-[#eee]'>

        </div>
        <ChatTaskbar user2={user2}/>

    </div>
  )
}

export default ChatContainer