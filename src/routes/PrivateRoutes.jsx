import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateRoutes(props) {
  return (
    props.isLogin ? <Outlet/> : <Navigate to="/" />
  )
}

export default PrivateRoutes