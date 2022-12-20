import Image from "next/image";
import styled from "styled-components";
import Header from "@/components/shared/Header";
import armyMan from "@/public/images/dashboard/armyMan.png";
import { useRouter } from "next/router";

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
import Link from "next/link";

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

const Dashboard = () => {
  const router = useRouter();
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
        <group>
          <DiamondButton icon={medalReward} />
          <label htmlFor="medalReward">Claim Rewards</label>
        </group>
        <group>
          <DiamondButton icon={walkiesTalkie} />
          <label htmlFor="walkiesTalkie">Chat and notification</label>
        </group>
      </div>

      <div className="armyManSection">
        <Image
          src={armyMan}
          alt="armyMan"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="iconButtonSection">
        <Link href="/training">
          <IconButton icon={book}>Training</IconButton>
        </Link>
        <IconButton icon={analytics} onClick={()=>router.push("/training2")}>Analytics</IconButton>
        <IconButton icon={trophy}>LeaderBoard</IconButton>
        <IconButtonPrimary icon={gun}>Battle</IconButtonPrimary>
      </div>
    </MainContainer>
  );
};
export default Dashboard;
