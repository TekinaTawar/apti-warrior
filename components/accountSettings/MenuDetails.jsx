import styled from "styled-components";
import ContainerWithHead from "../shared/ContainerWithHead";

const _MenuDetails = styled(ContainerWithHead)`
  grid-area: menuDetails;
`;

const MenuDetails = () => {
  return <_MenuDetails title="Account">MenuDetails</_MenuDetails>;
};
export default MenuDetails;
