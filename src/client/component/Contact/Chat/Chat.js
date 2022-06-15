import React from 'react'
import ChatMessage from './ChatMessage';
import ChatTaskbar from './ChatTaskbar';
import { auth } from "../../../../firebase";
import Taskbar from '../../../../component/Taskbar';



import {useLocation} from 'react-router-dom'

const Chat = () => {

  const location = useLocation()
  const {data} = location.state
  
  const user1 = auth.currentUser.uid


  const user2 = data.createdBy
 console.log(data.createdBy)

  const id = `${user2 + user1}`
    
  return (
    <div className='w-screen h-screen bg-[#eee] overflow-hidden'>

      <Taskbar />
      <ChatMessage id={id} user2={user2} />
      <ChatTaskbar id={id}  user2={user2} />




    </div>
  )
}

export default Chat