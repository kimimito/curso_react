import React from 'react';
import {StyledStory,Button} from './style'


const Escena =({story, decrease, increase, count}) => {

  return (
    <div>
      <Button onClick={decrease}>
        Anterior
      </Button>
      <Button onClick={increase}>
        Següent
      </Button>

      {story.map((item, index) => {
        return <StyledStory key={`story-${index}`} isSelected={index === count}><p>{item}</p></StyledStory>
      })}
    </div>
  );
}

export {Escena};