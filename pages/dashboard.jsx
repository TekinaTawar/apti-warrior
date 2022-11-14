import Image from "next/legacy/image";
import armyMan from "public/images/dashboard/armyMan.png";
import styled from "styled-components";
import Header from "@/components/shared/Header";

import IconButton from "components/shared/IconButton";
import book from "public/images/dashboard/book.svg";
import analytics from "public/images/dashboard/analytics.svg";
import trophy from "public/images/dashboard/trophy.svg";

import IconButtonPrimary from "components/shared/IconButtonPrimary";
import gun from "public/images/dashboard/gun.svg";

import DiamondButton from "components/shared/DiamondButton";
import dailyTask from "public/images/dashboard/dailyTask.svg";
import socials from "public/images/dashboard/socials.svg";
import shoppingCart from "public/images/dashboard/shoppingCart.svg";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: fit-content(50px) 1fr; //maybe change that 1fr to minmax or 100% or something.
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "Header Header Header" "diamondButtonSection armyManSection iconButtonSection";

  align-items: center;

  .diamondButtonSection {
    grid-area: diamondButtonSection;
    align-self: stretch;
    justify-self: start;
    padding-left: var(--space-s-m);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2xs);

      label {
        color: white;
        font-family: stormfaze;
        font-size: var(--step-1);
      }
    }
  }

  .armyManSection {
    grid-area: armyManSection;
    height: 70%;
    position: relative;
    /* justify-self: start; */
  }

  .iconButtonSection {
    grid-area: iconButtonSection;
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    align-self: stretch;
    justify-content: space-around;
    align-items: center;
  }
`;

const dashboard = () => {
  return (
    <MainContainer>
      <Header />
      <div className="diamondButtonSection">
        <group>
          <DiamondButton icon={dailyTask} />
          <label htmlFor="dailyTask">Daily Task</label>
        </group>
        <group>
          <DiamondButton icon={socials} />
          <label htmlFor="socials">Socials</label>
        </group>
        <group>
          <DiamondButton icon={shoppingCart} />
          <label htmlFor="shoppingCart">Shop</label>
        </group>
      </div>

      <div className="armyManSection">
        <Image src={armyMan} alt="armyMan" layout="fill" objectFit="contain" />
      </div>
      <div className="iconButtonSection">
        <IconButton icon={book}>Training</IconButton>
        <IconButton icon={analytics}>Analytics</IconButton>
        <IconButton icon={trophy}>LeaderBoard</IconButton>
        <IconButtonPrimary icon={gun}>Battle</IconButtonPrimary>
      </div>
    </MainContainer>
  );
};
export default dashboard;
