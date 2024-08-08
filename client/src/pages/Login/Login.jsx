import React from 'react'
import "./login.css"
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <>
      <div id="main">
        <div id="hero">
          <div id="nav">
            <a href="#">Project<span className="text-purple">Up</span></a>
            <p>About Us<i className="ri-arrow-down-s-line"></i></p>
          </div>
          <div className="center">
            <div id="header">
              <h1>Plan, Post, & Produce </h1>
              <div id="blocktext">
                <h1 id="header2"><span className="text-p">Projects</span>.</h1>
                <h2 id="header3"><span className="desc">Disocover Your Community Now.</span></h2>
              </div>
              <div className="bttns">
                <button id="btn-cont"><i class="fa-brands fa-google"></i>Continue with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login

