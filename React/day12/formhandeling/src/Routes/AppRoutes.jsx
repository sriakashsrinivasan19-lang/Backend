import React from 'react'
import FormValidation from '../Pages/FormValidation'
import Stable from '../Pages/Stable'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar'

const AppRoutes = () => {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/" element={<FormValidation/>}/>
    <Route path="/stable" element={<Stable/>}/>
   </Routes>
   
   </>
  )
}

export default AppRoutes