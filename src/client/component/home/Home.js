import React from 'react'
import History from './History'
import Profile from './Profile'

function Home({data}) {
  
  return (
    <div className='w-screen h-screen bg-[#eee] '>
      <div className='w-full'>
      <Profile data={data}/>
      </div>
     <div className=' w-full pt-28 '>
     <History/>
     </div>
  
        
    </div>
  )
}

export default Home