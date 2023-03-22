import styled from "styled-components";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";

const _MenuDetails = styled(ContainerWithHead)`
`;

const MenuDetails = () => {
  return <_MenuDetails title="Account" gridArea="menuDetails">MenuDetails</_MenuDetails>;
};
export default MenuDetails;
