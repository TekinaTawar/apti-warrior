import styled from "styled-components";
import { useRouter } from "next/router";

import Menu from "@/components/accountSettings/Menu";
import MenuDetails from "@/components/accountSettings/MenuDetails";
import Header from "@/components/shared/Header";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: fit-content(50px)  1fr;
  grid-template-columns: 0px 1fr 3fr 0px;
  grid-template-areas:
    "Header Header Header Header"
    "x menu  menuDetails .";
  row-gap: var(--space-xs-s);
  column-gap: var(--space-2xs-xs);
`;

const settings = () => {
  const router = useRouter();
  const { settingsType } = router.query;

  return (
    <MainContainer>
      <Header />
      <Menu settingsType={settingsType}/>
      <MenuDetails settingsType={settingsType} />
    </MainContainer>
  );
};
export default settings;
