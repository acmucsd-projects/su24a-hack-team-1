import React from "react";
import VerticalNavbar from "../../components/VerticalNavbar";
import "./navbar.css"


function Navbar() {
  return (
    <>
      <div className="App">
        <VerticalNavbar />
        {/* Main content */}
        <div className="main-content">
          <h1>Welcome to My App</h1>
          {/* Other components and content */}
        </div>
      </div>

    </>
  )
}

export default Navbar
