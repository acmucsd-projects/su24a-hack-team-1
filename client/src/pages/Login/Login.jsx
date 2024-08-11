import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();

  // Adjust the navigation target based on your app's routing
  const handleClick = () => {
    navigate('/google'); // Example target; adjust as needed
  };

  return (
    <div id="main-login">
      <div id="hero-login">
        <div className="center-login">
          <div id="header-login">
            <h1>Plan, Post, & Produce</h1>
            <div id="blocktext-header">
              <div id="text-dot">
                <h1 id="header2"><span className="text-p">Projects</span>.</h1>
              </div>
              <h2 id="header3"><span className="desc">Discover Your Community Now.</span></h2>
          </div>
          <div className="bttns-login">
            <button id="btn-cont" onClick={handleClick}>
              <FcGoogle style={{ paddingTop: "4px", marginRight: '8px' }} /> Continue with Google
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
