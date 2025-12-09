import React from 'react'

const Button = ({btnValue,event}) => {
  return (
   <div onClick={event} className='px-4 py-2 text-lg cursor-pointer font-medium rounded-lg mt-4 text-center bg-gray-800 text-white'>
   {btnValue}
  </div>
  )
}
export default Button