import React from 'react';
import './About.css';
import me from '../assets/me.jpg';


const About = () => {
    return (
        <section id="about" className="about-container">

            <div className="photo-container">
            <img src={me} className="photo-me" />

            </div>
            <div className="about-block">
                <p className="about-title">About me</p>
                <p className="about-description">
                    <p>
                        I’m a Computer Science graduate specializing in mobile and web development. 
                        My journey into tech began after my diploma, where I ventured down a new path and developed a passion for creating innovative digital solutions.
                    </p>
                    <p>
                        Beyond programming, I'm a competitive pool player and enjoy occasional bouldering sessions for a challenging fun. 
                    </p>
                    <p>
                        Let's connect!
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/casilynzirui" target="_blank" rel="noopener noreferrer">
                            <button className="linkedin-button">LinkedIn</button>
                        </a>
                    </p>
                </p>

            </div>
      </section>
        
    );
};

export default About;
