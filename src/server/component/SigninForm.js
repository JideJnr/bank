import React, {useState} from 'react'
import {auth, db} from '../../firebase'
import {  signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate } from 'react-router-dom';
import { doc,  updateDoc,  Timestamp } from 'firebase/firestore';
import Logo from './../../assets/logodark.PNG'





const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '' 
    const navigate = useNavigate();

    


    
    const handleSubmit= async (e) => {
      e.preventDefault();
     
      if ( email==='' || password===''){
          setError('Input All Fields!!!');
      }
      try{

          const result = await signInWithEmailAndPassword( auth, email, password);
  
            await updateDoc(doc(db, ' users ', result.user.uid ),{
        
              isOnline: true,
              lastLogin :Timestamp.fromDate(new Date()),
          });

          navigate('/sd');
          
      }
      catch(err){
          
  
      }
  };



    return (
    <div className='bg-[#111111] p-5 m-3 max-w-md px-auto py-auto text-white '>
    <div className='p-3 m-2'>
        {error && <p className='text-red-700'>error</p>}
        <img src={Logo} alt=''/>
         <p className='text-2xl text-center'>Login Account</p>
     </div>
     
 
 
 <form className='p-3 m-2 '>

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
             <button className={` cursor-pointer px-6 my-3  h-8 text-white w-28 bg-[#111111]  rounded text-xs  ${isInvalid && 'opacity-50'}`}  type='submit' disabled={isInvalid}  onClick={handleSubmit} >
              

                   Login Account

             </button>
         </div>

         <div>


         </div>

     </form>
</div>
  )
}

export default SigninForm