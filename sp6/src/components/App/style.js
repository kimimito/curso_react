import styled from 'styled-components';


const StyledWrapper = styled.div`
background-image: ${props => props.bg ? `url(${props.bg})` : 'white'};
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
`;

export {StyledWrapper};
