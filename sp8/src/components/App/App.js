import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import './app.scss';
import Home from '../../pages/Home';
import StarShips from '../../pages/StarShips';
import StarShipsDetail from '../../pages/StarShipsDetail';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
import logo from '../../images/logo.png';
import { Login } from '../Login/Login';


function App() {

  const [isAutheticated, setIsAutheticated] = useState(false);

  const setLogin = (authToken) => {
    if (authToken) {
      setIsAutheticated(true);
    }
  }
  
  console.log('isAutheticated',isAutheticated)

  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={logo} className='logo' alt='logo' />
        <Login onChange={setLogin} />
      </div>
      <div className='header-nav'>
        <NavLink to='/' label='Home'>Home</NavLink>
        <NavLink to='/StarShips' label='StarShips'>StarShips</NavLink>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/StarShips' element={isAutheticated ? (<StarShips />) : (<Navigate to="/Register" />)} />
        <Route exact path='/StarShips/Detail' element={<StarShipsDetail />} />
        <Route exact path='/Register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
