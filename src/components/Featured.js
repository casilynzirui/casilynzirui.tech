import React from 'react';
import './Featured.css';
import threejs from '../assets/threejs.png';

const Featured = () => {
    return (
        <div className="featured-container">
        <img src={threejs} className="threejs-logo" />
        <p className="description-text">
            Creation underway 
        </p>
        </div>
    );
};

export default Featured;