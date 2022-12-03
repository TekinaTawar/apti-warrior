import ChooseBattle from "@/components/shared/ChooseBattle";
import Header from "@/components/shared/Header";
import MapContainer from "@/components/shared/MapContainer";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "mapContainer  moduleCardContainer"
    "mapContainer  moduleCardContainer";
  column-gap: var(--space-2xs-xs);
  row-gap: var(--space-2xs-xs);

  .moduleCardContainer {
    grid-area: moduleCardContainer;
    position: relative;
    margin-right: var(--space-xs-s);

    display: grid;
  }
  .title {
    position: absolute;
    color: white;
    font-size: var(--step-1);
    top: 2vh;
    /* background-color: orange; */
    justify-self: center;
  }
`;

const PracticeAndLearn = () => {
  return (
    <MainContainer>
      <Header />
      <MapContainer />
      <ChooseBattle />
    </MainContainer>
  );
};

export default PracticeAndLearn;
