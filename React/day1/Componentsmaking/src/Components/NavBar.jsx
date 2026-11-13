import logo from '../assets/logo/logo.png'
import logo1 from '../assets/logo/logo1.svg'
const NavBar = () => {
  return (
  <>
    <div className='bg-black p-1 h-20 flex justify-between items-center text-white fixed top-0 w-350 shadow-mauve-950'>
        <div className='flex gap-10 mx-5'>
            <img src={logo1} alt="" />
            <img src={logo} alt="" width={80}/>
        </div>
       
        <div className=''>
            
        </div>
        <div className='mx-20 flex gap-15 font-bold'>
            <a href="">Home</a>
            <a href="">News</a>
            <a href="">Esports</a>
            <a href="">Support</a>
            <button className='bg-white w-20 text-black rounded font-serif text-xl'>Login</button>
        </div>
    </div>

  </>
  )
}

export default NavBar