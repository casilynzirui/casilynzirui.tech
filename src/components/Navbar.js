// src/Navbar.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navbar.css';
import mochicat from '../assets/mochicat.png';


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false); // Initialize state
  const [isActiveLink, setIsActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setIsActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="top-bar"></div>
      <div className="header-bar">
        <div className="mochicat-container">
          <Link to="home" spy={true} smooth={true} offset={-120} duration={200} className="name">
            <img src={mochicat} className="mochicat" />
          </Link>
        </div>
          
        <ul className="nav-links">
          <li>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={200} className={`link ${isActiveLink === 'experience' ? 'active' : ''}`} >About</Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} offset={0} duration={200} className={`link ${isActiveLink === 'experience' ? 'active' : ''}`}>Experience</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={200} className={`link ${isActiveLink === 'experience' ? 'active' : ''}`}>Projects</Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={200} className={`link ${isActiveLink === 'experience' ? 'active' : ''}`}>Contact</Link>
          </li>
          <li>
            <div
                className={`resume-link ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  window.open('/casilyn-soong.pdf', '_blank');
                }}
              >
                Resume
            </div>          
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
