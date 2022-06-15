import React, { useEffect, useState } from "react";
import { db } from "../../../../../../firebase";
import {collection,query, onSnapshot,} from "firebase/firestore";
import InfoList from "./InfoList";
import { Disclosure } from '@headlessui/react'




function LoginInformation({client}) {

    const [info, setInfo] = useState([])
    const user2 = client.uid
   

    useEffect(() => {

        

        const infoRef = collection(db, `client/${user2}/login`);
    
        const q = query(infoRef);
    
        const unsub = onSnapshot(q,  querySnapshot =>{
          let info = [];
          querySnapshot.forEach(doc =>{
          info.push(doc.data())
            
          });
          setInfo(info);
        });
        return () => unsub();
      }, []);

      console.log(info)
      
  return (
  

<Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>          Last Login: few seconds ago</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}  viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>

               
              </Disclosure.Button>
              
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className='overscroll-y-auto p-3 border border-black h-full'>
        
        {info.map((history) => (
          <InfoList key={info.uid} info={info} />
        ))}

                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      
  
  )
}

export default LoginInformation