import {Link} from 'react-router-dom'
const NavBar = () => {
  
  const homePage = 'Home'; 
  const aboutPage = 'About'; 
  const contactPage = 'Contact'; 
  const loginPage = 'Login'; 
  const registerPage = 'Register'; 
  
  
    return (

    <>
    
    <div>
        <div>
            <p>Logo</p>
        </div>
        <div>
            <Link to="/" >{homePage}</Link>
            <Link to="/about" >{aboutPage}</Link>
            <Link to="/contact" >{contactPage}</Link>
            <Link to="/login" >{loginPage}</Link>
            <Link to="/register" >{registerPage}</Link>
        </div>
    </div>
    
    </>

)
}

export default NavBar