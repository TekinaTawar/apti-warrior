import Image from "next/legacy/image";
import styled, { css } from "styled-components";

import PointDetails from "./PointDetails";
import BorderButton from "../shared/BorderButton";

const _BattleTypeCard = styled.div`
  width: 90%;
  /* height: var(--space-2xl-3xl);
  min-height: var(--space-2xl-3xl); */
  margin-inline: auto;
  border: 2px solid var(--primary-0);

  display: flex;
  flex-direction: column;
  transition: all 1s;

  .battleTypeHead {
    height: 100%;
    display: grid;
    grid-template-areas: "1fr 1fr";
    align-items: center;
    justify-items: center;
    position: relative;

    .battleIcon {
      height: 80%;
      width: var(--space-xl-2xl);
      position: relative;
    }

    .battleTitle {
      font-size: var(--step-5);
      font-weight: 700;
      color: white;
    }

    ::after {
      top: 0;
      position: absolute;
      content: "";
      background-color: var(--secondary-0);
      width: 100%;
      height: 11.8%;
    }
  }

  .battleTypeDetails {
    display: none;
  }

  ${(props) =>
    props.cardOpen &&
    css`
      .battleTypeHead {
        background-color: var(--primary-0);
        display: flex;
        padding-block: var(--space-4xs);

        .battleTitle {
          color: black;
          font-size: var(--step-2);
        }

        .battleIcon {
          /* width: 0px; */
          width: 20%;
          height: var(--space-m-l);
          * {
            filter: brightness(0%);
          }
        }

        ::after {
          display: none;
        }
      }

      .battleTypeDetails {
        display: flex;
        flex-direction: column;
        row-gap: var(--space-xs-s);
        align-items: center;
        padding-inline: var(--space-xs-s);
        padding-block: var(--space-2xs-xs);
      }
    `}
`;

const BattleTypeCard = ({ battleTypeIcon, battleTitle, cardOpen }) => {
  return (
    <_BattleTypeCard cardOpen={cardOpen}>
      <div className="battleTypeHead">
        <div className="battleIcon">
          <Image src={battleTypeIcon} alt="streak" layout="fill" />
        </div>

        <div className="battleTitle">{battleTitle}</div>
      </div>
      <div className="battleTypeDetails">
        <PointDetails />
        <BorderButton>Play</BorderButton>
      </div>
    </_BattleTypeCard>
  );
};
export default BattleTypeCard;
