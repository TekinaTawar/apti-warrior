//import useState from react

import styled from "styled-components";
import BorderContainer from "@/components/shared/BorderContainer";
import borderVid from "@/public/images/Training2/borderVid.svg";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
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
      <BorderContainer border={borderVid}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem
        quod iste blanditiis, velit eligendi rem exercitationem! Ratione
        repellendus voluptatem aut illo molestias id minus ipsam quo
        consequatur. Eveniet odit corrupti iste voluptatum, dolores optio nulla
        assumenda, debitis explicabo at mollitia maiores similique eos provident
        pariatur? Reprehenderit distinctio possimus doloremque incidunt
        corporis, corrupti fugit labore magnam veritatis velit ullam.
      </BorderContainer>
    </MainContainer>
  );
};
export default test;
