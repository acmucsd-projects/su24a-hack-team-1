import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import VerticalNavbar from "../../components/VerticalNavbar"
import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BiImageAdd, BiVerticalCenter } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaRegSquareMinus } from "react-icons/fa6";




const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(''); // Navigate to the Login page
  };
  return (

    

<div>
  <VerticalNavbar />
  <div className="left">
    <h2>
      <FaUserCircle size={30} style={{paddingTop:"8px"}}></FaUserCircle>
      First Name, Last Name -Location
    </h2>
  </div>
  <div class="wrapper">
    <div class="box" id="box1" style={{backgroundColor:"#E3E8EC"}}>
      <BiImageAdd className='image'></BiImageAdd>
    </div>
    <div>
    <div class="box" id="box2" style={{backgroundColor:"#E3E8EC"}}>Activity Name</div>
    <p className="testing-text">Culpa ex id exercitation cillum sunt consectetur occaecat veniam anim pariatur. Non fugiat aliquip ex ad ea aute elit dolore cillum deserunt sint sint. Fugiat occaecat amet qui qui fugiat proident do. Lorem pariatur occaecat irure officia eu cupidatat. Lorem sit labore minim mollit in commodo quis adipisicing est do in aute laborum. Elit labore in Lorem dolore ullamco magna nisi fugiat tempor. Ex cillum eiusmod cupidatat id aliqua irure ut esse consectetur.</p>
    </div>
      {/* <div class="text-box">
        <h3>Activity Name</h3>
        <p>something something</p>
      </div>
      */}
  </div>
  <div className="buttons">
    <button id="btn-yes" onClick={handleClick}>
      <FaRegCheckSquare className='check-yes' size={55}style={{ paddingTop: "0px"}}></FaRegCheckSquare>
    </button>
    <button id="btn-no" onClick={handleClick}>
      <FaRegSquareMinus className='check-no' size={55}></FaRegSquareMinus>
    </button>
  </div>
  <div className='bottom-button'>
        <button id='activity-btn'>
            <IoIosAdd></IoIosAdd>
            New Post
        </button>
  </div>
</div>
    );
}
export default Homepage;