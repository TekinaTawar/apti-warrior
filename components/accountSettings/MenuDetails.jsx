import styled from "styled-components";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";
import ProfileSettings from "./ProfileSettings";
import AccountSettings from "./AccountSettings";
import AchievementsSettings from "./AchievementsSettings";
import Settings from "./Settings";
import SupportSettings from "./SupportSettings";


const _MenuDetails = styled(ContainerWithHead)`
  /* background-color: #232222; */
  padding-block: var(--space-xs-s);
  padding-inline: var(--space-s-m);
`;

const MenuDetails = ({ settingsType }) => {
  const getSetting = () => {
    switch(settingsType) {
      case "profile":
    return <ProfileSettings />;
      case "account":
        return <AccountSettings />;
      case "achievements":
        return <AchievementsSettings />;
      case "settings":
        return <Settings />;
      case "support":
        return <SupportSettings />;
      default:
        return "Select From Menu on Left";
    }
  }

  return <_MenuDetails title={settingsType?.charAt(0).toUpperCase() + settingsType?.slice(1)} gridArea="menuDetails">
    {getSetting()}
  </_MenuDetails>;
};
export default MenuDetails;
