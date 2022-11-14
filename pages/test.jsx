//import useState from react

import styled from "styled-components";
import Image from "next/legacy/image";
import HorizontalCardContainer from "components/shared/HorizontalCardContainer";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: "header header" "subjectsContainer modulesContainer";
  column-gap: var(--space-xs-s);
  row-gap: var(--space-2xs-xs);
`;

const test = () => {
  return (
    <MainContainer>
      <HorizontalCardContainer />
    </MainContainer>
  );
};
export default test;
