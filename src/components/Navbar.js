// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false); // Initialize state

  return (
    <nav className="navbar">
      <div className="top-bar"></div>
      <div className="header-bar">
        <h1 className="logo">
          <Link to="/" className="name">Casilynzirui</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
          <li>
            <Link to="/experiences" className="link">Experience</Link>
          </li>
          <li>
            <Link to="/projects" className="link">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li>
            <div
                className={`resume-link ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  window.location.href = '/resume';
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
