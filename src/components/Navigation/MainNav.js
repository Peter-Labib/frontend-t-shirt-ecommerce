import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/outline'

import brand from '../../assets/imgs/t_shirt_icon_157416.ico'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import NavLinks from './NavLinks'

const MainNav = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      <MainHeader drawerHandler={openDrawerHandler}>
        <nav className='flex justify-between mx-auto max-w-7xl border-gray-200 border-b'>
          <div className='flex'>
            <button
              className='btn__icon lg:hidden inline-block '
              onClick={openDrawerHandler}
            >
              <MenuIcon className='h-6 w-6' />
            </button>
            <Link
              to='/'
              className='flex justify-center items-center ml-2 lg:ml-0'
            >
              <img className='h-6' src={brand} alt='logo' />
            </Link>
          </div>
          <div className='hidden lg:flex w-96 lg:ml-auto'>
            <NavLinks />
          </div>
          <div className='ml-4 lg:ml-6 justify-center items-center flex'>
            <a href='#' className='flex items-center'>
              <ShoppingBagIcon
                className='transition-all flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500'
                aria-hidden='true'
              />
            </a>
          </div>
        </nav>
      </MainHeader>
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>
    </React.Fragment>
  )
}

export default MainNav
