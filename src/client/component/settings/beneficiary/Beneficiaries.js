import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Taskbar from '../../../../component/Taskbar'
import { auth,db  } from '../../../../firebase'
import { collection,  query,  onSnapshot } from "firebase/firestore";
import BeneficiariesTab from './BeneficiariesTab'



function Beneficiaries() {
  const [ben, setBen] = useState([]);
  const user1 = auth.currentUser.uid
    

  useEffect(() => {

      const benRef = collection(db, `client/${user1}/beneficiaries`);
  
      const q = query(benRef  );
  
      const unsub = onSnapshot(q,  querySnapshot =>{
        let ben = [];
        querySnapshot.forEach(doc =>{
        ben.push(doc.data())
          
        });
        setBen(ben);
      });
      return () => unsub();
  }, []);
  console.log(ben)
  return (
    <div className='items-center flex-col  h-screen w-screen bg-[#f6f6f6] ' >
             
    <Taskbar/>

      

          {ben.length <= 0  && (
            <div className='flex justify-center  '>
                      <p className='m-2 p-3'>You have no saved beneficiaries</p>
            </div>)}

            <div className='w-full  p-5'>
            <p className='font-medium '>Beneficiaries List</p>
        <div className='w-full h-full overflow-y-auto '>
          {ben.map((ben) => (
          <BeneficiariesTab
          key={ben.uid}
          ben={ben}

          
          />
        ))}

            </div>

            </div>

      
 
          
            <div className='flex justify-center  '>
                <Link to='/bnfl'>
                <button className= 'cursor-pointer px-6 my-3  h-10 text-white w-28 bg-[#111111]  rounded text-xs '> 
                    Add New
                </button>
                </Link>
            </div>

            



    </div>
  )
}

 export default Beneficiaries