import React from 'react';
import './profvnavbar.css';

const ProfVNavbar = () => {
  return (
    <nav className="prof-vertical-navbar">
      <div className="prof-navbar-logo">
      <span className="prof-logo-text">
          Project<span className="prof-logo-purple">Up</span>
        </span>
      </div>
      <div className="prof-navbar-links">
        <a href="#name" className="prof-navbar-link">
          <span className="prof-navbar-text">1. Name</span>
        </a>
        <a href="#resume" className="prof-navbar-link">
          <span className="prof-navbar-text">2. Resume</span>
        </a>
        <a href="#website" className="prof-navbar-link">
          <span className="prof-navbar-text">3. Website</span>
        </a>
        <a href="#bio" className="prof-navbar-link">
          <span className="prof-navbar-text">4. Bio/Interests</span>
        </a>
        <a href="#profilePic" className="prof-navbar-link">
          <span className="prof-navbar-text">5. Profile Picture</span>
        </a>
      </div>
    </nav>
  );
};

export default ProfVNavbar;
