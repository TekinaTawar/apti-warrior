import styled from "styled-components";
import LoginModal from "@/components/login/LoginModal";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <MainContainer>
      <LoginModal />
    </MainContainer>
  );
};
export default Login;
