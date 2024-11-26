import React from 'react';
import './Project.css';
import ProjectCard from '../components/ProjectCard';
import ProjectElement from '../components/ProjectElement'; // Import data file

const Projects = () => {
  return (
    <div id="projects" className="project-container">
    <p className="project-title">My Projects</p>
    <div className="project-grid">
      {ProjectElement.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
    </div>
  );
};

export default Projects;