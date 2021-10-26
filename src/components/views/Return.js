import React from 'react'

const Return = () => {
  return (
    <div className='max-w-3xl text-lg mx-auto'>
      <h2 className='text-center text-5xl font-medium pb-4'>Returns</h2>
      <span className='block mx-auto h-0.5 bg-black w-7 mb-8'></span>
      <p className='font-semibold pb-4'>How to return a product?</p>
      <p className='pb-4'>
        Before returning an item, please check our Ravin Return conditions,
        stated in the questions below, to make sure your item is eligible for
        return.
      </p>
      <p className='pb-4'>
        You have 14 calendar days to notify us that you want to return your
        product after its reception.
      </p>
      <p className='pb-4'>
        If your return meets all the requirements, your returns can be initiated
        by calling our customer service
      </p>
      <p className='font-semibold pb-4'>
        How much time do I have to return a product to Ravin?
      </p>
      <p className='pb-4'>
        All items sold on Ravin, under certain conditions, can be returned
        within a period of 14 days from delivery date.
      </p>
      <p className='pb-4'>
        NOTE: You have 14 days to notify us by sending an email or by calling
        Customer Service, from the day you received your purchase.
      </p>
      <p className='pb-4 font-semibold'>
        What are the conditions for returning an item?
      </p>
      <p>Requirement for a valid procedure</p>
      <ul className='py-7 list-disc list-inside'>
        <li>Proof of purchase (order number, invoice, etc)</li>
        <li>
          Reason for return has to be valid and return acceptance conditions met
          (check out below)
        </li>
      </ul>
      <p className='pb-4'>
        Should there be any item damaged or missing due to our transportation,
        please contact our customer service within 24 hours for claim purposes.
        Remember to send back all items including the free promotional items
        that came with the purchase. If forgotten, the return will not be
        accepted.
      </p>
      <p className='pb-3'>
        Once your product is retrieved, we will perform a quality check. If the
        quality check is successful, we will be calling you to arrange a refund
        or a replacement. Note that if the quality check is unsuccessful, you
        will not be refunded and will be sent back your product.
      </p>
      <p className='pb-4 hidden md:block'>
        Conditions and reasons to return an item You may want to return your
        item due to any of the following reasons:
      </p>
      <p className='pb-4 hidden md:block'>x : Not Required | ✓: Required</p>
      <table className='table-auto border max-w-2xl hidden md:block'>
        <thead>
          <tr>
            <td className='border py-3 px-2'>Reasons for return</td>
            <td className='border py-3 px-2' colSpan='4'>
              YOUR RETURN MUST BE :
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border py-3 px-2'></td>
            <td className='border py-3 px-2'>New condition</td>
            <td className='border py-3 px-2'>
              Complete (free gifts, accessories, original packaging)
            </td>
            <td className='border py-3 px-2'>Not damaged</td>
            <td className='border py-3 px-2'>Tags & labels attached</td>
          </tr>
          <tr>
            <td className='border py-3 px-2'>Delivery - Wrong Product</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
          </tr>
          <tr>
            <td className='border py-3 px-2'>Quality – Defective</td>
            <td className='border py-3 px-2'>x</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
          </tr>
          <tr>
            <td className='border py-3 px-2'>Delivery – Missing items</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>x</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
          </tr>
          <tr>
            <td className='border py-3 px-2'>Website - Incorrect Content</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
          </tr>
          <tr>
            <td className='border py-3 px-2'>
              Product - Does Not Fit - item not fitted e.g. item delivered does
              not fit the customer (Not applicable to some fashion items, check
              return policy on product page)
            </td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
            <td className='border py-3 px-2'>✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Return
