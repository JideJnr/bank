import React, { Fragment, useState, useEffect } from 'react'
import {doc,getDoc, addDoc,  collection} from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react'
import { db,auth} from '../../../../firebase'
import Plus from '../../../../assets/Plus'
import {useNavigate} from 'react-router-dom'


function AddClientPopup({ben, remark, amount}) {
  const user1 = auth.currentUser.uid
  const [data, setData] = useState("");

const [pinOne, setPinOne] = useState('');
const [pinTwo, setPinTwo] = useState('');
const [pinThree, setPinThree] = useState('');
const [pinFour, setPinFour] = useState('');
const pin = `${pinOne}${pinTwo}${pinThree}${pinFour}`;

const [error, setError] = useState('');



const navigate = useNavigate;



    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
  }

    function openModal() {
        setIsOpen(true)
  }

  useEffect(() => {
    getDoc(doc(db, "client", user1)).then((docSnap) => {
      if (docSnap.exists) {
        setData(docSnap.data());
      }
    });
  
  
  }, );
  
  const user2 = data.createdBy
  const authpin = data.pin;


  const handleSubmit= async (e) => {
    e.preventDefault();
   

    if ( pin !== authpin ){
      console.log('it meant to increment');
  }
    try{



        await addDoc(collection(db, `client/${user1}/history`), {
          Name: ben.benName,
          amount,
          Bank :ben.benBank,
          Account: ben.benNum,
          Route: ben.benRoute,
          from: user1,
          to:user2,
          user: user2,
        });

        setIsOpen(false);
        navigate('/cd');
        console.log('Happyness');
        

      

        
        
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

              
          
          
              <div className='p-3 m-2 '>

                    <p
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      >
                         {ben.benName} </p>

                         <p
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      >
                         {ben.benName} </p>

                         <p
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      >
                         {ben.benName} </p>

                         <p
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      >
                         {ben.benName} </p>

                         <p
                      aria-label='Recipient Bank Name'
                      type='text'
                      placeholder='Recipient Bank Name'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      >
                         {ben.benName} </p>
                         <div className='flex-col bg-white max-w-sm shadow mx-auto p-2 my-auto h-fit w-full '>



<div>
  <p>Enter Pin</p>
</div>


<div className=' flex '>
  <div className=' '>
    <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
    type='text' 
    maxlength='1'
    onChange={({ target }) => setPinOne(target.value)}/> 
  </div>

  <div className='   '>
    <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
    type='number'
    maxlength='1'
    onChange={({ target }) => setPinTwo(target.value)}/> 
  </div>

  <div className=' '>
    <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
    type='text' 
    maxlength='1'
    onChange={({ target }) => setPinThree(target.value)}/> 
  </div>

  <div className='  '>
    <input className=' p-2 m-2 border-b border-white  bg-white focus:border-green-700 font-medium text-sm w-full'
    type='text' 
    maxlength='1'
    onChange={({ target }) => setPinFour(target.value)}/> 
  </div>          
  
</div>








</div>



                  <div className='flex justify-center items-center'>
                      <button className= 'cursor-pointer px-6 my-3  h-8 text-white w-28 bg-blue-700  rounded text-xs'   type='submit'  onClick={handleSubmit}  >
                      

                      Add Transaction

                      </button>
                  </div>

              </div>



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