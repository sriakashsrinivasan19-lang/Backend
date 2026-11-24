import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Todo from "../Pages/Todo"

const AppRoutes = () => {
  return (

    <>
    
    <NavBar/>
    <Routes>
        <Route path="/" element={<Todo/>}/>
    </Routes>
    
    </>


)
}

export default AppRoutes