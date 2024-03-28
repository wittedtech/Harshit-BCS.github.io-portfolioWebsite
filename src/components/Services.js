import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
          name: "Full Stack Web Development",
          description: "Building dynamic and responsive web applications using cutting-edge technologies such as React, Angular, Node.js, and more."
        },
        {
          name: "Custom Web Application Development",
          description: "Designing and developing tailor-made web applications to meet your specific business requirements and objectives."
        },
        {
          name: "API Development",
          description: "Creating robust and scalable APIs to enable seamless communication between different components of your application."
        }
        // Add more services as needed
      ];
    
      return (
        <div className="services-container">
          <h2>Services</h2>
          <div className="service-cards">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Services;