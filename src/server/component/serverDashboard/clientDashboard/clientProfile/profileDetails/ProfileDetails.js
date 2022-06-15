import React from 'react'
import Logo from '../../../../../../assets/header/logo.png'

const ProfileDetails = ({client}) => {
  return (
    <div>
        <div className='flex-col w-full  '>
            <div className=' p-3 m-2 w-full'>
                <img src={client.avatar || Logo} alt='' className=''/>
            </div>

            <div className='flex-col my-auto p-3 m-2'>
                <div className='flex'>
                    <p className='text-2xl mr-2 font-medium'>
                        {client.fname}  {client.lname}
                    </p>
                    
                </div>

                <div>
                    <p className='text-sm'>
                        {client.email}
                    </p>
                </div>

            </div>
        </div>


 
    </div>
  )
}

export default ProfileDetails