import styled from "styled-components";
import Header from "@/components/shared/Header";
import MapTitle from "@/components/practice&learn/MapTitle";
import TestType from "@/components/practice&learn/TestType";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "mapTitle  mapTitle"
    "testType  testType";
  row-gap: var(--space-xs-s);
`;



const Practice = () => {
  return (
    <MainContainer>
    
      <Header />
      <MapTitle />
      <TestType/>
    </MainContainer>
  );
};
export default Practice;
