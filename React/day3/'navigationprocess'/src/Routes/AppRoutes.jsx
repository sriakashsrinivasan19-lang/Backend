import { Routes, Route } from "react-router-dom"


import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import About from "../Pages/About"
import Contact from "../Pages/Contact"

const AppRoutes = () => {
  return (

    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

       
    </Routes>


    </>

)
}

export default AppRoutes