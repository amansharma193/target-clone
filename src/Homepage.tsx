import React from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Navbar from './Navbar'
import NavbarFixed from './NavbarFixed'
import Offer from './Offer'
import SmartSolutions from './SmartSolutions'

const Homepage = () => {
  return (
    <div>
        <NavbarFixed />
        <div id='pageContainer'>
          <div>
            <Offer />
            <SmartSolutions />
            <Categories />
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default Homepage