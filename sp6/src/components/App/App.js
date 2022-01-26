import React from 'react';
import './App.css';


import {History} from './data';
import Escena from "../Escena/Escena";

function App() {
  return (
    <div className="wrapper">
      {History.map(txt => (
        <Escena 
        key={txt.txt}
        name={txt.txt}
        />
      ))}
    </div>
  );
}

export default App;
