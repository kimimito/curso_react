import styled from 'styled-components';

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

export {StyledStory,Button};