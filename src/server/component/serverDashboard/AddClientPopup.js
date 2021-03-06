import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { doc,  setDoc,  Timestamp } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react'
import {auth, db} from '../../../firebase'
import {  createUserWithEmailAndPassword} from 'firebase/auth'

function AddClientPopup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [error, setError] = useState('');
    const[message, setMessage] = useState({error: false, msg: ''});
    const navigate = useNavigate()
    const user1 = auth.currentUser.uid

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
  }

    function openModal() {
        setIsOpen(true)
  }

  const handleSubmit= async (e) => {
    e.preventDefault();
   
    if (fname ==='' || lname ==='' || email==='' || password===''){
        setError('Input All Fields!!!');
    }
    try{
        const result = await createUserWithEmailAndPassword( auth, email, password);

        await setDoc(doc(db, 'client',result.user.uid ),{
            uid: result.user.uid,
            fname,
            lname,
            password,
            email,
            createdAt: Timestamp.fromDate(new Date()),
            createdBy: user1,
            lastLogin: Timestamp.fromDate(new Date()),
            isOnline: true,
        });

        navigate('/')
        
    }
    catch(err){
        

    }
};


  return (
    <>
  
      
        <button
          type="button"
          onClick={openModal}
          className="p-2 text-[12px] font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add Client
        </button>
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" bg-[#eee] inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div className="mt-4 ml-auto">

                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>

                </div>
                
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  ADD HISTORY
                </Dialog.Title>

                <div className="mt-2">
                  <div className=' p-5 m-3 max-w-md'>

              
          
          
          <form className='p-3 m-2 '>
          <input
                      aria-label='Enter first Name'
                      type='text'
                      placeholder='Enter first Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setFname(target.value)}/>
                      
                      <input
                      aria-label='Enter last Name'
                      type='text'
                      placeholder='Enter First Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setLname(target.value)}/>

  <input
                      aria-label='Enter The Email address'
                      type='text'
                      placeholder='Email address'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setEmail(target.value)}/>

  <input
                      aria-label='Enter The Password'
                      type='text'
                      placeholder='Password'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setPassword(target.value)}
                  />
  

                  <div className='flex justify-center items-center'>
                      <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit'  onClick={handleSubmit} >
                      

                      Create Account

                      </button>
                  </div>

              </form>
                  </div>
                
                </div>


                
              </div>
            </Transition.Child>

          </div>

        </Dialog>
      </Transition>
   

    </>
  )
}

export default AddClientPopup