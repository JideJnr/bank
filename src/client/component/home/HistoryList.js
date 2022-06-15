import React from 'react'
import Money from './../../../component/Money'
import { Link } from 'react-router-dom'

import Debit from './../../../assets/debit.png'


const HistoryList = ({history}) => {

  return (

    <Link to='/hd' state={{history}}>
     
      <div className='h-20 p-3 my-2 border-gray-800 border  text-black flex justify-center  w-full font-medium bg-white shadow rounded-xl'> 

        <div className='bg-gray-300 shadow flex w-10 h-10 rounded-2xl my-auto '>
           <img src={Debit} alt=''/>
        </div>

     
          <div className=' ml-5  '>
       
              <p className='w-full'> via {history.recBank}</p>      
              <p className='text-[12px]'>date</p>

          </div>
       

        <div className='ml-auto mr-2 flex-col'>
          <p>{Money(1233)}</p>
          <p className={`text-green-600 ${history.status === 'Failed' && "text-red-700 "} ${history.status === 'Pending' && "text-yellow-400 "} `}> {history.status}</p>
        </div>

 
    
      </div>
    
    </Link>


  )
}

export default HistoryList