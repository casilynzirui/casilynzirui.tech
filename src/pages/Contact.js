import React from 'react';
import './Contact.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';


const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-detail-container">
                <div className="contact-info-container">
                    <p className="contact-title">Get In Touch</p>
                    <p className="contact-detail">
                        I'm currently seeking full-time opportunities to contribute my skills and grow in a dynamic and innovative environment. 
                        While I specialize in mobile and web development, I'm versatile and open to exploring roles in various fields.
                    </p>
                    <br></br>
                    <p className="contact-detail">
                        Let's chat 👉🏻 <a href="mailto:casilynzirui@gmail.com" className='contact-link'>casilynzirui@gmail.com</a>
                    </p>
                </div>
                <div className="contact-link-container">
                    <p className="contact-link-title">
                        Follow Casilyn
                    </p>
                    <div class="separation-line"></div>
                    <div class="contact-icon-container">
                        <a href="https://www.linkedin.com/in/casilynzirui" target="_blank">
                            <img src={linkedin} alt="LinkedIn" className="contact-icon" />
                        </a>
                        <a href="https://github.com/casilynzirui" target="_blank">
                            <img src={github} alt="GitHub" className="contact-icon" />
                        </a>
                    </div>

             
                </div>
            </div>
            



        </div>
    );
};

export default Contact;