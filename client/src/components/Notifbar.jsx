import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './notifbar.css';

const Notifbar = ({ isOpen, onClose }) => {
  return (
    <div className={`notifbar ${isOpen ? 'open' : ''}`}>
      <button className="notifbar-close" onClick={onClose}>
        <FaTimes size={20} color="#fff" />
      </button>
      <div className="notifbar-content">
        <h2>Notifications</h2>
        {/* Add your notifications content here */}
      </div>
    </div>
  );
};

export default Notifbar;