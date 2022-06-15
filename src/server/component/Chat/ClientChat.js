import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/header/logo.png'
import { db ,auth } from '../../../firebase'
import { collection,  query,  onSnapshot } from "firebase/firestore";



const ClientChat = ({client}) => {
  const [chat, setChat] = useState();
  const isOnline = client.isOnline
  const user1 = auth.currentUser.uid
  const user2 = client.uid
  const id = `${user1 + user2}`


  useEffect(() => {

    const chatRef = collection(db, `chat/${id}/unreadmessage`);

    const q = query(chatRef  );

    const unsub = onSnapshot(q,  querySnapshot =>{
      let chat = [];
      querySnapshot.forEach(doc =>{
      chat.push(doc.data())
        
      });
      setChat(chat);
    });
    return () => unsub();
},);



  
    
  return (


    <Link to='/scc' state={{client}} >

      <div className='w-full  flex border-white border p-2 m-2 text-black items-center'>
            
            <div className='flex items-center ml-2'>
              <img src={client.avatar || Logo} alt='' className='rounded-full border h-14 w-14 border-white'/>        
            </div>


            <div className='flex-col items-center mx-2 p-2'>
            
            <p className='font-medium'>
                {client.fname} {client.lname}
            </p>

            <small>Last Seen on</small>


            </div>

            <div className='ml-auto mr-2 my-auto flex'>
              <div className={`${ isOnline === true ? ' bg-green-500  ' : ' bg-red-500'
                    }  flex rounded-full items-center justify-center w-2 h-2`}
                  >

                    
 
                  

              </div>
            </div>

          
      </div>
    
    </Link>

  )
}

export default ClientChat