import React, { Fragment } from 'react'

import { Route } from 'react-router-dom'

import MainNav from './components/Navigation/MainNav'
import HomeScreen from './components/products/pages/HomeScreen'
import CreateUser from './components/user/CreateUser'
import Signin from './components/user/Signin'

const App = () => {
  return (
    <Fragment>
      <MainNav />
      <div className='bg-gray-50 min-h-screen min-w-full'>
        <div className='py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto'>
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          <Route path='/createuser'>
            <CreateUser />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
        </div>
      </div>
    </Fragment>
  )
}

export default App
