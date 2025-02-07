import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Hospitality Management System',
      description: 'A web application for managing hotel bookings, reservations, and customer data.',
      technologies: ['React JS', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Banking Portal',
      description: 'A secure online banking portal for managing accounts, transactions, and payments.',
      technologies: ['React JS', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Healthcare App',
      description: 'A patient management system for hospitals and clinics.',
      technologies: ['React JS', 'Redux', 'Firebase'],
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;