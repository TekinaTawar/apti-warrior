import styled from "styled-components";

import Header from "@/components/shared/Header";
import Mathematics2 from "@/components/questions(Streak Test)/Mathematics2";
import Battle from "@/components/questions(Streak Test)/Battle";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "Mathematics  opponents";
  row-gap: var(--space-xs-s);
  align-content: stretch;
`;

const sprintTest = () => {
  return (
    <MainContainer>
      <Header />
      <Mathematics2 />
      <Battle />
      {/* <LeaderBoard/> */}
    </MainContainer>
  );
};
export default sprintTest;
