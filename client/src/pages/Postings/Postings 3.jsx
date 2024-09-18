import React from 'react';
import './postings.css';

function Postings() {
    return (
      <>
        <div id="main">
          <div id="hero">
            <div id="nav">
            </div>
            <div className="left">
              <div id="header">

                <div className="buttons">
                  <button id="btn-edit">Edit Profile</button>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
              <div class="container">
                <div class="box" id="box1">Post 1</div>
                <div class="box" id="box2">Post 2</div>
                <div class="box" id="box3">Post 3</div>
                <div class="box" id="box4">Post 4</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Postings;