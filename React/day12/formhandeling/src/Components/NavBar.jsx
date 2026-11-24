import { Link } from "react-router-dom"

const NavBar = () => {
 return(
    <>
    <div className="bg-black text-white p-3 flex justify-between items-center">
        <div className="mx-15">Logo</div>
        <div className="flex gap-20 mx-15">
            <Link to="/">FormValidation</Link>
            <Link to="/stable">StableID</Link>
        </div>
    </div>
    
    </>
 )
}

export default NavBar