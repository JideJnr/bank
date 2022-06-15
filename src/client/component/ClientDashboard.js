import React,  { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import HomeSvg from './../../assets//HomeSvg'
import TransferSvg from './../../assets/TransferSvg'
import ChatSvg from './../../assets//ChatSvg'
import ProfileSvg from './../../assets//ProfileSvg'
import Home from '../../client/component/home/Home'
import Chat from '../../client/component/Contact/Chat'
import Settings from '../../client/component/settings/Settings'
import TransferTab from '../../client/component/transfer/TransferTab'
import { db, auth } from "./../../firebase";
import {  getDoc ,doc } from "firebase/firestore";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ClientDashboard() {
  
  const [data, setData] = useState("");
  const user1 = auth.currentUser.uid

  useEffect(() => {
    getDoc(doc(db, "client", user1)).then((docSnap) => {
      if (docSnap.exists) {
        setData(docSnap.data());
      }
    });


  }, );


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
                 'w-full py-2.5 text-sm leading-5 font-medium rounded-lg mx-3',
                 'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                 selected
                   ? 'bg-white shadow-xl text-blue-700'
                   : ' hover:bg-white/[0.12] hover:text-white'
               )
             }
           >
                          <div className='flex justify-center'>
                          <TransferSvg/>
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
             <ProfileSvg/>
             </div>
           </Tab>
           </div>

         
        </Tab.List>
        <Tab.Panels className="w-screen h-screen">
        
              <Tab.Panel> <Home data={data} /></Tab.Panel>
              <Tab.Panel> <TransferTab/> </Tab.Panel>
              <Tab.Panel><Chat data={data} /></Tab.Panel>
              <Tab.Panel><Settings/></Tab.Panel>
              
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


