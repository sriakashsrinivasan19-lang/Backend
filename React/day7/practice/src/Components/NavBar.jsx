import { Link } from "react-router-dom"

const NavBar = () => {
  return (

    <>
    
    <div className="bg-black text-white flex justify-between items-center h-15">
        <div className="mx-15">Logo</div>
        <div className="mx-15 flex gap-15">
            <Link to="/">ProductList</Link>
             <Link to="/develop">Develop</Link>
             <Link to="/update">Update</Link>

        </div>
    </div>

    </>

)
}

export default NavBar