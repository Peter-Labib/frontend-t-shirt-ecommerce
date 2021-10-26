import React from 'react'

const MainHeader = (props) => {
  return (
    <header className='bg-white absolute w-full overflow-hidden px-4'>
      {props.children}
    </header>
  )
}

export default MainHeader
