import React from 'react'
import { Link } from 'react-router-dom'


function Number() {
  return (
    <div className='w-screen h-screen bg-[#eee]'>
        <div className='w-full h-full flex items-center justify-center'>

          <div className='' >
              
            <div className='flex p-3 m-2 mx-auto text-center'>
                <input className='text-2xl font-medium mr-2'
                    
                />
                <button className=' mr-auto ml-2 my-2 text-3xl font-medium'>
                    Auto
                </button>
            </div>


            <div className='flex  text-bottom p-3 m-2 justify-center'>
                <Link to='/go' state={{from}}>
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

export default Number