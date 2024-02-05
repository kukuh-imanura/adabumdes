import React from 'react'
import { Route, Routes } from 'react-router'

// PUBLIC
import PublicRoutes from './PublicRoutes'
import LandingPage from '../pages/LandingPage'
import NotFound from '../pages/NotFound'

// PRIVATE
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../pages/Dashboard'


function Auth() {
  const isLogin = true;
  return (
    <Routes>

      <Route element={<PublicRoutes isLogin={isLogin}/>}>
        <Route path="/" element={<LandingPage/>}/>
      </Route>

      <Route element={<PrivateRoutes isLogin={isLogin}/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default Auth