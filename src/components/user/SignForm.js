import React, { Fragment } from 'react'
import { useController } from 'react-hook-form'

const SignForm = (props) => {
  const { error = '', name, id, type, label } = props
  const { field } = useController(props)
  return (
    <Fragment>
      {console.log('ren')}
      <label htmlFor='first-name' className='block text-sm text-gray-700'>
        {label}
      </label>
      <input
        {...field}
        type={type}
        name={name}
        id={id}
        className='sign_input'
        dir='auto'
      />
      <p className='text-xs text-red-500 p-1'>{error}</p>
    </Fragment>
  )
}

export default SignForm
