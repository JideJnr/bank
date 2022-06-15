import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logodarksmall.PNG'
import Transfer  from '../../../assets/transfer.png'
import Pay  from '../../../assets/pay.png'
import Merchant  from '../../../assets/merchant.png'
import Schedule  from '../../../assets/schedule.png'
import Bills  from '../../../assets/bills.png'


function TransferTab() {
  return (
    <div className='  bg-[#f1f1f1] w-screen h-screen '>
         <div className='flex  p-5  bg-[#111111] text-white '>
        
        <div className=' '>         
            <div className=' m-2'>
                <img src={Logo} alt='' className='max-h-10 max-w-10'/>
            </div>
        </div>
    
        <div className=''> 
            <p className='text-2xl m-2'>Transfer </p> 
        </div>
    
        </div>


        <Link to='/bnf'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Transfer} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Transfer</p></div>
           </div>
       </Link>

       <Link to='/qck'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Pay} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Quick Pay</p></div>
           </div>
       </Link>

       <Link to='/bll'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Bills} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Bill Pay</p></div>
           </div>
       </Link>

       <Link to='/sch'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Schedule} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Schedule Transfer</p></div>
           </div>
       </Link>

       <Link to='/Mch'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Merchant} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Pay Merchant</p></div>
           </div>
       </Link>

 
    </div>
  )
}

export default TransferTab