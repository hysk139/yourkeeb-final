import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const HomeBody = () => {
  return (
    <>
      <div className = "bg-homebody">
        <div className="home-body-comp">
          <div className = "home-body-text">
            <h2 className = "title-of-homebody">Layouts and Brands</h2>
            <p className="details-of-homebody">See more info about available</p>
            <p className="details-of-homebody">keyboard layouts and brands</p>
          </div>
          <li><Link to="/info"><button type="button" className="button-products">More Info</button></Link></li>
        </div>
      </div>
    </>

  )
}

export default HomeBody;