import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import ContainerWithHead from "../shared/ContainerWithHead";

const _OnlinePlayers = styled(ContainerWithHead)`
  .leaderBoardContainer {
    display: grid;
    align-items: center;
    grid-template-columns: fit-content(50px) fit-content(50px) 2fr;
    /* grid-template-rows: repeat(3, fit-content(50px)); */
    padding-block: var(--space-4xs-3xs);
    padding-inline: var(--space-xs-s);
    grid-gap: var(--space-2xs-xs);
    .profile {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      width: 100%;
      border: 1px solid #5b6643;
      filter: drop-shadow(0px 0px 1px rgba(253, 207, 29, 0.3));
      border-radius: 5.33392px;
      font-weight: 700;
      font-size: 18.2877px;
      .name {
        display: flex;
        gap: 10px;
      }
      .points {
        display: flex;
      }
    }
  }
`;

const OnlinePlayers = () => {
  return (
    <_OnlinePlayers title="Online Players" grid-area="onlinePlayers">
      {[...Array(5)].map((e, i) => (
        <div className="leaderBoardContainer" key={i}>
          <div className="medal">200</div>
          <div className="profileIcon">
            <CgProfile />
          </div>
          <div className="profile">
            <div className="name">
              <p>Amit</p>
              <BsFillCircleFill color="#89CC13" />
            </div>
            <div className="points">
              <AiFillStar />
              <p>50,968</p>
            </div>
          </div>
        </div>
      ))}
    </_OnlinePlayers>
  );
};
export default OnlinePlayers;
