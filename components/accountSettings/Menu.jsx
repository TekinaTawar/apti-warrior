import styled from "styled-components";
// shared components
import MenuItem from "./MenuItem";
import VerticalContainer from "../shared/Containers/VerticalContainer";
// images
import accountIcon from "@/public/images/icons/settings/account.svg";
import achievementsIcon from "@/public/images/icons/settings/achievements.svg";
import profileIcon from "@/public/images/icons/settings/profile.svg";
import settingsIcon from "@/public/images/icons/settings/settings.svg";
import supportIcon from "@/public/images/icons/settings/support.svg";

const _Menu = styled(VerticalContainer)``;

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs-xs);
`;

const Menu = ({ settingsType }) => {
  const cards = [
    ["profile", profileIcon],
    ["account", accountIcon],
    ["achievements", achievementsIcon],
    ["Settings", settingsIcon],
    ["support", supportIcon],
  ];
  return (
    <_Menu title="Menu" gridArea="menu">
      <MenuContent>
        {cards.map((card, index) => (
          <MenuItem
            key={index}
            cardTitle={card[0]}
            cardIcon={card[1]}
            selected={card[0] == settingsType}
          />
        ))}
      </MenuContent>
    </_Menu>
  );
};
export default Menu;
