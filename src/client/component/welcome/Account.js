import React, { useState } from 'react'
import { Link } from 'react-router-dom';





function AddHistoryPopup() {

  const [accRoute, setAccRoute] = useState('');
  const [accNum, setAccNum] = useState('');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 





  return (

    <div className='bg-[#eee] p-5 m-3 max-w-md'>

        <form className='p-3 m-2 '>

        <div className='p-3 m-2'>
        {error && <p className='text-red-700'>error</p>}
      </div>

        <input
                    aria-label='Enter The Recipient Account Number'
                    type='number'
                    placeholder='Enter The Recipient Account Number'
                    className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                    onChange={({ target }) => setAccNum(target.value)}/>

                    

                <input
                    aria-label='Enter The Recipient Routing Number'
                    type='number'
                    placeholder= 'Enter The Recipient Routing Number'
                    className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                    onChange={({ target }) => setAccRoute(target.value)}
                />
              
                <div className='flex justify-center items-center'>

                <Link to='/sds' state={{accRoute, accNum}}>
                    <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit' >
                     

                      Add to Database

                    </button>

                    </Link>
                </div>

        </form>
    </div>

  
  )
}

export default AddHistoryPopup