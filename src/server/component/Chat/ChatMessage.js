import React, { useEffect, useState } from "react";
import { auth,db  } from '../../../firebase'
import { collection,  query,  onSnapshot,orderBy } from "firebase/firestore";
import Message from "./Message";
import Taskbar from './../../../component/Taskbar';


const ChatMessage = ({user2,client}) => {
    const [chat, setChat] = useState([]);
    
    const user1 = auth.currentUser.uid



    const id = `${user1 + user2}`
 

    useEffect(() => {

        const chatRef = collection(db, `chat/${id}/message`);
    
        const q = query(chatRef , orderBy('createdAt', 'asc') );
    
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
    <div className='w-screen h-screen overflow-y-auto '>
    
   
   
        
        {chat.map((chat) => (
          <Message
          key={chat.uid}
          chat={chat}

          
          />
        ))}

    

    </div>

  

  )
}

export default ChatMessage