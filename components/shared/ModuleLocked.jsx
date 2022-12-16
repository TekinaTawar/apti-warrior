import Image from "next/legacy/image";
import styled from "styled-components";
import lock from "@/public/images/Practice&Learn/lock.svg";
const _ModuleLocked = styled.div`
  width: 600px;
  height: 400px;
  border: 5px solid var(--primary--100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 8%;
  background-color: var(--black);
  color: var(--whtie);
  padding-inline: var(--space-xl-2xl);
  padding-top: var(--space-l-xl);

  span {
    /* background-color: pink; */
    font-size: var(--step--1);
  }

  .moduleProgress {
    width: 250px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: var(--space-2xs-xs);
    justify-items: center;
    /* column-gap: var(--space-2xs-xs); */

    .progressBarContainer {
      border: 2px solid var(--primary-0);
      height: var(--space-s);
      border-radius: 3px;
      /* box-shadow: 0px 0px 20px 0px var(--primary--100); */
      justify-self: stretch;

      .progressLine {
        height: 100%;
        width: 75%;
        border: 1px solid black;
        background-image: repeating-linear-gradient(
          115deg,
          transparent 0px 1px,
          var(--primary-0) 2px 6px
        );
      }
    }
  }
`;

const ModuleLocked = () => {
  return (
    <_ModuleLocked>
    
      <h1>Digital Marketing</h1>
      <div className="moduleProgress">
        <div className="progressBarContainer">
          <div className="progressLine"> </div>
        </div>
      </div>
      <span>
        Scope will list the topics within the module and additional info in case
        the topic is a basic topic for other modules.
      </span>
      <Image src={lock} alt="lock" />
    </_ModuleLocked>
  );
};
export default ModuleLocked;
