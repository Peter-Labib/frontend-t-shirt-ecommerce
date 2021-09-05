import React from 'react'
import Rating from './Rating'

const Product = (props) => {
  return (
    <a href='#' className='group overflow-hidden'>
      <div className='aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden'>
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className=' object-cover group-hover:opacity-75 transition-opacity'
        />
      </div>
      <div className='flex items-center justify-between mt-4 max-w-full'>
        <Rating rating={props.rating} />
        <p className='text-xs text-gray-500 flex-grow whitespace-nowrap' >{props.reviews} reviews</p>
      </div>
      <h3 className='text-sm my-1 text-gray-600 whitespace-nowrap truncate'>
        {props.name}
      </h3>
      <p className='text-lg text-gray-900'>{props.price}</p>
    </a>
  )
}

export default Product
