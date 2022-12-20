import styled from "styled-components";
import ContainerWithHead from "../shared/ContainerWithHead";

const _Menu = styled(ContainerWithHead)`
  grid-area: menu;
`;

const Menu = () => {
  return <_Menu title="Menu">Menu</_Menu>;
};
export default Menu;
