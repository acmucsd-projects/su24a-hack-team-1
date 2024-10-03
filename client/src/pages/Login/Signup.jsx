import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./signup.css"
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    // Make a request to your server to "signup"
    e.preventDefault();
    try {
      console.log('email:', email, 'password:', password);
      const response = await axios.post('http://localhost:4000/api/signup', { email, password });
      console.log(response.data);
      if (response.status === 201) {
        // Save user email or any other necessary data
        const userId = response.data.userId;
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId);
        // Redirect user to the home page or any other page after successful signup
        navigate('/Upload');
      } else {
        console.error('Signup failed');
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
    <div id="main-signup">
      <div id="hero-signup">
        <div className="center-signup">
          <div id="header-signup">
            <h1>Join Us & Start Posting</h1>
            <div id="blocktext-header-signup">
              <div id="text-dot-signup">
                <h1 id="header2-signup"><span className="text-p">Create</span>.</h1>
              </div>
              <h2 id="header3-signup"><span className="desc">Become Part of Our Community Today.</span></h2>
              <form onSubmit={handleSignup}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button id='signup-but' type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
