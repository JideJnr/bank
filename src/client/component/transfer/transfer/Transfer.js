import React, { useState } from 'react'
import Taskbar from '../../../../component/Taskbar'
import {useLocation} from 'react-router-dom'

import ConfirmTransferPopup from './ConfirmTransferPopup'

const Transfer = () => {

    const [amount, setAmount] = useState('');
    const [remark, setRemark] = useState('');
    const [error, setError] = useState('');
    
    const location = useLocation()
    const {ben} = location.state


  return (
    <div className='w-screen h-screen bg-[#eee]'>
       <Taskbar />

      <div className='w-full bg-[#111111] flex text-white font-bold text-2xl h-38 p-5'>

       

        <div className='flex-col mx-auto my-auto p-2 '>  
          <input className='border-b p-2 focus-none text-center border-white bg-[#111111] text-white max-w-sm' type='number'
                    onChange={({ target }) => setAmount(target.value)}/> 




        
        </div>

      </div>

      <div className='w-full p-3 my-2 bg-white'>

        <div className='p-2'>
          <p className='font-medium text-md'>
            319XXX3711-USD-C31
          </p>
          <p>
            10999            
          </p>
        </div>

      </div>

      <div className='w-full p-3 my-2 bg-white'>
  

        <div className='p-3 m-2 h-18 border-b    '>
          <p className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='text' placeholder='Beneficiary Name'>
            {ben.benName} 
            </p> 
        </div>

        <div className='p-3 m-2 h-18 border-b   '>
          <p className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='text' placeholder='Beneficiary Bank Name'>
             {ben.benBank}
            </p>
        
        </div>

        <div className='p-3 m-2 h-18 border-b    '>
          <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='text' placeholder='Remark'
           onChange={({ target }) => setRemark(target.value)}/> 
        </div>



        <div className='w-full flex justify-center'>
       

        <ConfirmTransferPopup
        ben = {ben}
        remark={remark}
        amount={amount}/>
          
          

      </div>



      </div>


    </div>
  )
}

export default Transfer