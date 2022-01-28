import React from 'react';
//import './App.css';
import {Escena} from "../Escena/Escena";
import {story} from './data';


function App() {
  return (
    <div className="wrapper">
      <Escena props={story}></Escena>
    </div>
  );
}

export default App;
