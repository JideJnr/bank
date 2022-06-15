
import React, { useEffect, useState } from "react";
import { auth,db } from "./../../../../firebase";
import {collection,query,onSnapshot,} from "firebase/firestore";
import HistoryList from "./HistoryList";




function History() {

  const [history, setHistory] = useState([])
  const user1 = auth.currentUser.uid
  useEffect(() => {
    const historyRef = collection(db, `client/${user1}/history`);
    
    const q = query(historyRef , ); 

    const unsub = onSnapshot(q,  querySnapshot =>{
      let history = [];
      querySnapshot.forEach(doc =>{
      history.push(doc.data())
        
      });
      setHistory(history);
    });
    return () => unsub();
  },);
  

  
  return (
    <div className='w-full h-full bg-[#eee] p-5 font-medium'>
      

        <div className="w-full flex mx-2 my-auto">
          
            <p>
              Transaction List

            </p>
             
        </div>

        <div className='w-full overflow-y-auto h-[200px]'>
          
          {history.map((history) => (
            <HistoryList
            key={history.uid}
            history={history}
            user1={user1}
    
            
            />
          ))}

        </div>

    
    

    


    </div>
  )
}

export default History

