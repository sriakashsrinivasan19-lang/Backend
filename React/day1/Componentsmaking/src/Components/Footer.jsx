import footer from '../assets/logo/logo1.svg'

const Footer = () => {
  return (
    <>
    <div className='bg-black text-white '>
        <div className='flex justify-between h-20 items-center mx-20'>
               <img src={footer} alt="" width={170}/>
        <p>© 2026 KRAFTON, Inc. All rights reserved.</p>
        </div>
     
    </div>
    </>
  )
}

export default Footer