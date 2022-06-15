import React,  {useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import HomeSvg from './../../assets//HomeSvg'

import ChatSvg from './../../assets//ChatSvg'

import Chat from '../component/Chat/Chat'
import ServerDashboard from '../component/serverDashboard/ServerDashboard'
import { db, auth } from "../../firebase";
import {  collection,  query,  where,  onSnapshot} from "firebase/firestore";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Server() {
  
  const [client, setClient] = useState([])

      useEffect(() => {

      const clientRef = collection(db, 'client');
  
      const q = query(clientRef , where('createdBy', 'in', [auth.currentUser.uid]));
  
      const unsub = onSnapshot(q,  querySnapshot =>{
        let client = [];
        querySnapshot.forEach(doc =>{
          client.push(doc.data())
          
        });
        setClient(client);
        console.log(client)
      });
      return () => unsub();
    }, []);
    


  return (
    <div className="w-screen h-screen">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-transparent  absolute bottom-2  w-full ">
          <div className='flex  mx-auto bg-white rounded-xl max-w-sm shadow-xl p-3 justify-center '>

         
          <Tab
             
             className={({ selected }) =>
               classNames(
                 'w-full  text-sm leading-5 font-medium  rounded-lg mx-3 ',
                 'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                 selected
                   ? 'bg-white shadow-xl text-blue-700 '
                   : ' hover:bg-white/[0.12] hover:text-white'
               )
             }
           >

             <div className='flex justify-center w-5'>
             <HomeSvg/>
             </div>
             
            
             
           </Tab>

           <Tab
             
             className={({ selected }) =>
               classNames(
                 'w-full py-2.5 text-sm leading-5 font-medium mx-3  rounded-lg',
                 'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                 selected
                   ? 'bg-white shadow-xl text-blue-700'
                   : ' hover:bg-white/[0.12] hover:text-white'
               )
             }
           >
             <div className='flex justify-center'>
             <ChatSvg/>
             </div>
           
           </Tab>


           </div>

         
        </Tab.List>
        <Tab.Panels className="w-screen h-screen">
        
        <Tab.Panel> <ServerDashboard client={client}/></Tab.Panel>
        <Tab.Panel><Chat client={client}/></Tab.Panel>
        
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


