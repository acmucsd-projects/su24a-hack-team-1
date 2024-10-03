import React, { useState } from 'react';
import { HiMiniHome } from "react-icons/hi2";
import { FaBell, FaUserCircle, FaHeart} from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
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
          <a href="/Home" className="navbar-link">
            <HiMiniHome size={25} color="#D3C2F8" />
            <span className="navbar-text">Home</span>
          </a>
          <a href="#notifications" className="navbar-link" onClick={handleNotifbarToggle}>
            <FaBell size={25} color="#D3C2F8" />
            <span className="navbar-text">Notifications</span>
          </a>
          <a href="/Profile" className="navbar-link">
            <FaUserCircle size={25} color="#D3C2F8" />
            <span className="navbar-text">Profile</span>
          </a>
          <a href="/Newpost" className="navbar-link">
            <MdOutlinePostAdd size={25} color="#D3C2F8" />
            <span className="navbar-text">New Post</span>
          </a>
          <a href="/Saved" className="navbar-link">
            <FaHeart size={25} color="#D3C2F8" />
            <span className="navbar-text">Saved</span>
          </a>
        </div>
      </nav>
      <Notifbar isOpen={notifbarOpen} onClose={() => setNotifbarOpen(false)} />
    </>
  );
};

export default VerticalNavbar;
