import React from 'react';
import { NavLink } from "react-router-dom";
import './headerNav.scss';


function HeaderNav() {
  
  return (
    <div>
      <div className="header-nav">
        <NavLink to="/" label="Home">Home</NavLink>
        <NavLink to="/StarShips" label="StarShips" >StarShips</NavLink>
      </div>
    </div>
  );
}

export default HeaderNav;