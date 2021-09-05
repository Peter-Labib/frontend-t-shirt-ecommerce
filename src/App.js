import React, { Fragment } from 'react'
import MainNav from './components/Navigation/MainNav'
import HomeScreen from './components/products/pages/HomeScreen'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <MainNav />
      <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <Route path='/' exact>
          <HomeScreen />
        </Route>
      </div>
    </Fragment>
  )
}

export default App
