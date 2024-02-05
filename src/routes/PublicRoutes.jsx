import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PublicRoutes(props) {
  return (
    props.isLogin ? <Navigate to="/dashboard" /> : <Outlet/>
  )
}

export default PublicRoutes