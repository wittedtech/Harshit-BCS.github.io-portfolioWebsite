import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
      <h2>Welcome to My Portfolio</h2>
      <div className="card-container">
        <div className="card left">
          <div className="content">
            <h3>About Me</h3>
            <p>Description about yourself...</p>
          </div>
          <Link to="/about" className="link-button">Go to About Me</Link>
        </div>
        <div className="card right">
          <Link to="/projects" className="link-button">Go to Projects</Link>
          <div className="content">
            <h3>Projects</h3>
            <p>Description about projects...</p>
          </div>
        </div>
        <div className="card left">
          <div className="content">
            <h3>Services</h3>
            <p>Description about services...</p>
          </div>
          <Link to="/services" className="link-button">Go to Services</Link>
        </div>
        <div className="card right">
          <Link to="/experience" className="link-button">Go to Experience</Link>
          <div className="content">
            <h3>Experience</h3>
            <p>Description about experience...</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
      );
};

export default Home;