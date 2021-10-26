import React from 'react'

import masterCard from '../../assets/imgs/master-card.svg'
import visa from '../../assets/imgs/visa.svg'

const TermsOfUse = () => {
  return (
    <div className='max-w-3xl text-lg mx-auto'>
      <h2 className='text-center text-4xl font-medium pb-4'>Terms of Use</h2>
      <span className='block mx-auto h-0.5 bg-black w-7 mb-8'></span>
      <h3 className='pb-8 text-center'>
        Terms of Use - A terms-of-use agreement
      </h3>
      <ol className='list-decimal list-inside pb-6'>
        <li>
          Payment are accepted for goods sold, shipping fees and any added
          services or goods
        </li>
        <li>You will be charged IN EGP Egyptian pounds</li>
      </ol>
      <p>
        We offer the following payment methods: Visa, Mastercard, Cash on
        Delivery (COD)
      </p>
      <div className='mx-auto flex max-w-max space-x-3 py-8'>
        <img className='w-24' src={masterCard} alt='master-card' />
        <img className='w-24' src={visa} alt='visa' />
      </div>
      <p className='font-semibold pb-4'>
        Why might my credit card might be refused?
      </p>
      <p className='pb-4'>
        Your credit card might be refused for any of the following reasons:
      </p>
      <ul className='list-disc list-inside pb-4'>
        <li>The card may have expired. Check expiry date.</li>
        <li>You may have reached your credit limit.</li>
        <li>You may have entered some information incorrectly.</li>
        <li>Error with the network</li>
        <li>Or the card has been filtered as fraud.</li>
      </ul>
      <p className='font-semibold pb-4'>
        Is it safe to use my credit card on the website?
      </p>
      <p className='pb-4'>
        Yes, the data is encrypted. After verifying the card, Payfort will
        contact the card-issuing bank to enable the buyer to authorize the
        purchase. When the bank confirms the authenticity, the payment will be
        charged to the card. Otherwise the order will be cancelled.
      </p>
      <p className='font-semibold pb-4'>Disclaimer/Limitation of Liability</p>
      <ul className='list-disc list-outside pl-4'>
        <li>
          To request access to your personal data that we hold. We remind you
          that you are a Platform registered .
        </li>
        <li>
          To request that we rectify the personal data that we hold. Please bear
          in mind that if you are a registered user on the Platform, you may
          also access the relevant personal data section of your online account
          to change or update your personal data. please take into account that,
          on making your personal data available to us through any procedure,
          you guarantee that they are true and correct and you are responsible
          to notify to us for any change or modification of your data. You will
          be liable for any loss or damage caused to the Platform or to the
          person responsible for the Platform or to any third party by reporting
          erroneous, inaccurate or incomplete information you registered. Please
          remember that, as a general rule, you must provide us only with your
          own data, not with those of third parties, .
        </li>
        <li>
          To request that we delete your personal data so that they are no
          longer necessary for the purpose for which we need to keep processing
          them
        </li>
        <li>
          You Can request that we cancel processing of your personal data, which
          entails that in certain cases you can request us to temporally suspend
          the processing of the data.{' '}
        </li>
        <li>
          Any dispute or claim arising out of or in connection with this website
          shall be governed and construed in accordance with the laws of Egypt.
        </li>
        <li>Egypt is our country of domicile.</li>
        <li>
          Minors under the age of 18 shall are prohibited to register as a User
          of this website and are not allowed to transact or use the website.
        </li>
        <li>
          If you make a payment for our products or services on our website, the
          details you are asked to submit will be provided directly to our
          payment provider via a secured connection.{' '}
        </li>
        <li>
          The cardholder must retain a copy of transaction records and Merchant
          policies and rules.
        </li>
        <li>
          We accept payments online using Visa and MasterCard credit/debit card
          in EGP.
        </li>
      </ul>
    </div>
  )
}

export default TermsOfUse
