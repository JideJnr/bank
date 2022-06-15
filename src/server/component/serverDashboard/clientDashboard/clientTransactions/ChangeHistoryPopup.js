import React, { Fragment, useState } from 'react'
import { updateDoc, doc,  Timestamp } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react'
import { db } from '../../../../../firebase'
import { RadioGroup } from '@headlessui/react'



function ChangeHistoryPopup({history}) {

    const [status, setStatus] = useState('');
    const [error, setError] = useState('');


    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
  }

    function openModal() {
        setIsOpen(true)
  }

  const plans = [
    {
      status: 'Success',
      
    },
    {
      status: 'Pending',
    },
    {
      status:  'Failed',
      
    },
  ];

  const [selected, setSelected] = useState(plans[1]);

  const updatedStatus = selected.status;

  const user = history.user;

  const handleSubmit= async (e) => {
      
    e.preventDefault();
   
    if (!status){
        setError('Select An Option');
    }
    try{



        await updateDoc(doc(db, `client/${user}/history`,'h'),{
        
          status: updatedStatus,

        });

        setIsOpen(false);
                
    }
    catch(err){
    }
};


  return (
    <>
  
      
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium "
        >
          {history.status}
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

                
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex mx-auto"
                >
                 <p className='flex mx-auto'>Change Status</p> 
                </Dialog.Title>

                
                  <div className=' p-3 max-w-md'>

              
          
                  <RadioGroup value={selected} onChange={setSelected}>
                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                <div className="space-y-2 grid grid-col-3">
                                    {plans.map((plan) => (
                                    <RadioGroup.Option
                                        key={plan.name}
                                        value={plan}
                                        className={({ active, checked }) =>
                                        `${
                                            active
                                            ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                                            : ''
                                        }
                                        ${
                                            checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                                        }
                                            relative rounded-lg shadow-md p-3 m-2 cursor-pointer flex focus:outline-none`
                                        }
                                    >
                                        {({ active, checked }) => (
                                        <>
                                            <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${
                                                    checked ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                >
                                                    {plan.status}
                                                </RadioGroup.Label>
                                                </div>
                                            </div>
                                          
                                            {checked && (
                                                <div className="flex-shrink-0 text-white">
                                                <CheckIcon className="w-6 h-6" />
                                                </div>
                                            )}
                                            </div>
                                        </>
                                        )}
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                                </RadioGroup>


    
                  </div>
                
               

                <div className="mt-4 m-auto flex">

                    <button
                    type="button"
                    className=" mx-auto flex  px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={handleSubmit}
                    >
                    confirm
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

export default ChangeHistoryPopup


function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }