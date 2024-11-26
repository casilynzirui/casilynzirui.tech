import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="image" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Learn
          </a>
        )}
      </div>
  </div>
  );
};


export default ProjectCard;