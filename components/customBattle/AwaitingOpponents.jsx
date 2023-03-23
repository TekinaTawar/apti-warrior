import styled from "styled-components";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";

//* Icons

import { FiShare2 } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import ButtonHugging from "../shared/Buttons/ButtonHugging";
import { BsBookmarks } from "react-icons/bs";

const _CustomBattle = styled(ContainerWithHead)`
  .battleButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: var(--step-1);
    padding-block: var(--space-s-m);
    padding-inline: var(--space-s-m);

    .button1 {
      grid-area: button1;
    }
    .button2 {
      grid-area: button2;
    }
  }
`;

const _customBattleContent = styled.div`
  align-items: center;
  justify-content: center;
  font-family: "Metropolis";
  padding-block: var(--space-s-m);
  padding-inline: var(--space-s-m);

  .customBattle {
    display: flex;
    flex-direction: column;

    .headings {
      display: flex;
      justify-content: center;
      gap: var(--space-s-m);
      border-bottom: 4px solid var(--primary-100);
      box-shadow: 0px 0px 12px var(--neutral);
      padding-block: var(--space-3xs-2xs);

      & p {
        font-size: var(--step-0);
        font-weight: 500;
      }

      & h3 {
        font-size: var(--step-1);
        font-weight: 700;
      }
    }
    .note {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-block: var(--space-s-m);
      padding-inline: var(--space-xl-2xl);
      gap: var(--space-2xs-xs);
      font-size: var(--step--1);
      font-weight: 400;

      h3 {
        font-size: var(--step-1);
        color: var(--primary-0);
      }
    }
  }
`;
const ProfileCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-s-m);
  padding-inline: var(--space-xl-2xl);
  .profileCard {
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      background: var(--secondary-0);
      border: 2px solid var(--primary-0);
      filter: drop-shadow(0px 0px 12px rgba(253, 207, 29, 0.5));
      border-radius: 5px;
      padding-block: var(--space-2xs-xs);
      padding-inline: var(--space-2xs-xs);
      font-size: var(--step--1);
      font-weight: 700;

      .title {
        font-size: var(--step--1);
        font-weight: 700;
      }

      li {
        font-size: var(--step--2);
        font-weight: 500;
      }
    }
  }
`;

const AwaitingOpponents = () => {
  return (
    <_CustomBattle title=" Custom Battle" gridArea="CustomBattle">
      <_customBattleContent>
        <div className="customBattle">
          <div className="headings">
            <p>Game ID</p>
            <h3> XDG78E</h3>
            <BsBookmarks style={{ color: "var(--primary-0)" }} />
            <FiShare2 style={{ color: "var(--primary-0)" }} />
          </div>

          <div className="note">
            <p>
              <b>Note:</b> Share the game ID with the people you want to play
              with. Awaiting Opponents
            </p>

            <h3>Awaiting Opponents</h3>
          </div>
        </div>

        <ProfileCard>
          {[...Array(6)].map((_, i) => (
            <div className="profileCard" key={i}>
              <div className="profile">
                <CgProfile />
                <ul>
                  <li className="title">Hemant Kant Malviya</li>
                  <li>Level 24</li>
                </ul>
              </div>
            </div>
          ))}
        </ProfileCard>

        <div className="battleButtons">
          <ButtonHugging className="button1"> Start </ButtonHugging>
          <ButtonHugging className="button2"> Cancel </ButtonHugging>
        </div>
      </_customBattleContent>
    </_CustomBattle>
  );
};
export default AwaitingOpponents;
