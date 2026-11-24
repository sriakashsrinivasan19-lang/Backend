import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import ArrOfObj from "../Pages/ArrOfObj"

const AppRoutes = () => {
  return (

    <>
    
    <NavBar/>
    <Routes>
        <Route path="/" element={<ArrOfObj/>}/>
    </Routes>
    
    </>


)
}

export default AppRoutes