import React, { Fragment, useState } from 'react'
import { addDoc,  collection,  Timestamp } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react'
import { db,auth} from '../../../../../firebase'
import Plus from '../../../../../assets/Plus'


function AddClientPopup({user2}) {
    const [recBank, setRecBank] = useState('');
    const [recName, setRecName] = useState('');
    const [recNum, setRecNum] = useState('');
    const [recRoute, setRecRoute] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

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
   
    if (!recBank || !recName|| !recNum || !recRoute ||!amount){
        setError('Input All Fields!!!');
    }
    try{



        await addDoc(collection(db, `client/${user2}/history`), {
          recName,
          amount,
          recBank,
          recNum,
          recRoute,
          from: user1,
          to:user2,
          user: user2,
        });

        setIsOpen(false)

        
        
    }
    catch(err){
        

    }
};


  return (
    <>
  
      
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <Plus/>
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

              
          
          
          <form className='p-3 m-2 ' onSubmit={handleSubmit}>
            <input  type='text' placeholder='Enter The Recipient Name'
             className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
             onChange={({ target }) => setRecName(target.value)}/>


                      
            <input
                      aria-label='Recipient Acc Num'
                      type='number'
               placeholder='Enter Recipient Account Number'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setRecNum(target.value)}/>

  <input
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setRecBank(target.value)}/>

  <input
                      aria-label='Routing Number'
                      type='text'
                      placeholder='Routing Number'
                       className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setRecRoute(target.value)}
                  />

<input
                      aria-label='Routing Number'
                      type='number'
                      placeholder='Amount'
                       className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setAmount(target.value)}
                  />

<input
                      aria-label='Transaction Date'
                      type='date'
                      placeholder='Transaction Date'
                       className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'

                  />

                  
  

                  <div className='flex justify-center items-center'>
                      <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit'  onSubmit={handleSubmit}  >
                      

                      Add Transaction

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