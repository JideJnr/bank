import React from 'react'
import { Link } from 'react-router-dom'


function Display() {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full flex items-center'>

          <div className='w-full'>

          

            <div className='flex   p-3 m-2 mx-auto justify-center'>
                <p className='text-2xl font-medium '>
                    Lets Choose A Display Image
                </p>
        
            </div>

            <div  className='flex  p-3 m-2 justify-center'>
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

export default Display