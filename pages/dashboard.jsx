import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/shared/Header";

// * Icons
import armyMans from "@/public/images/dashboard/armyMans.png";
import IconButton from "@/components/shared/IconButton";
import book from "@/public/images/dashboard/book.svg";
import analytics from "@/public/images/dashboard/analytics.svg";
import trophy from "@/public/images/dashboard/trophy.svg";

import IconButtonPrimary from "@/components/shared/IconButtonPrimary";
import gun from "@/public/images/dashboard/gun.svg";

import DiamondButton from "@/components/shared/DiamondButton";
import dailyTask from "@/public/images/dashboard/dailyTask.svg";
import socials from "@/public/images/dashboard/socials.svg";
import shoppingCart from "@/public/images/dashboard/shoppingCart.svg";
import medalReward from "@/public/images/dashboard/medalReward.svg";
import walkiesTalkie from "@/public/images/dashboard/walkiesTalkie.svg";

//* Icons

//*Styled Components

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: fit-content(50px) 1fr; //maybe change that 1fr to minmax or 100% or something.
  grid-template-columns: 1fr 2fr 1fr;
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

    section {
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
    height: 100%;
    width: 100%;
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

//*Styled Components

const Dashboard = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <Header />
      <div className="diamondButtonSection">
        <section>
          <DiamondButton icon={dailyTask} />
          <label htmlFor="dailyTask">Daily Task</label>
        </section>
        <section>
          <DiamondButton icon={socials} />
          <label htmlFor="socials">Socials</label>
        </section>
        <section>
          <DiamondButton icon={shoppingCart} />
          <label htmlFor="shoppingCart">Shop</label>
        </section>
        <section>
          <DiamondButton icon={medalReward} />
          <label htmlFor="medalReward">Claim Rewards</label>
        </section>
        <section>
          <DiamondButton icon={walkiesTalkie} />
          <label htmlFor="walkiesTalkie">Chat and notification</label>
        </section>
      </div>

      <div className="armyManSection">
        <Image
          src={armyMans}
          alt="armyMans"
          fill
          // sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="iconButtonSection">
        <Link href="/training/choose-module">
          <IconButton icon={book}>Training</IconButton>
        </Link>
        <IconButton icon={analytics} disabled={true}>Analytics</IconButton>
        <IconButton icon={trophy} disabled={true}>LeaderBoard</IconButton>
        <IconButtonPrimary icon={gun}>Battle</IconButtonPrimary>
      </div>
    </MainContainer>
  );
};
export default Dashboard;
