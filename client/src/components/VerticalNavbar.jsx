import React from 'react';
import { HiMiniHome } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import './verticalbar.css';

const VerticalNavbar = () => {
  return (
    <nav className="vertical-navbar">
      <div className="navbar-logo">
      <span className="logo-text">
          Project<span className="logo-purple">Up</span>
        </span>
      </div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">
          <HiMiniHome size={25} color="#D3C2F8" />
          <span className="navbar-text">Home</span>
        </a>
        <a href="#notifications" className="navbar-link">
          <FaBell size={25} color="#D3C2F8" />
          <span className="navbar-text">Notifications</span>
        </a>
        <a href="#profile" className="navbar-link">
          <FaUserCircle size={25} color="#D3C2F8" />
          <span className="navbar-text">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default VerticalNavbar;
