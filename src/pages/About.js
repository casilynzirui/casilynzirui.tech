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
                        I'm a recent Computer Science graduate. I transitioned into tech after completing my diploma in Biomedical Sciences, and discovered a strong passion for creating innovative, user-centered digital solutions. 
                        I'm currently working on mobile and web development, where I combine technical expertise with UX design to create seamless, intuitive experiences that bridge the gap between technology and user needs.
                    </p>
                    <p className="about-description">
                        Beyond programming, I’m a dedicated pool player striving for continuous improvement in my game. I also find joy in building mechanical keyboards, along with occasional bouldering climbs to unwind and enjoy some challenging fun.
                    </p>
                    <p className="about-description">
                        Let's connect!
                        <div className="space-between">
                            <a href="https://www.linkedin.com/in/casilynzirui" target="_blank" rel="noopener noreferrer">
                                <button className="linkedin-button">LinkedIn</button>
                            </a>
                        </div>
                    </p>
                        
            </div>
      </section>
        
    );
};

export default About;
