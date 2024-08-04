import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login';
import Postings from './pages/Postings/Postings';
import Navbar from './pages/Navbar/Navbar';

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element = {<Welcome />} />
      <Route path="/Login" exact element = {<Login/>} />
      <Route path="/Postings" exact element = {<Postings/>} />
      <Route path="/Navbar" exact element = {<Navbar/>} />
    </Routes>
  </Router>
);

function App() {
  return (
  <div>{routes}</div>
  )
}

export default App