//import useState from react

import styled from "styled-components";
import IconButton from 'components/shared/IconButton';

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

const test = () => {
  

  return (
    <MainContainer>
      <IconButton/>
    </MainContainer>
  );
};
export default test;
