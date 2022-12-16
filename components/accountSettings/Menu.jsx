import styled from "styled-components"
import VerticalContainer from "../shared/VerticalContainer"


const _Menu = styled(VerticalContainer)`
    grid-area: menu;

`


const Menu = () => {
  return (
    <_Menu title="Menu">Menu</_Menu>
  )
}
export default Menu;