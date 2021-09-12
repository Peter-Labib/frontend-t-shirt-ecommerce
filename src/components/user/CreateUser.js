import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Invalid email address!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Passwords must be at least 6 characters!'),
})

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const submitHandler = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='bg-white shadow-md p-4 sm:mt-6 md:mt-10 md:max-w-lg lg:max-w-xl mx-auto rounded-lg self-center'
    >
      <h3 className='font-medium text-gray-800'>Personal Information</h3>
      <div className='grid grid-cols-6 gap-6 w-full my-5 bg-white rounded-md p-4'>
        <div className='col-span-6 sm:col-span-3'>
          <label htmlFor='first-name' className='block text-sm text-gray-700'>
            First name
          </label>
          <input
            {...register('firstName')}
            type='text'
            name='firstName'
            id='first-name'
            className='sign_input'
            dir='auto'
          />
          <p className='text-xs text-red-500 p-1'>
            {errors.firstName?.message}
          </p>
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <label htmlFor='last-name' className='block text-sm text-gray-700'>
            Last name
          </label>
          <input
            {...register('lastName')}
            type='text'
            name='lastName'
            id='last-name'
            className='sign_input'
            dir='auto'
          />
          <p className='text-xs text-red-500 p-1'>{errors.lastName?.message}</p>
        </div>
        <div className='col-span-6 sm:col-span-4'>
          <label htmlFor='signup-email' className='block text-sm text-gray-700'>
            Email address
          </label>
          <input
            {...register('email')}
            type='email'
            name='email'
            id='signup-email'
            className='sign_input'
            lang='en'
          />
          <p className='text-xs text-red-500 p-1'>{errors.email?.message}</p>
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <label
            htmlFor='signup-password'
            className='block text-sm text-gray-700'
          >
            Password
          </label>
          <input
            {...register('password')}
            type='password'
            name='password'
            id='signup-password'
            className='sign_input'
          />
          <p className='text-xs text-red-500 p-1'>{errors.password?.message}</p>
        </div>
      </div>
      <button type='submit' className='mx-auto sign_button'>
        save
      </button>
    </form>
  )
}

export default CreateUser
