import { TfiMenu } from "react-icons/tfi";
import { GiTireIronCross } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import React, { useState } from 'react';
import "./navbar.css"
import Dark from "../darkmode/Darkmode"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="nav-section" >
      <div className="nav-container width85">
        <div className="navbar-brand">Abhishek</div>

        {/* Nav Links for Desktop */}
        
        <div className="darkmode">
          <Dark />
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-btn">Home</a>
          <a href="#resume" className="nav-btn">Resume</a>
          <a href="#about" className="nav-btn">About</a>
          <a href="#contact" className="nav-btn">Contact</a>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
        <TfiMenu size={25}/>
        </div>

        <div className={`overlay-menu ${menuOpen ? 'active' : ''}`}>

        <div className="close-btn" onClick={closeMenu}>
        <RxCrossCircled />
        </div>

        <a href="#home" className="nav-btn" onClick={closeMenu}>Home</a>
        <a href="#resume" className="nav-btn" onClick={closeMenu}>Resume</a>
        <a href="#about" className="nav-btn" onClick={closeMenu}> About</a>
        <a href="#contact" className="nav-btn" onClick={closeMenu}>Contact</a>
        </div>
       
      </div>
    </section>
  );
};

export default Navbar;



