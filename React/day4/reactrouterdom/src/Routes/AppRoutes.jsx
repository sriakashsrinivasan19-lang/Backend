import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"

const AppRoutes = () => {
  return (

    <>
    
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} ro/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
           
        </Routes>
    
    </>

)
}

export default AppRoutes