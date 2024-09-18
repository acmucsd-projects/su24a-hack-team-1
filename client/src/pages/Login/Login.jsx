import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import "./login.css"
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // Make a request to your server to "login"
    e.preventDefault()
    try {
      console.log('email:', email);
      const response = await axios.post('http://localhost:3001/api/login', {email
      });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('userEmail', email);
        // Redirect user to the home page on successful login
        navigate('/Postings');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
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
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

