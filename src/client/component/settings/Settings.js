import React from 'react';
import {auth, db} from '../../../firebase';
import { doc,  updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logodarksmall.PNG';
import Transfer  from '../../../assets/transfer.png'
import Security  from '../../../assets/security.png'
import Cheque  from '../../../assets/cheque.png'
import Statement  from '../../../assets/statement.png'
import Legal  from '../../../assets/legal.png'



function Settings() {

    const user = auth.currentUser.uid;
    const navigate = useNavigate();

    const handleSignout = async () =>{
        await updateDoc(doc(db, 'client', user ),{
        
            isOnline: false,
        });
        await signOut(auth);

        navigate('/');

    }  ;
    
    return (
    <div className='w-screen h-screen bg-[#eee]'>

        <div className='flex  p-5  bg-[#111111] items-center text-white '>
       
            <div className=' flex my-auto'>         
                <div className='rounded-full   m-2'>
                    <img src={Logo} alt='' className='max-h-10 max-w-10'/>
                </div>
            </div>
        
            <div className=' flex my-auto'> 
                <p className='text-2xl m-2'>Setting </p> 
            </div>

        </div>

       <Link to='/scr'>
       <div className='p-2 my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
                <div className=' ml-2 my-auto'> <img src={Security} alt='' className='max-h-10 max-w-10'/></div>
                   
                <div className='ml-5 my-auto'><p>Security Setting</p></div>
           </div>
       </Link>

       <Link to='/bnf'>
       <div className='flex p-2 my-2 h-18 border-y rounded-xl mb-2 cursor-pointer text-black'>
              <div className=' ml-2 my-auto'> <img src={Transfer} alt='' className='max-h-10 max-w-10'/></div>
              <div className='ml-5 my-auto'><p>Manage Beneficiaries</p></div>
           </div>
       </Link>

       <Link to='/stt'>
       <div className=' flex p-3  my-2 h-18 border-y rounded-xl mb-2 text-black'>
             <div className=' ml-2 my-auto'> <img src={Statement} alt='' className='max-h-10 max-w-10'/></div>
           <div className='ml-5 my-auto'>  <p>Full Statement</p></div>
           </div>
       </Link> 

       <Link to='/crd'>
       <div className=' flex p-3 my-2 h-18 border-y rounded-xl mb-2 text-black'>
              <div className=' ml-2 my-auto'> <img src={Cheque} alt='' className='max-h-10 max-w-10'/></div>
              <div className='ml-5 my-auto'>     <p>Request New Card/Cheque</p> </div>
           </div>  
       </Link>

       <Link to='/lgl'>
       <div className='p-3  my-2 h-18 border-y rounded-xl mb-2 text-black flex'>
           <div className=' ml-2 my-auto'> <img src={Legal} alt='' className='max-h-10 max-w-10'/></div>
           <div className='ml-5 my-auto'>  <p>Legal</p> </div>
           </div>
       </Link>

       <div className='flex justify-center'>
            <button className='cursor-pointer px-6 my-3  h-10 text-white w-28 bg-[#111111]  rounded text-xs ] hover:text-blue-500 duration-500'
            onClick={handleSignout}>
                Logout
            </button>
        </div>
   </div>
  )
}

export default Settings