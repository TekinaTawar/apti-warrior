import styled from "styled-components";
import Button1 from "@/components/shared/Buttons/Button1";
import ButtonHugging from "@/components/shared/Buttons/ButtonHugging";

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
      <Button1 isDisabled={true}>diabled</Button1>
      <Button1 isLoading={true}>Loading</Button1>
      <Button1 isLoading={true} isDisabled={true}>
        Loading
      </Button1>
      <ButtonHugging>Loading</ButtonHugging>
      <ButtonHugging buttonState="disabled">disabled</ButtonHugging>
      <ButtonHugging buttonState="loading">Loading</ButtonHugging>
    </MainContainer>
  );
};
export default Test3;
