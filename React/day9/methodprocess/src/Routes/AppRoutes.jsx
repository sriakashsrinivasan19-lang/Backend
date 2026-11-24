import { Routes, Route } from "react-router-dom"
import NavBar from "../Components/NavBar"
import ArrDisplay from "../Pages/Arrdisplay"
import ArrAdd from "../Pages/Arradd"
import ArrUpdate from "../Pages/Arrupdate"
import ArrDelete from "../Pages/ArrDelete"
import ArrOfObj from "../Pages/ArrOfObj"
import BooleanToogle from "../Pages/BooleanToogle"
import Nullish from "../Pages/Nullish"
import ObjAdd from "../Pages/objAdd"
import ObjUpdateDelete from "../Pages/objUpdateDelete"
import Numbers from "../Pages/Numbers"

const AppRoutes = () => {
  return (

    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ArrDisplay/>}/>
        <Route path='/arradd' element={<ArrAdd/>}/>
        <Route path='/arrupdate' element={<ArrUpdate/>}/>
        <Route path='/arrdelete' element={<ArrDelete/>}/>
        <Route path='/objadd' element={<ObjAdd/>}/>
        <Route path='/objupdate' element={<ObjUpdateDelete/>}/>
        <Route path='/arrofobj' element={<ArrOfObj/>}/>
        <Route path='/boolean' element={<BooleanToogle/>}/>
        <Route path='/nullish' element={<Nullish/>}/>
        <Route path='/number' element={<Numbers/>}/>
    </Routes>
    
    </>

)
}

export default AppRoutes