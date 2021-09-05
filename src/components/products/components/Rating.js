import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const Rating = ({ rating }) => {
  return (
    <div className='pr-1 inline-flex items-center flex-shrink'>
      {[0, 1, 2, 3, 4].map((star, i) => (
        <StarIcon
          key={star * i}
          className={`${
            rating > star ? 'text-yellow-400' : 'text-gray-200'
          }  h-5 w-5 2xl:h-3 2xl:w-3`}
        />
      ))}
    </div>
  )
}

export default Rating
