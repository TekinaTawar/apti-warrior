import styled from "styled-components";

import ContainerWithHead from "../shared/Containers/ContainerWithHead";

//* Icons

import { BiMedal } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";

const _LeaderBoardSection = styled(ContainerWithHead)`
  min-height: 100%;
  overflow-y: scroll;
  .containerContent {
    width: 95%;
    height: 95%;
    align-self: center;
    justify-self: center;
  }

  .leaderBoardContainer {
    display: grid;
    align-items: center;
    grid-template-columns: fit-content(50px) fit-content(50px) 2fr;
    /* grid-template-rows: repeat(3, fit-content(50px)); */
    padding-block: var(--space-4xs-3xs);
    padding-inline: var(--space-xs-s);
    grid-gap: var(--space-2xs-xs);

    .profileName {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      width: 100%;
      background: #e38d01;
      box-shadow: 0px 0px 3.04795px rgba(253, 207, 29, 0.8);
      border-radius: 5.33392px;
      font-weight: 700;
      font-size: 18.2877px;

      .points {
        display: flex;
      }
    }
  }
`;

const LeaderBoard = () => {
  return (
    <_LeaderBoardSection title="Leaderboard" grid-area="leaderBoard">
      {[...Array(20)].map((e, i) => (
        <div className="leaderBoardContainer" key={i}>
          <div className="medal">
            <BiMedal />
          </div>
          <div className="profileIcon">
            <CgProfile />
          </div>
          <div className="profileName">
            <p>Amit</p>
            <div className="points">
              <AiFillStar />
              <p>50,968</p>
            </div>
          </div>
        </div>
      ))}
    </_LeaderBoardSection>
  );
};
export default LeaderBoard;
