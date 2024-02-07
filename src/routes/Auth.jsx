import React from 'react'
import { Route, Routes } from 'react-router'

// PUBLIC
import PublicRoutes from './PublicRoutes'
import LandingPage from '../pages/LandingPage'
import Notfound from '../pages/Notfound'

// PRIVATE
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../pages/Dashboard'


function Auth() {
  const isLogin = false;
  return (
    <Routes>

      <Route element={<PublicRoutes isLogin={isLogin}/>}>
        <Route path="/" element={<LandingPage/>}/>
      </Route>

      <Route element={<PrivateRoutes isLogin={isLogin}/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>

      <Route path="*" element={<Notfound/>} />
    </Routes>
  )
}

export default Auth