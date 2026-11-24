import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className="bg-amber-200 p-3 flex justify-between items-center">
        <div>
            Logo
        </div>
        <div>
            <Link to="/">Todo</Link>
        </div>
    </div>
    
    </>

)
}

export default NavBar