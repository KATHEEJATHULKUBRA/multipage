import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  return (

    <nav className="navbar">
      <div className="logo">
        <img src='/logo1.png'/>
      </div>
      <ul className={isMobile ? 'nav-links mobile' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>


  );
}

export default Navbar;



