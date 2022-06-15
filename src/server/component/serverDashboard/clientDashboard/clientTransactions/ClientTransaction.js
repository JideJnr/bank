import React from 'react'
import History from './History'
import TransactionDetails from './TransactionDetails'
import {Link} from 'react-router-dom'


const ClientTransaction = ({client}) => {
  const user2= client.uid

  return (
    
    <div className='w-screen h-screen bg-[#eee] '>
          <div className='bg-[#32516B] border-[#32516B] w-screen h-16 p-3 flex text-white font-medium'>
      <Link to='/tst'>
        <div className='flex-col text-white text-center '>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </Link>

    </div>
      
      <div className=''><TransactionDetails user2={user2}/></div>
      <div className='pt-28'> <History user2={user2}/> </div>
    </div>
  )
}

export default ClientTransaction