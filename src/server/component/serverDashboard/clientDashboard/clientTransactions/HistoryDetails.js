import React from 'react'
import { useLocation } from 'react-router-dom'
import ChangeHistoryPopup from './ChangeHistoryPopup'


function HistoryDetails() {
    const location = useLocation()
    const {history} = location.state
  return (
    <div>

        <div className='w-screen h-full bg-[#eee]  '>

            <div className='w-full h-full '>
                
                <div className='bg-green-300 w-full  p-3 flex-col text-white'>
                
                    <div className=' h-16 p-3 flex text-white font-medium'>


                    </div>

                    <div className='w-full text-center   h-36 text-xl font-bold'>
                    
                    <p className='text-2xl '>{history.amount}</p>

                    <ChangeHistoryPopup history={history}/>

                    </div>

                </div>


                <div className=' flex -mt-14 -mb-14  justify-center '>
                    <div className='w-28 h-28 rounded xl border bg-white mx-auto my-auto'>
                        
                            <p className='font-medium text-2xl '>
                                {history.tag}
                            </p>
                        
                    </div>
                </div>


                <div className='flex-col w-full  p-3'>


                    <div className='flex m-2 p-3 border-y border-white'>
                        <div>
                            <img src='' alt=''/>                    
                        </div>

                        <div className=''>
                            <p>Recepient Name </p>
                            <p className='font-medium'>{history.recName} </p>

                        </div>
                        

                    </div>

                    <div className='flex m-2 p-3 border-y border-white'>
                        <div>
                            <img src='' alt=''/>                    
                        </div>
                        <div>
                            <p >DESTINATION BANK </p>
                            <p className='font-medium'>{history.recBank} </p>

                        </div>
                    </div>


                    <div className='flex m-2 p-3 border-y border-white'>
                        <div>
                            <img src='' alt=''/>                    
                        </div>

                        <div className=''>
                            <p>Recepient ACCOUNT NUMBER </p>
                            <p className='font-medium'>{history.recNum} </p>

                        </div>
                        

                    </div>

                    <div className='flex m-2 p-3 border-y border-white'>
                        <div>
                            <img src='' alt=''/>                    
                        </div>
                        <div>
                            <p >Recepient Routing Number</p>
                            <p className='font-medium'>{history.recBank} </p>

                        </div>
                    </div>

                    <div className='flex m-2 p-3 border-y border-white'>
                        <div>
                            <img src='' alt=''/>                    
                        </div>
                        <div>
                            <p >TRANSACTION TYPE </p>
                            <p className='font-medium'> other-local-bank </p>

                        </div>
                    </div>

                </div>
            
            </div>  
                
        </div>
        
    </div>
  )
}

export default HistoryDetails