import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from '../Components/Card'
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
         <Route path="/home/movies/:id" element={<Card/>}/>
    </Routes>
  )
}

export default MainRoutes