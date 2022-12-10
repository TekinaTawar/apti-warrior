import Header from "@/components/shared/Header";
import MapTitle from "@/components/practice&learn/MapTitle";
import MapContainer from "@/components/practice&learn/MapContainer";
import ChooseBattle from "@/components/practice&learn/ChooseBattle";

import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "mapTitle  chooseBattle"
    "mapContainer  chooseBattle";
  row-gap: var(--space-xs-s)
  
`;

const PracticeAndLearn = () => {
  return (
    <MainContainer>
      <Header />
      <MapTitle />
      <MapContainer />
      <ChooseBattle />
    </MainContainer>
  );
};

export default PracticeAndLearn;
