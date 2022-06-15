
import React from "react";
import ClientList from "./ClientList";
import AddClientPopup from "./AddClientPopup";



function Client({client}) {
  
  return (
    <div className=' w-full '>
     
        
        <div className="flex border-b border-white p-3 shadow">

          <div className='w-full flex  ' >

            <p className='ml-2 font-medium'>
              Registered Accounts
            </p>
            
          </div>

          <div className="mr-auto ml-2">
            <AddClientPopup/>
          </div>
         
        </div>

        <div className="border-black border overscroll-y-auto rounded-xl p-3 h-[400px]">
         
          {client.map((client) => (
            
            
            <ClientList
            key={client.uid}
            client={client}
    
            
            />
          ))}
        </div>
    </div>
  )
}

export default Client

