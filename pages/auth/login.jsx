import styled from "styled-components";
import ContainerLogin from "@/components/shared/Containers/ContainerLogin";

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
      <ContainerLogin />
    </MainContainer>
  );
};
export default Login;
