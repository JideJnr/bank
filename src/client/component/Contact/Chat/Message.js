import React, { useRef, useEffect }  from 'react'
import User from './../../../../assets/user.png'
import Admin from './../../../../assets/admin.png'
import { auth,} from '../../../../firebase'
import Moment from 'react-moment'


const Message = ({chat}) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  

  const user1 = auth.currentUser.uid
  console.log(chat)
  return (

  <div className='w-full flex '   ref={scrollRef}>

        {chat?.from !== user1 && (
        <div className= 'flex h-4 w-4 mt-auto mb-3'>
        <img className=' flex rounded-full' src={Admin} alt='' /> 
       
        </div>)}



    <div className={` ${chat?.from !== user1 && "text-left bg-gray-500 rounded-l-2xl rounded-tl-2xl   "}  flex text-right rounded-l-2xl rounded-tr-2xl p-3 m-2 bg-green-500 max-w-[250px] flex-col`}>
        <p  className=''>
            
            {chat.msg}
            <br/>
            <small>
              <Moment fromNow>{chat.createdAt.toDate()}</Moment>
            </small>
            
        </p>

    </div>



    {chat?.from === user1 && (
        <div className= 'flex h-4 w-4 mt-auto mb-3'>
        <img className=' flex rounded-full' src={User} alt='' /> 
       
      </div>)}

  </div>
  )
}


export default Message