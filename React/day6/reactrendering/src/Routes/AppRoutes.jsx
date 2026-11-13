import { Routes, Route } from "react-router-dom"
import EmployeeDetails from "../Pages/EmployeeDetails"
import ProductList from "../Pages/ProductList"
import StudentProfile from "../Pages/StudentProfile"
import NavBar from "../Components/NavBar"
import ArrayRendering from "../Pages/ArrayRendering"
import Intro from "../Pages/Intro"

const AppRoutes = () => {
  return (

    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<StudentProfile/>}/>
        <Route path="/employee" element={<EmployeeDetails/>}/>
        <Route path="/product" element={<ProductList/>}/>
        <Route path="/array" element={<ArrayRendering/>}/>
        <Route path="/intro" element={<Intro/>}/>
    </Routes>
    
    </>

)
}

export default AppRoutes
