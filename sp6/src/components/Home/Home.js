import React from 'react';
import {StyledHome, Button} from './style'


const Home = ({setWelcome}) => {

    return (
        <StyledHome>
            <h1>Bienvenido</h1>
            <h2>Pulsa el boton para comenzar el tutorial</h2>
            <Button onClick={() => setWelcome(false)}>Entrar</Button>
        </StyledHome>
    );

}

export {Home};