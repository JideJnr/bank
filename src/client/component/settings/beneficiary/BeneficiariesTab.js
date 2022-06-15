import React from 'react'
import { Link } from 'react-router-dom'

const BeneficiariesTab = ({ben}) => {
  return (
    <Link to='/trf' state={{ben}}>
    <div className='m-2 text-black p-3  border border-black rounded shadow bg-white '>
        <div>
            <img src={ben.img} alt=''/>
        </div>
        <div>
            <p>{ben.benName}</p>
            <p>={ben.benBank}</p>
        </div>
    </div>
    </Link>
  )
}

export default BeneficiariesTab