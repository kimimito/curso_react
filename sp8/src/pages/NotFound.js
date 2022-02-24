import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <div>
        <h1>Nothing to see here!</h1>
        <p>
          <Link className='link' to='/'>Go to the home page</Link>
        </p>
      </div>
    );
  }

export default NotFound; 