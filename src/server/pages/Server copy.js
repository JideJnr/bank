import React, { Fragment,useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import Chat from '../component/Chat/Chat'
import ServerDashboard from '../component/serverDashboard/ServerDashboard'
import { db, auth } from "../../firebase";
import {  collection,  query,  where,  onSnapshot} from "firebase/firestore";



const Server = () => {

  const [client, setClient] = useState([])

      useEffect(() => {

      const clientRef = collection(db, 'client');
  
      const q = query(clientRef , where('createdBy', 'in', [auth.currentUser.uid]));
  
      const unsub = onSnapshot(q,  querySnapshot =>{
        let client = [];
        querySnapshot.forEach(doc =>{
          client.push(doc.data())
          
        });
        setClient(client);
        console.log(client)
      });
      return () => unsub();
    }, []);
    
  return (
    <div >

<Tab.Group>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }
            >
              Tab 1
            </button>
          )}
        </Tab>

        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }
            >
              Tab 1
            </button>
          )}
        </Tab>
       
      </Tab.List>
      <Tab.Panels>
        
        <Tab.Panel> <ServerDashboard client={client}/></Tab.Panel>
        <Tab.Panel><Chat client={client}/></Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>


        
    </div>
  )
}

export default Server