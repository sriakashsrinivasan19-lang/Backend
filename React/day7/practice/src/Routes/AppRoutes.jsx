import { Routes, Route } from "react-router-dom"
import ProductList from "../Pages/ProductList"
import NavBar from "../Components/NavBar"
import Product from "../Pages/Product"

import Update from "../Pages/Update"
import Develop from "../Pages/Develop"


const AppRoutes = () => {
  return (

    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:userId" element={<Product/>}/>
        <Route path="/develop" element={<Develop/>}/>
        <Route path="/update" element={<Update/>}/>


    </Routes>
    
    </>

)
}

export default AppRoutes