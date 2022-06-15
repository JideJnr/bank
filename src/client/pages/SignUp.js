import React, {useState} from 'react'
import {auth, db} from './../../firebase'
import {  createUserWithEmailAndPassword} from 'firebase/auth'
import {   useNavigate } from 'react-router-dom';
import { doc,  setDoc,  Timestamp } from 'firebase/firestore';






function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const user1 = auth.currentUser.uid;
    const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (fname ==='' || lname ==='' || email==='' || password==='') {
        setError('Input All Fields!!!');
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "client", result.user.uid), {
        uid: result.user.uid,
        fname,
        lname,
        password,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        createdby: user1
      });
      setEmail('');
      setPassword('');
      setFname('');
      setLname('');
      setError(null);
      setLoading(false);

      navigate("/c");
    } catch (err) {

    }

  };

  
  return (
    <div className='bg-[#eee] p-5 m-3 max-w-md'>
           <div className='p-3 m-2'>
               {error && <p className='text-red-700'>error</p>}
                <p className='text-2xl text-center'>Register A New Account</p>
            </div>
            
        
        
        <form className='p-3 m-2 '>
        <input
                    aria-label='Enter first Name'
                    type='text'
                    placeholder='Enter first Name'
                    className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                    onChange={({ target }) => setFname(target.value)}/>
        <input
                    aria-label='Enter last Name'
                    type='text'
                    placeholder='Enter First Name'
                    className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                    onChange={({ target }) => setLname(target.value)}/>

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
                    <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit'  onClick={handleSubmit} >
                     

                           Create Account

                    </button>
                </div>

            </form>
    </div>
  )
}

export default SignUp