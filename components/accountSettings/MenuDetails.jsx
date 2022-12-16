import styled from "styled-components";
import VerticalContainer from "../shared/VerticalContainer";

const _MenuDetails = styled(VerticalContainer)`
  grid-area: menuDetails;
`;

const MenuDetails = () => {
  return <_MenuDetails title="Account">MenuDetails</_MenuDetails>;
};
export default MenuDetails;
