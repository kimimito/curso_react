import React from 'react';
import styled from 'styled-components';
import './Escena.css'

const StyledHistory = styled.div`
  border: 1px solid #000;
  border-radius: 50px;
  text-align: center;
  margin: 20px;
`;


export default function Escena({ props }) {
  return (
    <StyledHistory><p>{props}</p></StyledHistory>
  );
}

  