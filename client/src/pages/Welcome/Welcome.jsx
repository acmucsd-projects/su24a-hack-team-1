import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

function Welcome() {
  const navigate = useNavigate();
  return (
    <>
      <div id="main">
        <div id="hero">
          <div id="nav">
            <a href="#">Project<span className="text-purple">Up</span></a>
            <p>About Us<i className="ri-arrow-down-s-line"></i></p>
          </div>
          <div className="left">
            <div id="header">
              <h1>Discover A Community</h1>
              <div id="blocktext">
                <h1 id="header2">Through <span className="text-purple">Projects</span>.</h1>
              </div>
              <div className="buttons">
                <button id="btn-sign-up" onClick={() => navigate('/signup')}>Sign up</button>
                <button id="btn-log-in" onClick={() => navigate('/login')}>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;