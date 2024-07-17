import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import WholeDashboard from './components/WholeDashboard'

function AllRoutes() {
  return (
  
    <Routes>
        <Route  path="/" element={<Login/>} />
        <Route  path="/dashboard" element={<WholeDashboard/>} />
    </Routes>
  )
}

export default AllRoutes
