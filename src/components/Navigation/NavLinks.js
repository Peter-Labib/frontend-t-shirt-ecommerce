import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {
  return (
    <ul className='flex flex-col lg:flex-row justify-center items-center h-full space-y-4 font-medium text-gray-900 lg:w-full lg:justify-between lg:space-y-0 lg:py-4' >
      <li>
        <a href='#'>Men</a>
      </li>
      <li>
        <a href='#'>Women</a>
      </li>
      <li>
        <NavLink to='/signin'>Sign in</NavLink>
      </li>
      <li>
        <NavLink to='/createuser'>Create account</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
