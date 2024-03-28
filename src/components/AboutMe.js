import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <h2>About Me</h2>
      <div className="introduction">
        <p>Welcome to my portfolio! I'm Harshit Singh, a Full Stack Developer with expertise in Java, Spring Boot, and Angular. I'm passionate about crafting scalable solutions and constantly learning to bridge gaps in modern tech stacks and cloud deployments.</p>
      </div>
      <div className="background">
        <h3>Background</h3>
        <p>Bachelor of Computer Science from MGCGV University. Experienced Software Developer with a demonstrated history of working in the logistics and data warehousing domain.</p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <p>Technical: Java, Spring Boot, JavaScript, Angular, Node.js, TypeScript, GraphQL, SQL, Postgres, AWS</p>
        <p>Soft: Leadership, Communication, Problem Solving, Time Management</p>
      </div>
      {/* Optionally, add an Interests section */}
    </div>
  );
};

export default AboutMe;