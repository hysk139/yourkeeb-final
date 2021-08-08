import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const HomeHeroComp = () => {

  function scrollWin() {
    window.scrollTo(0, 0); 
  }

  return (
    <>
      <div className = "bg-home">
        <div className="home-hero-comp">
          <div className = "home-hero-text">
            <h2 className = "details-of-homehero">Welcome to Yourkeeb</h2>
            <p className="details-of-homehero">A place to strive on your</p>
            <p className="details-of-homehero">keyboard hobbies</p>
          </div>
          <li><Link to="/product"><button type="button" className="button-products">See Products</button></Link></li>
        </div>
      </div>
    </>

  )
}

export default HomeHeroComp;