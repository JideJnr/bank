import React,{useState, useEffect} from 'react'
import Logo from './../../../assets/header/logo.png'
import { db, auth } from "../../../firebase";
import {  getDoc ,doc } from "firebase/firestore";


const Profile = () => {
  const [data, setData] = useState("");
  const user1 = auth.currentUser.uid

 

  useEffect(() => {
    getDoc(doc(db, 'users', user1)).then((docSnap) => {
      if (docSnap.exists) {
        setData(docSnap.data());
      }
    });


  }, );
  return (   
    
    <div className='flex-col w-full border-b border-gray-300 bg-[#eee]'>
      
      <div className=''>
        <img src={data.avatar || Logo} alt='' className='  h-36 w-full '/>
      </div>

      <div className='flex-col my-auto p-3 m-2'>
        
        <div className='flex mx-auto'>
          <small className='font-medium'>Welcome</small>
          <p className='text-2xl mr-2 font-medium'>
            {data.fname} {data.lname}
          </p>

        </div>

      </div>

    </div> 
  )
}

export default Profile