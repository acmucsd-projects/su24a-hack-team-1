import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login';
import Postings from './pages/Postings/Postings';
import Navbar from './pages/Navbar/Navbar';
import Profbar from './pages/Profbar/Profbar';


const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element = {<Welcome />} />
      <Route path="/Login" exact element = {<Login/>} />
      <Route path="/Postings" exact element = {<Postings/>} />
      <Route path="/Navbar" exact element = {<Navbar/>} />
      <Route path="/Profbar" exact element = {<Profbar/>} />
    </Routes>
  </Router>
);

function App() {
  return (
  <div>{routes}</div>
  )
}

export default App