import React from 'react'
import Profile from './Profile'
import Client from './Client'

function ServerDashboard({client}) {

  return (
    <div className='w-screen h-screen  bg-[#eee]'>
        
        <div className='w-full'>
          <Profile />
        </div>
        <div className='w-full'>
          <Client client={client}/>
        </div>
      
    </div>
  )
}

export default ServerDashboard