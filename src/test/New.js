import React from 'react'
import { Link } from 'react-router-dom'


function New() {
    const from = 'good'
  return (
    <div>

        <Link to='/go' state={{from}}>
            <button className='border-black border text white p-3 '>
                CLickMe
            </button>
        </Link>

    </div>
  )
}

export default New