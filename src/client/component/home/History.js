import React, { useEffect, useState } from "react";
import { db, auth } from "../../../firebase";
import { collection, query , onSnapshot } from "firebase/firestore";
import HistoryList from "./HistoryList";
import {Link } from 'react-router-dom'



function History() {

    const [history, setHistory] = useState([])

  


    useEffect(() => {
      const historyRef = collection(db, `client/${auth.currentUser.uid}/history`);
  
      const q = query(historyRef , );
  
      const unsub = onSnapshot(q,  querySnapshot =>{
        let history = [];
        querySnapshot.forEach(doc =>{
        history.push(doc.data())
          
        });
        setHistory(history);
      });
      return () => unsub();
    }, []);
    
  return (
    <div className='w-full p-3 font-medium'>
    
       
            
            <div className='p-2 mb-2 flex border-b border-black'>
                <div>
                    <p>
                        Your History
                    </p>

                </div>

                <div className='ml-auto mr-2 '>
                  <Link to='chd'>
                   <button className=" font-mediu text-black">
                       View All
                   </button>
                   </Link>

                </div>

            </div>

            <div className='p-2 h-[200px] overflow-y-auto'>
            
                {history.map((history) => (
                    <HistoryList
                    key={history.uid}
                    history={history}

                    
                    />
                ))}
                
            </div>

        
    
    </div>
  )
}

export default History