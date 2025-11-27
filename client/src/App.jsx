import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Profile from './pages/Profile/Profile';
import Postings from './pages/Postings/Postings';
import Newpost from './pages/NewPost/NewPost';
import TopNavBar from './components/TopNavBar';
import FontFaceObserver from 'fontfaceobserver';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import Upload from './pages/Upload/upload';
import Saved from './pages/Saved/Saved';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define the routes where you want to display the TopNavBar
  const withTopNavBar = ["/", "/Login", "/Signup"];

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
      {/* Conditionally render TopNavBar */}
      {withTopNavBar.includes(currentPath) && <TopNavBar />}

      <AnimatePresence mode="wait">
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
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Postings" element={<Postings />} />
            <Route path="/Newpost" element={<Newpost />} />
            <Route path='/Home' element={<Homepage />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/Saved" element={<Saved />} />
          </Routes>
        </motion.div>
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
