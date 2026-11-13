import About from "../About"
import Home from "../Home."
import { Route, Routes } from "react-router-dom"
import Services from "../Services"
import Contact from "../Contact"
import Login from "../Login"
import Register from "../Register"
import NavBar from "../../Components/NavBar"
const AppRoutes = () => {
  return (

    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    
    </>


)
}

export default AppRoutes