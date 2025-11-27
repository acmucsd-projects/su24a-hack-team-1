import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      if (response.status === 200) {
        const userId = response.data.userId;
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId);
        navigate('/Profile');
      } else {
        setError('Login failed, please try again');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
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
                  aria-label="email"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="password"
                  required
                />
                {loading ? <p>Loading...</p> : <button id='login-but'type="submit">Login</button>}
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
