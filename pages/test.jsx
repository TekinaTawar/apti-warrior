//import useState from react

import styled from "styled-components";
import VerticalContainer from "@/components/shared/VerticalContainer";


const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: stretch;
  //center the content vertically and horizontally
  /* display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: "Header Header" "subjectsContainer modulesContainer";
  column-gap: var(--space-xs-s);
  row-gap: var(--space-2xs-xs); */
`;

const test = () => {
  return (
    <MainContainer>
     <VerticalContainer />
    </MainContainer>
  );
};
export default test;
