import styled from "styled-components";

import Header from "@/components/shared/Header";
import LeaderBoard from "@/components/multiplayer/LeaderBoard";
import Mathematics2 from "@/components/questions(Streak Test)/Mathematics2";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "Mathematics  leaderBoard";
  row-gap: var(--space-xs-s);
  align-content: stretch;
`;

const streakTest2 = () => {
  return (
    <MainContainer>
      <Header />
      <Mathematics2 />
      <LeaderBoard />
    </MainContainer>
  );
};
export default streakTest2;
