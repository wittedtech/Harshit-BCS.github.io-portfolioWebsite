import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
          name: "ITMS (Integrated Terminal Management System)",
          description: "Web App built to manage the logistics and data warehousing domain work of Domestic and Exim Terminals for CONCOR using Java, Spring Micro-Services, Oracle DB, JavaScript, TypeScript, JQuery, and Thymeleaf. Optimized data and forms to better the user experience as well, keeping only the required data exposed to the user according to their roles and authorization.",
          technologies: ["Java", "Spring", "Oracle DB", "JavaScript", "TypeScript", "JQuery", "Thymeleaf"]
        },
        {
          name: "Fudoo",
          description: "Built an online food ordering system using Java and Spring micro-services. Used Java, Postgres, React, and JavaScript to make this Web App work smoother and fully functional.",
          technologies: ["Java", "Spring", "Postgres", "React", "JavaScript"]
        },
        {
          name: "Portfolio",
          description: "Built a Portfolio Web App using Spring micro-service architecture; to showcase and improve my skills of Java, React, JavaScript, JQuery, CSS, and MySql.",
          technologies: ["Java", "Spring", "React", "JavaScript", "JQuery", "CSS", "MySql"]
        }
        // Add more projects as needed
      ];
    
      return (
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  <strong>Technologies:</strong>
                  <ul>
                    {project.technologies.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Projects;