import React from 'react'
import { Link } from 'react-router-dom'
import Taskbar from '../../../../component/Taskbar'

function Legal() {
  return (
    <div className='w-screen h-screen'>
<Taskbar/>
        <Link to='/trm'>
            <div className='p-3 my-2 h-18 border rounded-xl mb-2 text-black'>
                
            
            <div className=''>
             
            </div>

            <div className=''>
                <p>Terms and Conditions</p>
            </div>

            <div className=''>
                
            </div>

            
            </div>
        </Link>

        <Link to='/prv'>
            <div className='p-3 my-2 h-18 border rounded-xl mb-2 text-black'>
                
            
            <div className=''>
             
            </div>

            <div className=''>
                <p>Privacy Policy</p>
            </div>

            <div className=''>
                
            </div>

            
            </div>
        </Link>
    </div>
  )
}

export default Legal