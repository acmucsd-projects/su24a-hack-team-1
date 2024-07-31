import React from 'react'
import "./welcome.css"

function Welcome() {
  return (
  <>
      <div id="main">
        <div id="hero">
            <div id="nav">
                <a href="#">Project<span class="text-purple">Up</span></a>
                <p>About Us<i class="ri-arrow-down-s-line"></i></p>
            </div>
            <div class="left">
                <div id="header">
                    <h1>Discover A Community</h1>
                    <div id="blocktext">
                        <h1 id="header2">Through <span class="text-purple">Projects</span>.</h1>
                    </div>
                    <div class="buttons">
                        <button id="btn-sign-up">Sign up</button>
                        <button id="btn-log-in">Log in</button>
                    </div>
            </div>
            </div>
        </div>
    </div>

  </>
  )
}

export default Welcome