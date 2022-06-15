import React from 'react';
import Logo from './../../../../assets/logodarksmall.PNG';
import Transfer  from './../../../../assets/transfer.png'
import Security  from './../../../../assets/security.png'

import Statement  from './../../../../assets/statement.png'

import {Link} from 'react-router-dom';


function Card() {
    
    return (
    <div className='w-screen h-screen bg-[#eee]'>

        <div className='flex  p-5  bg-[#111111] items-center text-white '>
       
            <div className=' flex my-auto'>         
                <div className='rounded-full   m-2'>
                    <img src={Logo} alt='' className='max-h-10 max-w-10'/>
                </div>
            </div>
        
            <div className=' flex my-auto'> 
                <p className='text-2xl m-2'>Security Setting </p> 
            </div>

        </div>

       <Link to='/chm'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Security} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Change Email Address</p></div>
           </div>
       </Link>

       <Link to='/chp'>
       <div className='flex p-2 my-2 h-18 border-y rounded-xl mb-2 cursor-pointer text-black'>
              <div className=' ml-2 my-auto'> <img src={Transfer} alt='' className='max-h-10 max-w-10'/></div>
              <div className='ml-5 my-auto'><p>Change Password</p></div>
           </div>
       </Link>

       <Link to='/htk'>
       <div className=' flex p-3  my-2 h-18 border-y rounded-xl mb-2 text-black'>
             <div className=' ml-2 my-auto'> <img src={Statement} alt='' className='max-h-10 max-w-10'/></div>
           <div className='ml-5 my-auto'>  <p>Enable Hard Token</p></div>
           </div>
       </Link> 

   </div>
  )
}

export default Card