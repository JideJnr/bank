import React from 'react'
import EditPopup from './EditPopup'
import { Disclosure } from '@headlessui/react'



function PopupText({client}) {
const user2 = client.uid
const text = client.popup
const img = client.popupImg
console.log(text)

  return (
    <div className='w-full'>


        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Popup Text And Image</span>
                
                <svg xmlns="http://www.w3.org/2000/svg"                   className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}  viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>

               
              </Disclosure.Button>
              
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <div>
                <img src={img} alt=''/>
                <p className='text-black'> {text}  </p>
              </div>
              
      <div className='w-full'>
     
        <div className='mx-auto'>
            <EditPopup user2={user2}/>
        </div>
      </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>





        
        

    </div>
  )
}

export default PopupText