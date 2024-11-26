// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Router>
            <div>
                <Navbar /> {/* The Navbar will be rendered globally */}

                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />

                <Footer />
                
             </div>
        </Router>
    );
};

export default App;