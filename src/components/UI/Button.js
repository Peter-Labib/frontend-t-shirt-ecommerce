import React, { memo } from 'react'

const Button = ({ children, onclick }) => {
  console.log('button render')
  const onClickHandler = (path) => {
    onclick(path)
  }

  return (
    <button className='bg-black text-white py-4 px-7' onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default memo(Button)
