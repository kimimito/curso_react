import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import './app.scss';
import Home from '../../pages/Home';
import StarShips from '../../pages/StarShips';
import StarShipsDetail from '../../pages/StarShipsDetail';
import NotFound from '../../pages/NotFound';
import logo from '../../images/logo.png';
import {Login} from '../Login/Login';

function App() {

  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={logo} className='logo' alt='logo' />
        <Login />
      </div>
      <div className='header-nav'>
        <NavLink to='/' label='Home'>Home</NavLink>
        <NavLink to='/StarShips' label='StarShips'>StarShips</NavLink>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/StarShips' element={<StarShips />} />
        <Route exact path='/StarShips/Detail' element={<StarShipsDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
