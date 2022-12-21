import styled from "styled-components";
import Button1 from "@/shared/Button/Button1"
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
    <Button1>
      India
    </Button1>
  </MainContainer>;
};
export default Test3;
