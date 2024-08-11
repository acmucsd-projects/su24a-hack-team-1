import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useState } from 'react';
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Postings from './pages/Postings/Postings';
import Navbar from './pages/Navbar/Navbar';
import Profbar from './pages/Profbar/Profbar';


const AppRoutes = ({ user, setUser }) =>(
  <Router>
    <Routes>
      <Route path="/" exact element = {<Welcome />} />
      <Route path="/Login" element = {user ? <Navigate to="/Postings" /> : <Login setUser={setUser}/>} />
      <Route path="/Signup" element = {user ? <Navigate to="/Postings" /> : <Signup setUser={setUser}/>} />
      <Route path="/Postings" element = {user ? <Postings/> : <Navigate to="/Login" />} />
      <Route path="/Navbar" exact element = {<Navbar/>} />
      <Route path="/Profbar" exact element = {<Profbar/>} />
      <Route path="*" element = {<Navigate to="/" />} />
    </Routes>
  </Router>
);

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser && !loggedInUser.includes("undefined")));
    }
  }, []);

  return (
  <div><AppRoutes user={user} setUser={setUser} /></div>
  );
}

export default App