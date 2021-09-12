import React from 'react'

import { Link } from 'react-router-dom'

import brand from '../../assets/t_shirt_icon_157416.ico'

const Signin = () => {
  return (
    <div className='mt-8'>
      <img src={brand} alt='logo' className='block h-12 w-12 mx-auto' />
      <h2 className='mt-6 px-2 text-center text-3xl font-extrabold text-gray-900'>
        Sign in to your account
      </h2>
      <p className='text-center text-sm text-gray-600 my-2'>
        Or&nbsp;
        <Link
          className='font-medium text-indigo-600 hover:text-indigo-500'
          to='/createuser'
        >
          create account
        </Link>
      </p>
      <form className='rounded-lg shadow-lg bg-white p-4 mt-6 max-w-md mx-auto grid space-y-4'>
        <div>
          <label htmlFor='user-email' className='text-sm text-gray-700'>
            Email address
          </label>
          <input id='user-email' type='email' className='sign_input' />
        </div>
        <div>
          <label htmlFor='user-password' className='text-sm text-gray-700'>
            Password
          </label>
          <input id='user-password' type='text' className='sign_input' />
        </div>
        <div className='flex items-center'>
          <input
            id='remember-me'
            type='checkbox'
            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
          />
          <label htmlFor='remember-me' className='text-sm text-gray-700 ml-2'>
            Remember me
          </label>
        </div>
        <button type='submit' className='sign_button w-full'>
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Signin
