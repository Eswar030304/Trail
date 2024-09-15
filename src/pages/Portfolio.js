// src/pages/Portfolio.js
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio-container" id="portfolio">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="portfolio-item">
        <h2 className="portfolio-item-title">Project Title</h2>
        <p className="portfolio-item-description">A brief description of the project.</p>
      </div>
      <div className="portfolio-item">
        <h2 className="portfolio-item-title">Project Title</h2>
        <p className="portfolio-item-description">A brief description of the project.</p>
      </div>
      {/* Add more portfolio items as needed */}
    </section>
  );
}

export default Portfolio;
