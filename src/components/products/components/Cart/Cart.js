import React, { Fragment } from 'react'

const Cart = () => {
  return (
    <Fragment>
      <h2>Shopping Cart</h2>
      <div className='flex flex-col lg:flex-row'>
        {/* cart list  */}
        <div className='flex divide-y divide-gray-200'></div>
        {/* order summary */}
        <div></div>
      </div>
    </Fragment>
  )
}

export default Cart
