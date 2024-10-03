import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';
import { motion } from "framer-motion"



function Welcome() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route); // Navigate to the Login page
  };

  return (
    <>
    <section>
        <div id="main">
          <div id="hero">
            <div className="left">
              <div id="header">
                <h1>Discover A Community</h1>
                <div id="blocktext">
                  <h1 id="header2">Through <span className="text-purple">Projects</span>.</h1>
                </div>
                <div className="buttons">
                  <button id="btn-sign-up" onClick={() => handleClick('/Signup')}>Sign up</button>
                  <button id="btn-log-in" onClick={() => handleClick('/Login')}>Log in</button>
                </div>
              </div>
            </div>
            
            <div id="hero-footer">
              <motion.div whileHover={{ scale: 1.1 }}>
              <a href="#about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                <i className="ri-arrow-down-s-line"></i>
              </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id='about-us'>
        <div id="about-page">
          <h1>Meet Our Team</h1>
          <div className="cards-container">
            <div className="card">
              <img src="https://www.collaborative.org/wp-content/uploads/2022/11/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="Person 1" className="person-image" />
              <p className="caption">Shamita Goyal</p>
            </div>
            <div className="card">
              <img src="https://www.collaborative.org/wp-content/uploads/2022/11/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="Person 2" className="person-image" />
              <p className="caption">Carl Casares</p>
            </div>
            <div className="card">
              <img src="https://www.collaborative.org/wp-content/uploads/2022/11/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="Person 3" className="person-image" />
              <p className="caption">Jason Wang</p>
            </div>
            <div className="card">
              <img src="https://www.collaborative.org/wp-content/uploads/2022/11/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="Person 4" className="person-image" />
              <p className="caption">Osheen Tikku</p>
            </div>
            <div className="card">
              <img src="https://www.collaborative.org/wp-content/uploads/2022/11/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="Person 5" className="person-image" />
              <p className="caption">Jared Mendez</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;