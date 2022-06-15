import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='w-screen h-screen bg-[#eee]'>
        <div className='w-full h-full flex items-center justify-center'>

          <div className='' >
              
            <div className='flex  text-bottom p-3 m-2 mx-auto text-center'>
                <p className='text-2xl font-medium mr-2'>
                    Welcome
                </p>
                <p className='text-3xl font-medium'>
                    Jide
                </p>
            </div>


            <div className='flex  text-bottom p-3 m-2 justify-center'>
                <Link to='/go'>
                <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'  type='submit' >
                     
                        Get started
                    </button>
                </Link>
            </div>
          </div>




        </div>
    </div>
  )
}

export default Welcome