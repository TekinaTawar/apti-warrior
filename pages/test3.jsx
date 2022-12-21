import styled from "styled-components";
import Button1 from "@/shared/Button/Button1";
import ButtonHugging from "@/shared/Button/ButtonHugging";


const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test3 = () => {
  return (
    <MainContainer>
      <Button1>Continue</Button1>
      <Button1 buttonState="disabled">diabled</Button1>
      <Button1 buttonState="loading">Loading</Button1>
      <ButtonHugging>Loading</ButtonHugging>
      <ButtonHugging buttonState="disabled">disabled</ButtonHugging>
      <ButtonHugging buttonState="loading">Loading</ButtonHugging>
    </MainContainer>
  );
};
export default Test3;
