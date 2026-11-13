import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className=" p-5 flex justify-between items-center shadow-xl ">
        <div className="mx-15">
            <p>Logo</p>
        </div>
        <div className="flex gap-15 mx-15">
            <NavLink to="/" className={({isActive})=> isActive?"activeLink":"navLink"}>Dashboard</NavLink>
            <NavLink to="/courses"  className={({isActive})=> isActive?"activeLink":"navLink"}>Courses</NavLink>
            <NavLink to="/assignment" className={({isActive})=> isActive?"activeLink":"navLink"}>Assignment</NavLink>
            <NavLink to="/profile" className={({isActive})=> isActive?"activeLink":"navLink"}>Profile</NavLink>
        </div>
    </div>
    
    
    </>

)
}

export default NavBar