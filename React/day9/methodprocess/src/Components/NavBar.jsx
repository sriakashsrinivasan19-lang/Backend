import { Link } from "react-router-dom"
const NavBar = () => {
  return (

    <>
    
    <div className="bg-black p-3 text-white flex justify-between ">
        <div className="mx-15">Logo</div>
        <div className="flex gap-8 mx-10">
            <Link to='/'>Arr-display</Link>
            <Link to='/arradd'>Arr-add</Link>
            <Link to='/arrupdate'>Arr-update</Link>
            <Link to='/arrdelete'>Arr-delete</Link>
            <Link to='/objadd'>Obj-add</Link>
            <Link to='/objupdate'>Obj-update&delete</Link>
            <Link to='/arrofobj'>Arr of obj</Link>
            <Link to='/boolean'>Booleantoogle</Link>
            <Link to='/nullish'>Nullish</Link>
            <Link to='/number'>Numbers</Link>
            
        </div>
    </div>
    </>

)
}

export default NavBar