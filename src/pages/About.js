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
                <p className="about-title">안녕</p>
                <p className="about-description">
                    <p>
                        My journey into tech began after completing my diploma, where I transitioned into computer science and discovered a strong passion for creating innovative, user-centered digital solutions. 
                        Currently working on mobile and web development, combining technical expertise with UX design to create seamless, intuitive experiences that bridge the gap between technology and user needs.
                    </p>
                    <br></br>
                    <p>
                        Beyond programming, I'm a dedicated pool player and take satisfaction in the challenge of occasional bouldering sessions. 
                    </p>
                    <br></br>
                    <p>
                        Let's connect!
                    </p>
                    <br></br>
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
