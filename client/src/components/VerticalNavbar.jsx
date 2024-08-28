import React, { useState } from 'react';
import { HiMiniHome } from "react-icons/hi2";
import { FaBell, FaUserCircle } from "react-icons/fa";
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
          <a href="#home" className="navbar-link">
            <HiMiniHome size={25} color="#D3C2F8" />
            <span className="navbar-text">Home</span>
          </a>
          <a href="#notifications" className="navbar-link" onClick={handleNotifbarToggle}>
            <FaBell size={25} color="#D3C2F8" />
            <span className="navbar-text">Notifications</span>
          </a>
          <a href="#profile" className="navbar-link">
            <FaUserCircle size={25} color="#D3C2F8" />
            <span className="navbar-text">Profile</span>
          </a>
        </div>
      </nav>
      <Notifbar isOpen={notifbarOpen} onClose={() => setNotifbarOpen(false)} />
    </>
  );
};

export default VerticalNavbar;
