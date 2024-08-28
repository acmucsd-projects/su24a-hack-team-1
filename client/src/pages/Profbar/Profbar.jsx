import React from "react";
import Mlist from "../../components/Mlist";
import ProfVNavBar from "../../components/ProfVNavBar";
import "./profbar.css"


function Profbar() {
  return (
    <>
      <div className="ProfApp">
      <ProfVNavBar />
        {/* Main content */}
        <div className="main">
          <h1>Welcome to My App</h1>
          {/* Other components and content */}
        </div>
      </div>

    </>
  )
}

export default Profbar;
