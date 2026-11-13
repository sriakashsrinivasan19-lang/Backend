import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className="bg-black text-white flex justify-between items-center p-5 h-15 ">
        <div className="mx-15">
            <p>Logo</p>
        </div>
        <div className="flex gap-10 mx-15">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>

    </>
)
}

export default NavBar