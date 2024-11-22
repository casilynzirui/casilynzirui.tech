// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css' 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* The Navbar will be rendered globally */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;