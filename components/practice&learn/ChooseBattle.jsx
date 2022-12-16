import styled from "styled-components";

import ContainerWithHead from "../shared/ContainerWithHead";
import BattleTypeCard from "@/components/practice&learn/BattleTypeCard";
import streak from "@/public/images/Practice&Learn/streak.svg";
import topic from "@/public/images/Practice&Learn/topic.svg";
import sprint from "@/public/images/Practice&Learn/sprint.svg";

import { useState } from "react";

const _ChooseBattle = styled(ContainerWithHead)`
  display: grid;
  grid-template-rows: fit-content(50px) repeat(
      3,
      minmax(var(--space-2xl-3xl), auto)
    );
  justify-items: center;
  align-content: space-around;

  h3 {
    font-size: var(--step-1);
    color: white;
  }
`;

// currently i am using 1fr but another think can be to use fit-content
const ChooseBattle = () => {
  const [cardOpen, setCardOpen] = useState([false, false, false]);

  const toggle = (e) => {
    console.log(e);
    setCardOpen(!cardOpen);
  };

  return (
    <_ChooseBattle title="Choose Battle" gridArea="chooseBattle">
      <h3>Digital Marketing</h3>
      <BattleTypeCard
        battleTypeIcon={streak}
        battleTitle="Streak"
        cardOpen={cardOpen[0]}
        toggle={toggle}
        id="1"
      />
      <BattleTypeCard
        battleTypeIcon={sprint}
        battleTitle="Sprint"
        cardOpen={cardOpen[1]}
        setCardOpen
      />
      <BattleTypeCard
        battleTypeIcon={topic}
        battleTitle="Topic"
        cardOpen={cardOpen[2]}
        setCardOpen
      />
    </_ChooseBattle>
  );
};

export default ChooseBattle;
