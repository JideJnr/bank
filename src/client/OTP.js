import React from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom'

const OTP = () => {
  return (
    <div className='flex w-screen h-screen bg-[#eee] '>
      <div className='flex bg-white max-w-sm shadow mx-auto p-5 my-auto h-fit w-full '>

        <div className='mx-auto'>

          <div>
            <p>Enter The OTP Sent To +1 919-****-6145</p>
          </div>


          <div className='p-3 m-2 h-18 border-b    '>
            <input className='mx-auto p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
            type='text' placeholder='Enter OTP'
        /> 
          </div>

          <div className='flex justify-center'>
            <Link to='/cd'>
              <Button title={'Submit'}/>
            </Link>
          </div>

          
        </div>



      </div>
    </div>
  )
}

export default OTP