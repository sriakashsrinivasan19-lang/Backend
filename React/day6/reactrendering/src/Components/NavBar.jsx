import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className="bg-black text-white flex justify-between items-center h-15">
        <div className="mx-15">Logo</div>
        <div className="flex gap-15 mx-15">
            <Link to="/">Student</Link>
            <Link to="/employee">Employee</Link>
            <Link to="/product">Product</Link>
            <Link to="/array">Array</Link>
            <Link to="/intro">Intro</Link>
        </div>
    </div>
    </>

    )
}

export default NavBar