// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mochicat from '../assets/mochicat.png';


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false); // Initialize state

  return (
    <nav className="navbar">
      <div className="top-bar"></div>
      <div className="header-bar">
        <div className="mochicat-container">
          <Link to="/" className="name">
            <img src={mochicat} className="mochicat" />
          </Link>
        </div>
          
        <ul className="nav-links">
          <li>
            <Link to="about" className="link">About</Link>
          </li>
          <li>
            <Link to="experience" className="link">Experience</Link>
          </li>
          <li>
            <Link to="projects" className="link">Projects</Link>
          </li>
          <li>
            <Link to="contact" className="link">Contact</Link>
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
