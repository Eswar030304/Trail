// src/pages/Home.js
import React from 'react';
import ProfileImage from '../components/ProfileImage';
import SocialMediaLinks from '../components/SocialMediaLinks';
import './Home.css';

function Home() {
  return (
    <section className="home-container" id="home">
      <ProfileImage alt="Your Name" className="home-profile-image" />
      <h1 className="home-title">Hi, I'm <span>Sai Teja</span> 👋</h1>
      <p className="home-subtitle">I'm a .</p>
      {/*<p className="home-description">Hobbies - Programming & Movies.</p>*/}
      <p className="home-description">From Hyderabad, India🇮🇳.</p>
      <p className="home-description">Software Engineer at Your Company.</p>
      <p className="home-description">your.email@example.com</p>
      <SocialMediaLinks />
      <a href="path/to/your-cv.pdf" className="home-cv-button">
        Download CV
      </a>
    </section>
  );
}

export default Home;
