import React from 'react'

import { Link } from 'react-router-dom'

import masterCard from '../assets/imgs//master-card.svg'
import visa from '../assets/imgs/visa.svg'

const quickLinks = [
  {
    name: 'search',
    route: '/search',
  },
  {
    name: 'return your order',
    route: '/return',
  },
  {
    name: 'size charts',
    route: '/size-chart',
  },
  {
    name: 'privacy policy',
    route: '/privacy-policy',
  },
  {
    name: 'terms of use',
    route: '/terms-of-use',
  },
]

const Footer = () => {
  return (
    <footer className='bg-black py-6 md:py-12 px-4'>
      <div className='container mx-auto  text-white'>
        <div className='flex flex-col justify-between md:flex-row space-y-8 md:space-y-0'>
          <div>
            <h5 className='font-bold pb-6'>Qiuck Links</h5>
            <ul className='capitalize font-medium text-lg'>
              {quickLinks.map((link) => (
                <li key={link.name} className='pb-3'>
                  <Link to={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='max-w-xs'>
            <h5 className='font-bold pb-6'>Newsletter</h5>
            <p className='pb-8'>
              Sign up for exclusive offers, original stories, activism
              awareness, events and more.
            </p>
            <input
              type='email'
              placeholder='Enter email'
              className='border-b border-white bg-transparent p-2 outline-none placeholder-white w-3/4'
            />
          </div>
        </div>
        <div className='flex justify-between mt-6'>
          <p>&copy; Powered by Peter</p>
          <div className='flex space-x-2'>
            <img src={masterCard} alt='master-card' />
            <img src={visa} alt='visa' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
