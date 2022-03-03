import React from 'react';
import './scrollText.scss';
import {Login} from '../Login/Login';


function ScrollText() {

  return (
    <div className='main-content'>
        <div className='title-content'>
            <p className='content-header'>Welcome to<br/>Star Wars Universe</p>
            <br/>
            <p className='content-body'>
            The Star Wars API, or 'swapi' (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!
            We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all! Login or register to join.
            </p>
            <p>May the force be with you!...</p>
            <br/>
            <div className='space-button'>
              <Login/>
            </div>
        </div>
    </div>
  );
}

export default ScrollText