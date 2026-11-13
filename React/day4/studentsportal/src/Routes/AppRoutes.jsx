import { Routes, Route } from "react-router-dom"
import Assignments from "../Pages/Assignments"
import Courses from "../Pages/Courses"
import Dashboard from "../Pages/Dashboard"
import Profile from "../Pages/Profile"
import NavBar from "../Components/NavBar"

const AppRoutes = () => {
  return (

<>

        <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/assignment" element={<Assignments/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
   
</>

)
}

export default AppRoutes