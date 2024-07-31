import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login';

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element = {<Welcome />} />
      <Route path="/Login" exact element = {<Login/>} />
    </Routes>
  </Router>
);

function App() {
  return (
  <div>{routes}</div>
  )
}

export default App