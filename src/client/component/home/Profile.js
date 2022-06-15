import React, { useEffect, useState }  from 'react'
import Logo from './../../../assets/header/logo.png'
import Currency from './../../../component/Currency'
import {db,auth} from '../../../firebase'
import { collection,  query,  onSnapshot,where } from "firebase/firestore";
import HomeSvg from '../../../assets/HomeSvg'




const Profile = ({data}) => {
  const [total, setTotal] = useState([]);
  const user1 = auth.currentUser.uid
  const transRef = collection(db, `client/${user1}/history`);
  const [isOpen, setIsOpen] = useState(false)



  function openModal() {
      setIsOpen(!isOpen)
}

  
  //total
  useEffect(() => {


    const q = query(transRef  );

    const unsub = onSnapshot(q,  querySnapshot =>{
      let total = [];
      querySnapshot.forEach(doc =>{
      total.push(doc.data())
        
      });
      setTotal(total);
    });
    return () => unsub();
},);
  


  return (
    <div className='w-full p-5 bg-[#111111]  text-white shadow '>


      <div className='flex w-full p-3  m-2'>
        
        <div className=' ml-2 my-auto'>
            <p className='text-xl font-medium'>
              Welcome Back  
            </p>
            <p className='font-medium text-xl'>
            {data.fname} {data.lname}
             
            </p>
        </div>

        <div className='ml-auto mr-2 my-auto'>
          <img src={data.avatar || Logo} alt='' className='rounded-full border-white  border h-24 w-24'/>
        </div>
      </div>

      <div className='bg-[#32516B] text-white shadow max-w-[300px] mx-auto rounded-xl -mb-28 mt-3'>

        <div className=' flex-col text-center justify-center items-center p-3'>
          <div className='p-2 m-2 border-b border-[#eee]'>
            <p className='text-sm font-medium'>
              PEGO Saving Gold Account
            </p>

            <p className='font-medium text-xl'>
              319****3722
            </p>
          </div>

          <div className='p-2 m-2  border-[#eee] '>
            <div>
              <p className='text-sm font-medium'>
                Available Balance
              </p>

            </div>
            

            <div className='flex '>
             
              { isOpen === true ? 
                    
                      <p className='mx-auto flex font-medium'>rrrr </p> 
                   
                    : 
                      <p className='mx-auto flex font-medium '> ****** </p>
                            } 
            
              
              
              <button onClick={openModal}>
              <HomeSvg/>
              </button>
            
            </div>

           

          </div>

          
        </div>


      </div>






    </div>
  )
}

export default Profile