import styled from "styled-components";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";

const _Menu = styled(ContainerWithHead)`
  
`;

const Menu = () => {
  return <_Menu title="Menu" gridArea="menu">Menu</_Menu>;
};
export default Menu;
