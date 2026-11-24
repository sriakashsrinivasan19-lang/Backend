import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Fetch from "../Pages/Fetch"
import ProductCount from "../Pages/ProductCount"
import EffectTimer from "../Pages/EffectTimer"


const AppRoutes = () => {
  return (

    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Fetch/>}/>
         <Route path="/productcount" element={<ProductCount/>}/>
          <Route path="/timer" element={<EffectTimer/>}/>
        
    </Routes>
    
    </>

)
}

export default AppRoutes