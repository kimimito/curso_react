import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <div>
        <h1>Welcome to the dark side, <br/>the force is strong in you, <br/>but we can't find what you're looking for!</h1>
        <p>
          <Link className='link' to='/'>Please, go to the home page.</Link>
        </p>
      </div>
    );
  }

export default NotFound; 