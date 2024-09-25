import React, { useState } from 'react';
import { HiMiniHome } from "react-icons/hi2";
import { FaBell, FaUserCircle, FaHeart } from "react-icons/fa";
import './verticalbar.css';
import Notifbar from './Notifbar'; // Import the Notifbar component

const VerticalNavbar = () => {
  const [notifbarOpen, setNotifbarOpen] = useState(false);

  const handleNotifbarToggle = () => {
    setNotifbarOpen(!notifbarOpen);
  };
  return (
    <>
      <nav className="vertical-navbar">
        <div className="navbar-logo">
          <span className="logo-text">
            Project<span className="logo-purple">Up</span>
          </span>
        </div>
        <div className="navbar-links">
          <a href="/home" className="navbar-link">
            <HiMiniHome size={25} color="#D3C2F8" />
            <span className="navbar-text">Home</span>
          </a>
          <a href="/saved" className="navbar-link">
            <FaHeart size={25} color="#D3C2F8" />
            <span className="navbar-text">Saved</span>
            
          </a>
          <a href="/postings" className="navbar-link">
            <FaUserCircle size={25} color="#D3C2F8" />
            <span className="navbar-text">Profile</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default VerticalNavbar;
