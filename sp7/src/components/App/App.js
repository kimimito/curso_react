import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home'
import Budget from '../../pages/Budget'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/budget" element={<Budget />} />
      </Routes>
    </div>
  );
}

export default App;
