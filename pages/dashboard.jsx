import styled from "styled-components";
import { FaMoneyBill } from "react-icons/fa";
// import diamond icon from react-icons
import { IoDiamondOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Header = styled.header`
  color: white;
  background-image: linear-gradient(
    to right,
    rgba(64, 64, 62, 0.56),
    rgba(64, 64, 62, 1)
  );

  display: grid;
  grid-template-columns: repeat(4, fit-content(50px));
  
  justify-content: space-between;
  align-items: center;

  font-family: stormfaze;

  .userDetailSection {
    /* justify-self: start; */
    justify-self: end;
    background-color: var(--military-green);
    display: grid;
    grid-template-areas: "profilePhoto username" "profilePhoto level";
    padding-inline: 0.5rem;

    .profilePhotoContainer {
      
      grid-area: profilePhoto;
      width: 3.2rem;
      height: 3.2rem;
      background-color: orange;
      border-radius: 50%;
      border: 6px solid var(--secondary);
      border-right: 6px solid gray;
    }

    .username {
      grid-area: username;
      white-space: nowrap;
      
    }

    .level {
      grid-area: level;
    }
  }

  .moneyDetail, .diamondDetail {
    background-color: teal;
    display: flex;
    align-items: center;
  }

  i {
    background-color: orange;
  }
`;

const dashboard = () => {
  return (
    <MainContainer>
      <Header>
        <div className="userDetailSection">
          <div className="profilePhotoContainer">{/* image */}</div>
          <h3 className="username">Hemant Kant Malviya</h3>
          <h5 className="level">Level 28</h5>
        </div>
        <div className="moneyDetail">
          <i>
            <FaMoneyBill />
          </i>
          <span>3.5M</span>
        </div>
        <div className="diamondDetail">
          <i>
            <IoDiamondOutline />
          </i>
          <span>289</span>
        </div>
        <i className="settingsIcon">
          <BsGear />
        </i>
      </Header>
    </MainContainer>
  );
};
export default dashboard;
