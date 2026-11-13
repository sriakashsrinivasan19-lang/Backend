import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className="bg-black p-3 text-white flex justify-between ">
        <div className="mx-15">Logo</div>
        <div className="flex gap-20 mx-30">
            <Link to='/'>ArrayProcess</Link>
            <Link to='/object'>ObjectProcess</Link>
        </div>
    </div>
    </>

)
}

export default NavBar