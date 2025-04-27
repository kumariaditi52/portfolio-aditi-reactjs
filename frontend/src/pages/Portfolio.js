import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'project1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with user authentication and real-time updates.',
      technologies: ['React', 'Firebase', 'Material UI'],
      image: 'project2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'project3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information.',
      technologies: ['React', 'Weather API', 'CSS'],
      image: 'project4.jpg',
      link: '#'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Replace with actual image */}
              <div className="image-placeholder"></div>
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;