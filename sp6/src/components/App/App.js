import React,{ useEffect, useState } from 'react';
import {Escena} from "../Escena/Escena";
import {Home} from "../Home/Home";
import {story} from './data';
import {StyledWrapper} from './style'
import bg0 from '../../images/1.jpg'
import bg1 from '../../images/2.jpg'
import bg2 from '../../images/3.jpg'
import bg3 from '../../images/4.jpg'


function App() {
  
  let [count, setCount] = useState(0);
  let [background, setBackground] = useState(bg0);
  let [welcome, setWelcome] = useState(true);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  useEffect(() => {
    const bg = {
      0: bg0,
      1: bg1,
      2: bg2,
      3: bg3,
    }
    setBackground(bg[count]);
  },[count]);

  if(count < 0){
    count = 0;
  } if(count > 3){
    count = 3;
  }

  if(welcome){
    return (
     <Home setWelcome={setWelcome}></Home>
    );
  } else {
    return (
      <StyledWrapper bg={background} className="wrapper">
        <Escena count={count} increase={increase} decrease={decrease} story={story}></Escena>
      </StyledWrapper>
    );
  }

}

export default App;
