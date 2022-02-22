import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../../pages/Home';
import StarShips from '../../pages/StarShips';
import HeaderNav from '../HeaderNav/HeaderNav';
import logo from '../../images/logo.png';

function App() {
  return (
    <div className="wrapper">
      <img src={logo} className="logo" alt="logo" />
      <HeaderNav className="header-nav" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/StarShips" element={<StarShips />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link className="link" to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
