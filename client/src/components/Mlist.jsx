import React from 'react';
import './verticalbar.css';

const Mlist = () => {
  return (
    <nav className="vertical-navbar">
      <div className="navbar-logo">
      <span className="logo-text">
          Project<span className="logo-purple">Up</span>
        </span>
      </div>
      <div className="navbar-links">
        <a href="#name" className="navbar-link">
          <span className="navbar-text">1. Name</span>
        </a>
        <a href="#resume-upload" className="navbar-link">
          <span className="navbar-text">2. Resume Upload</span>
        </a>
        <a href="#website" className="navbar-link">
          <span className="navbar-text">3. Website</span>
        </a>
        <a href="#bio" className="navbar-link">
          <span className="navbar-text">4. Bio/Interests</span>
        </a>
      </div>
    </nav>
  );
};

export default Mlist;
