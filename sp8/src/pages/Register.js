import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
      <div>
        <p>
          <Link className='link' to='/'>Please, Login or Sing up to continue.</Link>
        </p>
      </div>
    );
  }

export default Register; 