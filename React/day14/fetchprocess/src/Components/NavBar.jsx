import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    <div className="bg-black text-white p-3 flex justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-10 mx-15">
            <Link to="/">Fetch</Link>
            <Link to="/productcount">ProductCount</Link>
            <Link to="/timer">Timer</Link>

        </div>
    </div>
  
    
    </>
)
}

export default NavBar