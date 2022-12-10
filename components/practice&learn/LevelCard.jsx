import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import Image from "next/legacy/image";
import lock from "@/public/images/Practice&Learn/lock.svg";

const _LevelCard = styled.div`
  background-color: var(--secondary-0);
  border: 3px solid var(--primary-0);
  /* padding: var(--space-xs-s); */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-3xs-2xs);
  position: relative;
  z-index: 10;

  

  .locked {
    border-radius: 15px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.824);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .levelNumberContainer {
    display: inline-block;
    /* padding: var(--space-xs-s); */
    background-color: var(--gray-200);
    border-radius: 10px;
    padding-inline: var(--space-xs-s);
    /* padding-block: var(--space-4xs-3xs); */
    color: white;
    font-family: stormfaze;
    font-size: var(--step-4);
    border: 3px solid #211100;
  }

  .stars {
    color: var(--primary-0);

    > * {
      padding-inline: var(--space-4xs-3xs);
    }
  }
`;

const LevelCard = ({ className, locked = false }) => {
  return (
    <_LevelCard className={className}>
      {locked && (
        <div className="locked">
          <Image src={lock} alt="lock" />
        </div>
      )}
      <div className="levelNumberContainer">1</div>
      <div className="stars">
        <FaStar size="1.7rem" />
        <FaStar size="1.7em" />
        <FaStar size="1.7rem" />
      </div>
    </_LevelCard>
  );
};
export default LevelCard;
