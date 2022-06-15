import React, { useEffect, useState } from "react";
import {db,auth} from './../../../../firebase'
import { collection,  query,  onSnapshot,where } from "firebase/firestore";


const Profile = () => {
  const [debit, setDebit] = useState([]);
  const [credit, setCredit] = useState([]);
  const [total, setTotal] = useState([]);
  

  const user1 = auth.currentUser.uid;
  const transRef = collection(db, `client/${user1}/history`);
  
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
    

  const amounts = total.map(total => total.amount);
  const totalamount = amounts.reduce((acc, item) => (acc += item), 0);
  
  //debit
  useEffect(() => {

  
    const q = query(transRef , where('from', '==', user1)  );

    const unsub = onSnapshot(q,  querySnapshot =>{
      let debit = [];
      querySnapshot.forEach(doc =>{
      debit.push(doc.data())
        
      });
      setDebit(debit);
    });
    return () => unsub();
},);

  const debitamounts = debit.map(debit => debit.amount);
  const debittotal = debitamounts.reduce((acc, item) => (acc += item), 0);


  //credit
  useEffect(() => {
    const q = query(transRef , where('from', '==', user1) );

    const unsub = onSnapshot(q,  querySnapshot =>{
      let credit = [];
      querySnapshot.forEach(doc =>{
      credit.push(doc.data())
        
      });
      setCredit(credit);
    });
    return () => unsub();
},);
console.log(credit);
const creditamounts = credit.map(credit => credit.amount);

const credittotal = creditamounts.reduce((acc, item) => (acc += item), 0);




  return (
    <div className='w-full p-5 bg-[#32516B]  '>

      <div className='flex w-full  my-2'>
        
        <div className=' ml-2 my-auto '>
            <p className='text-sm '>
              Available Balance
            </p>
            
            <p>
              {totalamount}
            </p>
           
        </div>


      </div>

      <div className='bg-white shadow max-w-[300px] mx-auto rounded-xl -mb-24 mt-3'>

        <div className=' flex text-center justify-center items-center p-3'>
        <div className='p-2 m-2 w-1/2'>
            <p className='text-md border-b font-medium  border-[#eee] p-2 m-2'>
              INCOME
            </p>

            <p className='font-medium text-xl text-green-700'>
             {credittotal}
            </p>
          </div>

          <div className='p-2 m-2 w-1/2'>
            <p className='text-md border-b font-medium border-[#eee] p-2 m-2'>
              EXPENSE
            </p>

            <p className='font-medium text-xl text-red-800'>
              {debittotal}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile