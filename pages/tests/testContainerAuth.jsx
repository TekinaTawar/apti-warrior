import styled from "styled-components";
import ContainerAuth from "@/components/shared/Containers/ContainerAuth"

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestContainerAuth = () => {
  return <MainContainer>
    <ContainerAuth />
  </MainContainer>;
};
export default TestContainerAuth;
