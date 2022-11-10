import LoginModal from "components/Login/LoginModal";
import styled from "styled-components";

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
      <LoginModal />
    </MainContainer>
  );
};
export default test;
