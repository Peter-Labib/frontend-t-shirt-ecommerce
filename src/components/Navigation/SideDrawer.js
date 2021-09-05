import React, { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'

import { XIcon } from '@heroicons/react/outline'
import NavLinks from './NavLinks'

const SideDrawer = (props) => {
  return (
    <Transition.Root as={Fragment} show={props.show}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={props.onClick}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <Transition.Child
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative max-w-xs w-full h-screen bg-white shadow-xl flex flex-col overflow-y-auto'>
            <div className='px-4 pt-5 pb-2 flex'>
              <button
                type='button'
                className='btn__icon'
                onClick={props.onClick}
              >
                <span className='sr-only'>Close menu</span>
                <XIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            {props.children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default SideDrawer
