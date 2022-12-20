import styled from "styled-components";
import Button from "@/shared/Button/Button"
import buttonBorder1 from "@/public/images/buttonBorder1.svg";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test3 = () => {
  return <MainContainer>
    <Button image={buttonBorder1}>
      Pakistan
    </Button>
  </MainContainer>;
};
export default Test3;
