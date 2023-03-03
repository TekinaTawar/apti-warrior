import styled from "styled-components";
import VerticalContainer from "@/components/training/VerticalContainer";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: ". . . " ". IndiaContainer .";
`;

const TestTrainingVerticalContainer = () => {
  return (
    <MainContainer>
      <VerticalContainer title="India" gridArea="IndiaContainer">{"abc"}</VerticalContainer>
    </MainContainer>
  );
};
export default TestTrainingVerticalContainer;
