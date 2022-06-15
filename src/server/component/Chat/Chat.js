import React from "react";
import ClientChat from "./ClientChat";
import Taskbar from './../../../component/Taskbar'
function Chat({client}) {
  console.log(client)
    
  return (
 
    <div className='w-screen h-screen bg-[#f1f1f1] '>

      <div>
        <Taskbar label={Chat}/>
      </div>
    
      <div className='p-5 m-2'>
          {client.map((client) => (
            
            <ClientChat key={client.uid} client={client}
            
            />
          ))}
        </div>

    </div>
  

  )
}

export default Chat