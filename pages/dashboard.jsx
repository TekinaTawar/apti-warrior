import styled from "styled-components";
import Header from "components/shared/header";

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
`;

const dashboard = () => {
  return (
    <MainContainer>
      <Header />
      <DiamondButton icon={dailyTask} />
      <DiamondButton icon={socials} />
      <DiamondButton icon={shoppingCart} />
      <IconButton icon={book}>Training</IconButton>
      <IconButton icon={analytics}>Analytics</IconButton>
      <IconButton icon={trophy}>LeaderBoard</IconButton>
      <IconButtonPrimary icon={gun}>Battle</IconButtonPrimary>
    </MainContainer>
  );
};
export default dashboard;
