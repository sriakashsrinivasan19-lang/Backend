import { Link } from "react-router-dom"

const NavBar = () => {
  return (

    <>
    <div className="bg-black text-white p-3 flex justify-between">
        <div>
            Logo
        </div>
        <div>
            <Link to="/">ArrayOfObject</Link>
        </div>
    </div>
    
    </>
)
}

export default NavBar