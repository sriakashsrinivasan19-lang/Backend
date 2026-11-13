import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import ArrayProcess from "../Pages/ArrayProcess"
import ObjectProcess from "../Pages/ObjectProcess"

const AppRoutes = () => {
  return (

    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ArrayProcess/>}/>
        <Route path='/object' element={<ObjectProcess/>}/>
    </Routes>
    
    </>

)
}

export default AppRoutes