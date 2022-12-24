import styled from "styled-components";

import Header from "@/components/shared/Header";
import OnlinePlayers from "@/components/multiplayer/OnlinePlayers";
import LeaderBoard from "@/components/multiplayer/LeaderBoard";
import BattleSection from "@/components/multiplayer/BattleSection";


const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr 1fr;
  grid-template-areas:
    "Header  Header"
    "leaderBoard  BattleSection"
    "onlinePlayers BattleSection";
  row-gap: var(--space-xs-s);
  column-gap: var(--space-xs-s);
`;

const multiplayerDashboard1 = () => {
  return (
    <MainContainer>
      <Header />

      <LeaderBoard />
      <OnlinePlayers />

      <BattleSection />
    </MainContainer>
  );
};
export default multiplayerDashboard1;
