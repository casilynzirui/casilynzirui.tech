import React from 'react';
import './Experience.css';
import Timeline from '../components/Timeline';


const Experience = () => {

  const experiences = [
    {
      date: 'Jan 2022 - Present',
      title: 'Software Developer',
      company: 'ABC Tech',
      description: 'Developing mobile and web applications using React and Node.js.'
    },
    {
      date: 'Jun 2020 - Dec 2021',
      title: 'Frontend Developer',
      company: 'XYZ Corp',
      description: 'Built user interfaces with HTML, CSS, and JavaScript for client projects.'
    },
    {
      date: 'Mar 2019 - May 2020',
      title: 'Intern',
      company: 'Tech Solutions',
      description: 'Assisted in developing web applications and testing new features.'
    },
    // Add more experiences as needed
  ];

  return (
    <div id="experience" className="experience-container">
      <p className="experience-title">My Experiences</p>
      <Timeline />
    </div>
  );
};

export default Experience;