import React, { Fragment, useState } from 'react'
import {  updateDoc, doc, Timestamp } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react'
import { db} from '../../../../../../firebase'




function EditPopup({user2}) {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
  }

    function openModal() {
        setIsOpen(true)
  }

  const [popupText, setPopupText] = useState('');

  const [error, setError] = useState(null);
 
 


  const handleSubmit= async (e) => {
    e.preventDefault();
   
    if ( popupText==='' ){
        setError('Input All Fields!!!');
    }
    try{
    

      await updateDoc(doc(db, 'client',user2 ),{
       
        popupText,
        createdAt: Timestamp.fromDate(new Date()),
    });

        
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
          Edit Popup
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Change Popup
                </Dialog.Title>

                <div className="mt-2">
                <div className='bg-[#eee] p-5 m-3 max-w-md'>
           <div className='p-3 m-2'>
               {error && <p className='text-red-700'>error</p>  }
      
            </div>
            
        
        
        <form className='p-3 m-2 '>
        <input
                    aria-label=''
                    type='text'
                    placeholder='Enter The Popup Text'
                    className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                    onChange={({ target }) => setPopupText(target.value)}/>


                <div className='flex justify-center items-center'>
                    <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit'  onClick={handleSubmit}  >
                     

                    Add to Database

                    </button>
                </div>

            </form>
    </div>
                
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
                
              </div>
            </Transition.Child>

          </div>
        </Dialog>
      </Transition>
   

    </>
  )
}

export default EditPopup