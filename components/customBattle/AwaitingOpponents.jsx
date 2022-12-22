import styled from "styled-components";
import BorderButton from "../shared/BorderButton";
import ContainerWithHead from "../shared/ContainerWithHead";
import { MdSaveAlt } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const _CustomBattle = styled(ContainerWithHead)`
  grid-area: CustomBattle;

  .battleButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

      & p {
        font-size: var(--step--1);
        font-weight: 500;
      }

      & h3 {
        font-size: var(--step-0);
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
      h3 {
        font-size: var(--step-1);
        color: #fdcf1d;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #5b6643;
    border: 2px solid #fdcf1d;
    border-radius: 5px;
    padding-block: var(--space-2xs-xs);
    padding-inline: var(--space-2xs-xs);
    font-size: var(--step--1);
    font-weight: 700;
  }
`;
const ProfileCard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-s-m);

  .profileCard {
  }
`;

const AwaitingOpponents = () => {
  return (
    <_CustomBattle title=" Custom Battle">
      <_customBattleContent>
        <div className="customBattle">
          <div className="headings">
            <p>Game ID</p>
            <h3> XDG78E</h3>
            <MdSaveAlt />
            <FiShare2 />
          </div>
          <div className="note">
            <p>
              Note: Share the game ID with the people you want to play with.
              Awaiting Opponents
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
                  <li>Hemant Kant Malviya</li>
                  <li>Level 24</li>
                </ul>
              </div>
            </div>
          ))}
        </ProfileCard>

        <div className="battleButtons">
          <BorderButton className="button1">Start Battle</BorderButton>
          <BorderButton className="button2">Cancel</BorderButton>
        </div>
      </_customBattleContent>
    </_CustomBattle>
  );
};
export default AwaitingOpponents;
