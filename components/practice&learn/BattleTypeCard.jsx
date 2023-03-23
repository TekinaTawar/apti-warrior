import Image from "next/legacy/image";
import styled, { css } from "styled-components";

import PointDetails from "./PointDetails";
import Button1 from "../shared/Buttons/Button1";

const _BattleTypeCard = styled.label`
  width: 90%;
  /* height: var(--space-2xl-3xl);
  min-height: var(--space-2xl-3xl); */
  margin-inline: auto;
  border: 2px solid var(--primary-0);

  display: flex;
  flex-direction: column;
  transition: all 1s;
  cursor: pointer;

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
`;

const Radio = styled.input`
  /* position: absolute; */
  background-color: orange;
  z-index: 100;
  display: none;

  :checked + label {
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
  }
`;

const BattleTypeCard = ({ battleTypeIcon, battleTitle }) => {
  return (
    <>
      <Radio
        type="radio"
        name="battleType"
        value={battleTitle}
        id={battleTitle}
      />
      <_BattleTypeCard htmlFor={battleTitle}>
        <div className="battleTypeHead">
          <div className="battleIcon">
            <Image src={battleTypeIcon} alt="streak" layout="fill" />
          </div>

          <div className="battleTitle">{battleTitle}</div>
        </div>
        <div className="battleTypeDetails">
          <PointDetails />
          <Button1>Play</Button1>
        </div>
      </_BattleTypeCard>
    </>
  );
};
export default BattleTypeCard;
