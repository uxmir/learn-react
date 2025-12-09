import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

 const Card = ({data}) => {
  return (
    <div>
        <div  className='w-full h-auto rounded-lg '>
        <div className='w-full h-40 bg-green-500 rounded-t-lg'></div>
        <div className='px-4 py-6 flex flex-col bg-gray-100 '>
         <span className='capitalize text-xl font-semibold text-gray-700'>{data.title}</span>
         <div className='flex justify-between items-center w-full mt-4'>
         <span className='text-xl font-semibold text-gray-700'>{data.price}</span>
        <span className='text-lg line-through text-gray-400'>{data.price_2}</span>
         </div>
          <div className='flex justify-between items-center w-full mt-2'>
         <span className='text-xl font-semibold text-gray-700'>Discount</span>
        <span className='text-lg line-through text-gray-400'>{data.discount}%</span>
         </div>
         <Button btnValue={'buy now'} />
        </div>
        </div>
    </div>
  )
}
Card.PropTypes={
data:PropTypes.array.isRequired
}
export default Card