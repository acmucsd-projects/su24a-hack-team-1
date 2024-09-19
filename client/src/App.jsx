import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Profile from './pages/Profile/Profile';
import Postings from './pages/Postings/Postings';
import Navbar from './pages/Navbar/Navbar';
import Profbar from './pages/Profbar/Profbar';
import TopNavBar from './components/TopNavBar';
import FontFaceObserver from 'fontfaceobserver';


function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define the routes where you want to display the TopNavBar and animation
  const withTopNavBar = ["/", "/Login"];
  useEffect(() => {
    const font = new FontFaceObserver('Overused Grotesk');
    
    font.load().then(() => {
      console.log('Overused Grotesk has loaded.');
      document.documentElement.classList.add('font-loaded');
    }).catch(() => {
      console.log('Overused Grotesk failed to load.');
      document.documentElement.classList.add('font-failed');
    });
  }, []);

  return (
    <>
      {withTopNavBar.includes(currentPath) && <TopNavBar />}
      <AnimatePresence>
        {withTopNavBar.includes(currentPath) ? (
          <motion.div
            key={currentPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Welcome />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </motion.div>
        ) : (
          <Routes location={location} key={location.pathname}>
            <Route path="/Postings" element={<Postings />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Profbar" element={<Profbar />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
