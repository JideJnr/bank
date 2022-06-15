import React, {useState} from 'react'
import {auth, db} from '../../firebase'
import {  signInWithEmailAndPassword} from 'firebase/auth'
import {Link, useNavigate } from 'react-router-dom';
import {addDoc, doc,  updateDoc,  Timestamp, collection } from 'firebase/firestore';






const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '' ;
    const navigate = useNavigate()
  
    


    
    const handleSubmit= async (e) => {
      e.preventDefault();
     
      if ( email==='' || password===''){
          setError('Input All Fields!!!');
      }
      try{
          const result = await signInWithEmailAndPassword( auth, email, password);
        
  
          await updateDoc(doc(db, 'client',result.user.uid ),{
        
              isOnline: true,
              lastLogin :Timestamp.fromDate(new Date()),
          });



          navigate('/otp');
          
      }
      catch(err){
          
  
      }
  };



    return (
        <div className='bg-gray-500 font-medium w-screen h-screen flex justify-center items-center'>
            <div className=' border-black p-5 m-3  max-w-sm mx-auto my-auto flex '>

            <div className='bg-white p-3 rounded-xl' >
                <div className='p-3 m-2 bg-white shadow rounded-xl'>
                   
                    <p className='text-2xl text-center'>Login Account</p>
                    {error && <p className='text-red-700'>error</p>}
                </div>
        
    
    
                <form className='p-3 m-2 shadow rounded-xl '>

                <input
                aria-label='Enter The Email address'
                type='text'
                placeholder='Email address'
                className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                onChange={({ target }) => setEmail(target.value)}/>

            <input
                aria-label='Enter The Password'
                type='text'
                placeholder='Password'
                className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                onChange={({ target }) => setPassword(target.value)}
            />

            <div className='flex justify-center items-center'>
                <button className={` cursor-pointer px-6 my-3  h-8 w-28 bg-black text-white  rounded text-xs  ${isInvalid && 'opacity-50'}`}  disabled={isInvalid}   onClick={handleSubmit} >
                

                    Login Account

                </button>
            </div>

            <div>


            </div>

        </form>

        <div className='border bg-white shadow-xl p-3 m-2  rounded-xl text-[12px]'>
            <div className='flex'>
                <p className=' ml-2'>Forgot UserName?</p>
                <p className='ml-auto mr-2'>Forgot password?</p>
            </div>

            <div className='flex'>
                <Link to='/ssn'>
                    <p className='text-black ml-2'>Sign in to Cooperate</p>
                </Link>
                <p className='mr-2 ml-auto'>Sign in to Investment </p>
            </div>
        </div>


            </div>

            </div>

        </div>
  )
}

export default SigninForm