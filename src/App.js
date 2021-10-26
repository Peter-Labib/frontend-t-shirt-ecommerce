import React, { Fragment } from 'react'

import { Route, Switch } from 'react-router-dom'

import MainNav from './components/Navigation/MainNav'
import HeadCarousel from './components/HeadCarousel'
import CreateUser from './components/user/CreateUser'
import Signin from './components/user/Signin'
import AddProduct from './components/products/components/AddProduct'
import Return from './components/views/Return'
import SizeChart from './components/views/SizeChart'
import PrivacyPolicy from './components/views/PrivacyPolicy'
import TermsOfUse from './components/views/TermsOfUse'
import Home from './components/views/Home'
import Footer from './components/Footer'

const routes = [
  {
    path: '/createuser',
    Component: CreateUser,
  },
  {
    path: '/signin',
    Component: Signin,
  },
  {
    path: '/admin/addproduct',
    Component: AddProduct,
  },
  {
    path: '/return',
    Component: Return,
  },
  {
    path: '/size-chart',
    Component: SizeChart,
  },
  {
    path: '/privacy-policy',
    Component: PrivacyPolicy,
  },
  {
    path: '/terms-of-use',
    Component: TermsOfUse,
  },
  {
    path: '/',
    Component: Home,
  },
]

const App = () => {
  return (
    <Fragment>
      <MainNav />
      {/* <HeadCarousel /> */}
      {/* <div className='bg-gray-50 min-h-screen min-w-full'>
        <div className='py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mx-auto'> */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        {/* </div>
      </div> */}
      <Footer />
    </Fragment>
  )
}

export default App
