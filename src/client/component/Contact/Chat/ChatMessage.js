import React, { useEffect, useState } from "react";

import { db } from '../../../../firebase';
import { collection,  query,  onSnapshot,orderBy } from "firebase/firestore";
import Message from "./Message";



const ChatMessage = ({id}) => {
    const [chat, setChat] = useState([]);
    

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
    }, );

      

  return (

    <div className="   pb-15 overflow-y-auto border-[#eee]  ">

            {chat.length <= 0  && (
            <div className= 'flex h-4 w-4 mt-auto mb-3'>
            <p className=' flex mt-5 p-5 text-sm'  > Please Type a message to get started </p> 
           
            </div>)}



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