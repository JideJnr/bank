import React, { useState } from 'react'
import Taskbar from './../../../../component/Taskbar'
import { useNavigate } from 'react-router-dom';
import {addDoc,  collection,  Timestamp } from 'firebase/firestore';
import {auth, db} from './../../../../firebase'
import {Link} from 'react-router-dom'

const BeneficiestList = () => {
  
    const [benBank, setBenBank] = useState('');
    const [benName, setBenName] = useState('');
    const [benNum, setBenNum] = useState('');
    const [benRoute, setBenRoute] = useState('');
 
    const [error, setError] = useState('');
    
 
    const navigate = useNavigate()
    const user1 = auth.currentUser.uid

    const handleSubmit= async (e) => {
        e.preventDefault();
       
        if (!benBank || !benName|| !benNum || !benRoute ){
            setError('Input All Fields!!!');
        }
        try{
    
            await addDoc(collection(db, `client/${user1}/beneficiaries` ),{
              benName,
              benBank,
              benNum,
              benRoute,
              from:user1,   
              createdAt: Timestamp.fromDate(new Date()),
              
            });

    
            navigate('/bnf');
            
        }
        catch(err){
            
    
        }
    };

  return (
    <div className='w-screen h-screen bg-[#eee]'>
       <Taskbar />

      <div className='w-full bg-[#111111] flex text-white font-bold text-2xl h-38 p-5'>

      </div>

      <div className='w-full p-3 my-2 bg-white'>

      </div>

      <div className='w-full p-3 my-2 bg-white'>
  

        <div className='p-3 m-2 h-18 border-b    '>
          <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='text' placeholder='Beneficiary Name'
           onChange={({ target }) => setBenName(target.value)}/> 
        </div>

        <div className='p-3 m-2 h-18 border-b   '>
          <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='text' placeholder='Beneficiary Bank Name'
           onChange={({ target }) => setBenBank(target.value)}/> 
        </div>

        <div className='p-3 m-2 h-18 border-b    '>
          <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='number' placeholder='Beneficiary Account Number'
           onChange={({ target }) => setBenNum(target.value)}/> 
        </div>

        <div className='p-3 my-2 h-18  border-b    '>
          <input className='p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
           type='number' placeholder='Beneficiary Routing Number'
           onChange={({ target }) => setBenRoute(target.value)}/> 
        </div>

        <div className='w-full flex justify-center'>
          
          
            <button className='cursor-pointer px-6 my-3  h-10 text-white w-28 bg-[#111111]  rounded text-xs ] hover:text-blue-500 duration-500' onClick={handleSubmit}>
        
                Add Beneficiaries

            </button>
         

        </div>

      </div>

    </div>
  )
}

export default BeneficiestList