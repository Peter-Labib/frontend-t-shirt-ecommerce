import React from 'react'
import { useForm } from 'react-hook-form'

import FilePicker from '../../UI/FilePicker'

const AddProduct = () => {
  return (
    <form className='bg-white shadow-md p-4 sm:mt-6 md:mt-10 md:max-w-lg lg:max-w-4xl mx-auto rounded-lg'>
      <h3 className='font-medium text-gray-800'>Product Information</h3>

      <div className='p-4 space-y-4 lg:space-y-8'>
        <div>
          <label htmlFor='product-name' className='block text-sm text-gray-700'>
            Product name
          </label>
          <input
            //   {...register('firstName')}
            type='text'
            name='name'
            id='product-name'
            className='sign_input'
            dir='auto'
          />
          {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
        </div>
        <div className='w-24'>
          <label
            htmlFor='product-price'
            className='block text-sm text-gray-700'
          >
            Price
          </label>
          <input
            //   {...register('firstName')}
            name='price'
            id='product-price'
            className='sign_input'
            inputMode='numeric'
          />
          {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
        </div>
        <div className='w-1/2'>
          <h3 className='block text-sm text-gray-700'>Count in stock</h3>
          <div className='grid grid-cols-3 gap-3 mt-1'>
            <div className='col-span-1 '>
              <label
                htmlFor='size-xs'
                className='block text-xs pl-2 text-gray-500'
              >
                XS
              </label>
              <input
                //   {...register('firstName')}
                id='size-xs'
                name='XS'
                className='sign_input'
                inputMode='numeric'
                placeholder='XS'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
            <div className='col-span-1 '>
              <label
                htmlFor='size-S'
                className='block text-xs pl-2 text-gray-500'
              >
                S
              </label>
              <input
                //   {...register('firstName')}
                id='size-S'
                name='S'
                className='sign_input'
                inputMode='numeric'
                placeholder='S'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
            <div className='col-span-1 '>
              <label
                htmlFor='size-M'
                className='block text-xs pl-2 text-gray-500'
              >
                M
              </label>
              <input
                //   {...register('firstName')}
                id='size-M'
                name='M'
                className='sign_input'
                inputMode='numeric'
                placeholder='M'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
            <div className='col-span-1 '>
              <label
                htmlFor='size-Lg'
                className='block text-xs pl-2 text-gray-500'
              >
                Lg
              </label>
              <input
                //   {...register('firstName')}
                id='size-Lg'
                name='Lg'
                className='sign_input'
                inputMode='numeric'
                placeholder='Lg'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
            <div className='col-span-1 '>
              <label
                htmlFor='size-XL'
                className='block text-xs pl-2 text-gray-500'
              >
                XL
              </label>
              <input
                //   {...register('firstName')}
                id='size-XL'
                name='XL'
                className='sign_input'
                inputMode='numeric'
                placeholder='XL'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
            <div className='col-span-1 '>
              <label
                htmlFor='size-XXL'
                className='block text-xs pl-2 text-gray-500'
              >
                XXL
              </label>
              <input
                //   {...register('firstName')}
                id='size-XXL'
                name='XXL'
                className='sign_input'
                inputMode='numeric'
                placeholder='XXL'
              />
              {/* <p className='text-xs text-red-500 p-1'>{errors.firstName?.message}</p> */}
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor='product-description'
            className='block text-sm text-gray-700'
          >
            Description
          </label>
          <textarea className='sign_input' rows='4' dir='auto'></textarea>
        </div>
        <div className='flex flex-wrap gap-6 items-start content-center'>
          <FilePicker name='primary-img' />
          <FilePicker name='secondary-img' />
          <FilePicker name='tertiary-img' />
        </div>
      </div>
    </form>
  )
}

export default AddProduct
