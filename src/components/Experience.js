import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience-item">
        <p className="job-title">Software Developer</p>
        <p className="company-name">Velocis System Private Ltd, Noida</p>
        <p className="job-details">
          <span>October 2022 - Present</span><br />
          - Developed multiple APIs using Spring Boot and Spring MVC, contributing to enhancing the project 40% more scalable and functional.<br />
          - Applied JavaScript to enhance form functionality and improve user experience.<br />
          - Developed generic APIs that did data manipulation by inserting, updating, and soft deleting data.<br />
          - Contributed to the design and creation of multiple microservices instances, enhancing the project’s modularity and maintainability.<br />
          - Implemented the Captcha Service, Authorization Service, and Mail Service functionalities, enhancing security measures and user authentication processes within the ITMS project.
        </p>
      </div>
      {/* Add more experience items here */}
    </div>
  );
};

export default Experience;