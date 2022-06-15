import React, { useRef, useEffect }  from 'react'
import User from './../../../assets/user.png'
import Admin from './../../../assets/admin.png'
import { auth,} from './../../../firebase'
import Moment from 'react-moment'


const Message = ({chat}) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  

  const user1 = auth.currentUser.uid
  return (

  <div className='w-full flex '   ref={scrollRef}>

        {chat?.from !== user1 && (
        <div className= 'flex h-4 w-4 mt-auto mb-3'>
        <img className=' flex rounded-full' src={User} alt='' /> 
       
        </div>)}



    <div className={` ${chat.from !== user1 ? "text-right bg-gray-500 rounded-r-2xl rounded-tl-2xl ml-2" : " rounded-tr-2xl text-left bg-blue-600 rounded-l-2xl ml-auto"}  flex   p-3 m-2 max-w-1/2 flex-col`}>
  
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
        <img className=' flex rounded-full' src={Admin} alt='' /> 
       
      </div>)}

  </div>
  )
}


export default Message