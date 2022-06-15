import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
import Logo from './../assets/header/logo.png'


function Sidebar() {
    let links = [
        {name:"Banking",link:"/bnk"},
        {name:"Equity",link:"/eqt"},
        {name:"Personal Loan",link:"/Pln"},
        {name:"Refinance",link:"/rfn"},
    
    ]
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-screen fixed top-0 left-0 h-fit'>
        <div className='md:flex items-center justify-between bg-[#f6f6f6]  py-4 md:px-10 px-7'>

            <Link to='/'>
                <img src={Logo} alt='' className='h-[60px] '/>
            </Link>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>

            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-[#f6f6f6] border border-white absolute md:static md:z-auto z-[-1] left-0 
                            w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                             ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0' }`}>
                {links.map((link) =>(
                    <li key={link.name}
                    className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
                            {link.name}
                        </a>
                    </li>
                ))}
                <Link to='csn'>
                <div className='ml-2'>
                <Button>
                    Login
                </Button>
                </div>    

                </Link>
            </ul>

        </div>
    </div>
  )
}

export default Sidebar