import React from 'react'
import { Tab } from '@headlessui/react'
import HomeSvg from '../../../../assets//HomeSvg'
import TransferSvg from '../../../../assets/TransferSvg'
import ChatSvg from '../../../../assets//ChatSvg'
import ProfileSvg from '../../../../assets//ProfileSvg'
import {useLocation} from 'react-router-dom'
import ClientProfile from './clientProfile/ClientProfile'
import ClientTransaction from './clientTransactions/ClientTransaction'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ClientDashboard() {
  
  const location = useLocation()
  const { client} = location.state




  return (
    <div className="w-screen h-screen">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1   absolute bottom-2  w-full ">
          <div className='flex  mx-auto bg-white rounded-xl max-w-sm shadow-xl p-3 justify-center '>



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



           </div>

         
        </Tab.List>
        <Tab.Panels className="w-screen h-screen">
        

        <Tab.Panel> <ClientProfile client={client}/></Tab.Panel>
        <Tab.Panel><ClientTransaction client={client}/></Tab.Panel>


        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


