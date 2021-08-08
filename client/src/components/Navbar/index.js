import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'





const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [Navbar, setNavbar] = useState(true);

  function scrollWin() {
    window.scrollTo(0, 0); 
  }

  
  const changeBackground = () => {
    if (window.scrollY>=120)
    {
      setNavbar(false);
    }else {
      setNavbar(true);
    }
  }

  const changeShowLinks = () => {
    if (window.innerWidth >= 1200)
    {
        setShowLinks(false);
    }
  }
  window.addEventListener('resize', changeShowLinks)
  window.addEventListener('scroll', changeBackground)
  

  return(
    <div className= "topNav" id = {Navbar ? "" : "scroll"}>
      <div className = "buttons" id = {showLinks ? "hidden" : ""}>
        <button><Link className ="links" id ="name" onClick={scrollWin}>yourkeeb</Link></button>
        <button><Link className ="links" to="/" onClick={scrollWin}>Home</Link></button>
        <button><Link className ="links" to="/product" onClick={scrollWin}>Product</Link></button>
        <button><Link className ="links" to="/info" onClick={scrollWin}>Info</Link></button>
        <button><Link className ="links" to="/edit" onClick={scrollWin}>Edit</Link></button>
      </div>

      <button  className = "clickmedaddy" onClick={()=> setShowLinks(!showLinks)} >
        {showLinks ? <span className = "closebutton"><GrClose/></span>  :  <span className = "burgerbutton"><GiHamburgerMenu/></span>}
      </button>
    </div>
  ) 
}

export default Header;