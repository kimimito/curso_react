import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import './Escena.css'

const StyledStory = styled.div`
  border: 1px solid #000;
  border-radius: 50px;
  text-align: center;
  margin: 20px;
  padding: 0 20px;
  background-color: ${props => props.isSelected ? 'pink' : 'white'};
`;

const Button = styled.button`
  width: 50%;
  height: 50px;
  text-align: center;
`;

const Escena =({props}) => {

  let [count, setCount] = useState(0);

  if(count < 0){
    count = 0;
  } if(count > 3){
    count = 3;
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  }, [count]);

  
  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>
        Anterior
      </Button>
      <Button onClick={() => setCount(count + 1)}>
        Següent
      </Button>

      {props.map((item, index) => {
        return <StyledStory key={`story-${index}`} isSelected={index === count}><p>{item}</p></StyledStory>
      })}
    </div>
  );
}




export {Escena};