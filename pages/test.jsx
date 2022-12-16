import ContainerWithHead from "@/components/shared/ContainerWithHead";
import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  /* justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "mapTitle  chooseBattle"
    "mapContainer  chooseBattle";
  row-gap: var(--space-xs-s);
`;

const Test = () => {
  return (
    <MainContainer>
      <ContainerWithHead title="Modules"/>
    </MainContainer>
  );
};
export default Test;
