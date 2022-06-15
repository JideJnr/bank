import React from 'react'
import { Link } from 'react-router-dom'

import Caution from './../assets/Error/caution.jpg'

function Error() {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full flex-col m-2 p-3 '>
           
            <div className='flex justify-center  max-w-[150px] mb-5   '>
                <img src={Caution} alt='' className=''/>
            </div>
            
            <div className='text-center'>
                <p className='text-2xl text-red-700 font-bold p-2'>Error!!!</p>
                <p className='text-xl text-black font-medium p-2'>A Temporary Hold Has Been Placed On Your Account</p>
                <p className='text-sm text-black font-medium p-2'> Visit The Nearest Pego Bank For More Information</p>
                
                <div className='flex justify-center'>
<Link to='/tst'>
                <button className='w-[150px] my-3  px-5 text-xs text-black font-bold h-9 bg-[#eee] border-[#eee] rounded-lg border-2'>

                    Go Back

                </button>
                </Link>
            </div>
            
        </div>
</div>
       

    </div>
  )
}

export default Error