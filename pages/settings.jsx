import Account from "@/components/accountSettings/Account";
import Menu from "@/components/accountSettings/Menu";
import MenuDetails from "@/components/accountSettings/MenuDetails";
import Header from "@/components/shared/Header";
import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    /* "menuTitle  menuDetails" */
    "menu  menuDetails"
    "menu  menuDetails";
  row-gap: var(--space-xs-s);
`;

const settings = () => {
  return (
    <MainContainer>
      <Header />
      <Menu />
      <MenuDetails />
    </MainContainer>
  );
};
export default settings;
