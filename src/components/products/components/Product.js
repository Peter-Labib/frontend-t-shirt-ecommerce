import React from 'react'

import Rating from './Rating'

const Product = (props) => {
  return (
    <a href='#' className='group overflow-hidden bg-white rounded-lg'>
      <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className=' object-cover group-hover:opacity-75 group-hover:scale-105 transform transition duration-300'
        />
      </div>
      <div className='p-2'>

      <div className='flex items-center justify-between mt-4 max-w-full'>
        <Rating rating={props.rating} />
        <p className='text-xs text-gray-500 flex-grow whitespace-nowrap' >{props.reviews} reviews</p>
      </div>
      <h3 className='text-sm my-1 text-gray-600 whitespace-nowrap truncate'>
        {props.name}
      </h3>
      <p className='text-lg text-gray-900'>{props.price}</p>
      </div>
    </a>
  )
}

export default Product
