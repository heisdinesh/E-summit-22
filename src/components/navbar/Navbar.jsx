import React from 'react'

import logo from '../../assets/iedc_logo.png';
import './navbar.css';
const Navbar = () => {
  

  return (<section id="navbar">
   <div className="Navbar">
     <div className="Navbar-Logo">
       <img src={logo} className="Navbar-Logo-Img" alt="iedc_logo" />
     </div>
     <div className="Navbar-Links">
       <p className="Navbar-Links-Item"><a href="#home">HOME</a></p>
       <p className="Navbar-Links-Item"><a href="#about">ABOUT</a></p>
       <p className="Navbar-Links-Item"><a href="#events">EVENTS</a></p>
       <p className="Navbar-Links-Item"><a href="#sponsers">SPONSERS</a></p>
       <p className="Navbar-Links-Item"><a href="#faq">FAQ</a></p>
       <p className="Navbar-Links-Item"><a href="#contact">CONTACT</a></p>

     </div>
     
   </div>
   
   </section>
  )
}

export default Navbar;

