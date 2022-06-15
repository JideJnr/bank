import React, { useEffect, useState } from 'react'

import { db, auth } from "../../firebase";
import {  onSnapshot ,doc } from "firebase/firestore";


const Profile = () => {

  const [data, setData] = useState();
  const user1 =auth.currentUser.uid

  useEffect(() => {

    let unsub = onSnapshot(doc(db, "client", user1), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  const user2 = data.fname

  console.log(user2)

  return (
    <div className='w-full p-3'>

      <div>
        <div>
            <p>
              Welcome Back  
            </p>
            <p className='font-medium'>
              {doc.fname} {doc.lname}
            </p>
        </div>

        <div className='mr-auto ml-2 mx-auto'>
          <img src={doc.img} alt='' className='rounded-full'/>
        </div>
      </div>






    </div>
  )
}

export default Profile