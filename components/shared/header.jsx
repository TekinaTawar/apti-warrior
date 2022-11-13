import styled from "styled-components";
import { FaMoneyBill } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

const _Header = styled.header`
  color: white;
  background-image: linear-gradient(to right, var(--gray-0), var(--gray-200));
  padding-right: var(--space-2xs-xs);
  display: grid;
  grid-template-columns: repeat(4, fit-content(50px));
  justify-content: space-between;
  align-items: center;

  font-family: stormfaze;
  font-size: var(--step-2);
  grid-area: header;

  .userDetailSection {
    /* justify-self: start; */
    justify-self: end;
    background-color: var(--military-green);
    display: grid;
    grid-template-areas: "profilePhoto username" "profilePhoto level";
    padding-left: var(--space-xs-s);
    padding-right: var(--space-s-m);
    padding-block: var(--space-3xs);
    column-gap: var(--space-3xs-2xs);
    //make the left edge slant
    clip-path: polygon(0 0, 92% 0, 100% 100%, 0% 100%);

    .profilePhotoContainer {
      grid-area: profilePhoto;
      width: var(--space-l-xl);
      height: var(--space-l-xl);
      background-color: var(--primary-0);
      border-radius: 50%;
      align-self: center;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .username {
      grid-area: username;

      /* overflow: hidden; */
      font-size: var(--step-0);
      /* background-color: pink; */
      align-self: end;

      @media (min-width: 600px) {
        white-space: nowrap;
      }
    }

    .level {
      grid-area: level;
      font-size: var(--step--2);
      font-family: metropolis;
      font-weight: 300;
      font-style: italic;
      /* background-color: orange; */
      align-self: center;
      // make it grid top
    }
  }

  .moneyDetail,
  .diamondDetail {
    /* background-color: teal; */
    display: flex;
    align-items: center;
    gap: var(--space-3xs-2xs);
  }

  i {
    color: var(--primary-0);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--space-m-l);
    /* background-color: black; */

    & * {
      width: 100%;
      height: 100%;
      align-self: center;
    }
  }
`;

const header = () => {
  return (
    <_Header>
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
      </_Header>
  )
}
export default header