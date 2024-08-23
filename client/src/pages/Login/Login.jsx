import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { FcGoogle } from "react-icons/fc";
import useFetch from "../../hooks/useFetch";

function Login() {
    const [userInfo, setUserInfo] = useState(null);
    const url = process.env.REACT_APP_BACKEND_URL;
    const { handleGoogle, loading, error } = useFetch(url);
    const navigate = useNavigate();

    const handleGoogleCallback = (response) => {
        handleGoogle(response).then(user => {
            setUserInfo(user);
            localStorage.setItem('user', JSON.stringify(user));
        }).catch(err => console.error('Authentication Error:', err));
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        console.log(storedUser);
        if (storedUser) {
            setUserInfo(storedUser);  // Set user info if already logged in
        }
    }, []);

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleGoogleCallback,
        });

        google.accounts.id.renderButton(document.getElementById("loginDiv"), {
            theme: "filled_black",
            text: "signin_with",
            shape: "pill",
        });
    }, [handleGoogleCallback]);

    

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('user'); 
        setUserInfo(null); 
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
              {/* <button id="btn-cont" onClick={handleClick}>
                <FcGoogle style={{ paddingTop: "4px", marginRight: '8px' }} /> Continue with Google
              </button> */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!userInfo ? (<div id="loginDiv">Loading....</div>) : (
                    <div>
                        <p>Welcome, {userInfo.name}</p>
                        <button id="btn-cont" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

export default Login

