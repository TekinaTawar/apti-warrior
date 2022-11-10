import styled from "styled-components";
import LoginModal from "components/Login/LoginModal";

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

const login = () => {
  return (
    <MainContainer>
      <LoginModal />
    </MainContainer>
  );
};
export default login;