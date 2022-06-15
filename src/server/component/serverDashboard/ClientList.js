import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../..//assets/header/logo.png'


const ClientList = ({client}) => {
  

  return (
  <Link to='/scd' state={{ client}}>

    <div className='w-full flex border-white border p-2 text-white bg-[#32516B] rounded-md shadow'>

      <div className='flex items-center ml-2 p-2'>
  
        <img src={client.avatar || Logo} alt='' className='rounded-full border max-h-14 max-w-14 border-white'/>  
        
      </div>

      <div className='flex-col items-center  p-2'>

        <div >
          <p className='font-medium ml-2'> {client.fname}  {client.lname} </p>
        </div>

        <div>
          <p className='font-medium ml-2'> Last Seen Few Moments Ago </p>
        </div>
           

          
      </div>

        
    </div>
    
    </Link>

  )
}

export default ClientList