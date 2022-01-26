import React from 'react';
import './Escena.css'


export default function Escena(props) {
    const { name } = props;
    return (
      <p>{name}</p>
    );
  }