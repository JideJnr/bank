
import React, { useEffect, useState } from "react";
import { db } from "../../../../../firebase";
import {collection,query,onSnapshot,} from "firebase/firestore";
import HistoryList from "./HistoryList";
import AddHistoryPopup from "./AddHistoryPopup";



function History({user2}) {

  const [history, setHistory] = useState([])

  useEffect(() => {
    const historyRef = collection(db, `client/${user2}/history`);
    
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
      

        <div className="w-full flex mx-2">
          <div className=" flex my-auto"> 
            <p>
              Transaction List

            </p>
          </div>

          <div className="ml-auto mr-2">
            <AddHistoryPopup user2={user2}/>
          </div>        
        </div>

        <div className='w-full overflow-y-auto h-[200px]'>
          
          {history.map((history) => (
            <HistoryList
            key={history.uid}
            history={history}
            user2={user2}
    
            
            />
          ))}

        </div>

    
    

    


    </div>
  )
}

export default History

