import styled, { css } from "styled-components";
import Cookies from "universal-cookie";
import {useRouter} from "next/router"
import {useState} from "react";
import { CiDumbbell } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

//redux
import { useSelector } from "react-redux";
import { selectUserProfile } from "@/redux/user/userSlice";

const _Header = styled.header`
  color: white;
  background-image: linear-gradient(to right, var(--gray-0), var(--gray-200));
  padding-right: var(--space-2xs-xs);
  display: grid;
  grid-template-columns: repeat(5, fit-content(50px));
  justify-content: space-between;
  align-items: center;

  font-family: stormfaze;
  font-size: var(--step-2);
  grid-area: Header;

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

  .trainingPoint,
  .moneyDetail,
  .diamondDetail {
    /* background-color: teal; */
    display: flex;
    flex-direction: row;
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

  .settingsIcon {
    position: relative;
    cursor: pointer;

    .gearIcon {
      transition: transform 0.2s ease-in-out;
      :hover {
        transform: rotate(90deg);
      }
    }

    .logoutModal {
      position: absolute;
      background-color: black;
      width: 140px;
      top: 100%;
      right: 90%;
      z-index: 4;
      border: 2px solid var(--primary-0);
      border-inline: 3px solid var(--primary-0);
      border-radius: 5px;
      padding: 5px;
      font-family: metropolis;
      font-size: var(--step-0);
      font-style: normal;
      font-weight: 600;
      display: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }

      ${({showLogoutModal})=>showLogoutModal&&css`
      display: flex;
      `}
      
    }
  }
`;

const Header = () => {
  const userProfile = useSelector(selectUserProfile);
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const cookies = new Cookies();

  const logout = async () => {
    await cookies.remove("jwt", {path: '/'});
    await router.reload();
  };

  return (
    <_Header showLogoutModal={showLogoutModal}>
      <>
        <div className="userDetailSection">
          <div className="profilePhotoContainer">{/* image */}</div>
          <h3 className="username">
            {userProfile?.data?.username ?? "username"}{" "}
          </h3>
          <h5 className="level">
            Level {userProfile?.data?.profile?.level ?? "0"}
          </h5>
        </div>
        <div className="trainingPoint">
          <i>
            <CiDumbbell />
          </i>
          <span>1668</span>
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
          <BsGear className="gearIcon" onClick={()=> setShowLogoutModal(!showLogoutModal)} />
          <div className="logoutModal" onClick={logout}>LogOut</div>
        </i>
      </>
    </_Header>
  );
};
export default Header;
