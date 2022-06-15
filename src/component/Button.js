import React from 'react'

const Button = ({onClick,title,color}) => {
  return (
    <button className='cursor-pointer px-6 my-3  h-10 text-white w-28 bg-black  rounded text-xs ] hover:text-blue-500 duration-500'
    onClick={onClick}>
        
        Login
   

    </button>



  )
}

export default Button