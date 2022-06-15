import React from 'react'
import Currency from './../../../../component/Currency'
import { Link } from 'react-router-dom'

const HistoryList = ({history, user1} ) => {


  return (
    <Link to='/shd' state={{history}}>           
    <div className='border  flex w-full px py m-2 bg-white text-bold shadow-xl '>
      
      <div className={`bg-green-700 ${history === 'Failed' && "bg-red-700 "} ${history === 'Pending' && "bg-yellow-700 "} w-3`}>
        
      </div>
      
      <div className='ml-2 p-2'>
      
        <div className='text-sm font-medium flex'>
            <p> {history.recName} {` ${history.from === user1 && "Received"} ${history.from === user1 && "Sent"} `} </p>
        </div>
        
        <div className='text-sm ml-auto mr-3  '>
          
          <div>
            <Currency  amount= {history.amount}/> 
          </div> 
          <div>
            <p> via {history.recBank}</p> 
          </div>
        </div>
      
      
      
      </div>
    
    </div>
    </Link>
    
    
    
        
  )
}

export default HistoryList