import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function Popup({data}) {

    const [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
  }




  return (
    <>
  

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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                
                <div className="ml-auto mr-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-red-500 border border-transparent rounded-full"
                    onClick={closeModal}
                  >
                   x
                  </button>
                </div>
                
                <Dialog.Title
                  as="div"
                  className=" "
                >
                    <img src={data.popupImg} alt=''/>
                </Dialog.Title>

                <div className="mt-2">
                    <div className='bg-[#eee] p-5 m-3 max-w-md'>
                      
                      <p className='text-2xl text-center'>{data.popupText}</p>
                            
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

export default Popup