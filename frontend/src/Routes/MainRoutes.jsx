import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import HotStar from '../Pages/HotStar'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
const MainRoutes = () => {
  return (
    <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Homepage/>}/>
         <Route path="/home/movies" element={<HotStar/>}/>
    </Routes>
  )
}

export default MainRoutes