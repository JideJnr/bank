import React from 'react'
import { Link } from 'react-router-dom'

function Finish() {
    const user1 = auth.currentUser.uid

    const handleSubmit= async (e) => {
        e.preventDefault();
       
        if (fname ==='' || lname ==='' || email==='' || password===''){
            setError('Input All Fields!!!');
        }
        try{
            const result = await createUserWithEmailAndPassword( auth, email, password);
    
            await setDoc(doc(db, 'users',user1 ),{
                uid: result.user.uid,
                fname,

            });
  
            navigate('/')
            
        }
        catch(err){
            
    
        }
    };
  return (

    <div className='w-screen h-screen bg-[#eee]'>
        <div className='w-full h-full'>

            <div>
                <p>
                    Account Setup Complete
                </p>
            </div>


        <div>
        <Link to='/go' >
                    <button>
                        Finish
                    </button>
                </Link>
            </div>



        </div>
    </div>
  )
}

export default Finish