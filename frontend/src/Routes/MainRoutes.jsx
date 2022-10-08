import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
const MainRoutes = () => {
  return (
    <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Homepage/>}/>
    </Routes>
  )
}

export default MainRoutes