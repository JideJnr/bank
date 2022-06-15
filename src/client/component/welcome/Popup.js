import React from 'react'
import { Link } from 'react-router-dom'

function Popup() {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full flex items-center'>

          <div className='w-full'>

          

            <div className='flex   p-3 m-2 justify-center'>
                <p className=' text-2xl font-medium '>
                    Lets Configure The PopUp
                </p>
        
            </div>

            <div  className='flex-col  p-3 m-2 my-auto'>
              <p>Input Your Popup Text</p>
              <input type='text' className='  p-3 m-2 border border-black '/>
            </div>

            <div  className='flex-col  p-3 m-2 justify-center'>
            <p>Select Your Popup Image</p>
                <input type='file' className='  p-3 m-2 '/>
            </div>
            
            <div className='flex  text-bottom p-3 m-2 justify-center'>
              <Link to='/go' state={{from}}>
                <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'  type='submit' >
                     
                        Continue
                    </button>
                </Link>
            </div>

            </div>



        </div>
    </div>
  )
}

export default Popup