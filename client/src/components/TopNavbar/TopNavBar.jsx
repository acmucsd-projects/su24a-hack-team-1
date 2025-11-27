import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./topnavbar.css";

function TopNavBar() {
    const navigate = useNavigate();

    const handleScrollToAboutUs = () => {
        const aboutUsSection = document.getElementById("about-us");
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate('/'); // Navigate to the welcome page if not on it
            setTimeout(() => {
                const aboutUsSectionOnHome = document.getElementById("about-us");
                if (aboutUsSectionOnHome) {
                    aboutUsSectionOnHome.scrollIntoView({ behavior: "smooth" });
                }
            }, 575); // Wait for the navigation to complete before scrolling
        }
    };

    return (
        <div id="nav">
           
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Project<span className="text-purple">Up</span>
                </a>
         
            <motion.p
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'pointer', marginLeft: '20px' }}
                onClick={handleScrollToAboutUs}
            >
                About Us<i className="ri-arrow-down-s-line"></i>
            </motion.p>
        </div>
    );
}

export default TopNavBar;