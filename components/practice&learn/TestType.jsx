import Image from "next/image";
import styled from "styled-components";

//images
import vector from "@/public/images/Practice&Learn/vector.svg";
import aimStreak from "@/public/images/Practice&Learn/aimStreak.svg";
import simulation from "@/public/images/Practice&Learn/simulation.svg";

//*style Component//
const _TestType = styled.div` 
  grid-area: testType;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-xl-2xl);
  background: rgba(28, 27, 27, 0.87);
  height: 90%;

  .container {
    width: var(--space-5xl-6xl);
    height: var(--space-6xl-7xl);
    display: flex;
    flex-direction: column;
    border: 6px solid var(--primary-0);
    gap: var(--space-2xs-xs);
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-xs-s);
    position: relative;
    background: var(--black);

    .innerContainer {
      border-bottom: 4px dotted var(--primary-0);
      height: 25rem;
    }

    :hover {
      cursor: pointer;
    }

    .testTitle {
      border-top: 3px solid #ffdb3a;
      font-family: "Stormfaze";
      font-size: var(--step-3);
      color: var(--whtie);
      text-align: center;
      padding-block: var(--space-s-m);
    }
  }
`;

//*style Component//

const TestType = () => {
  return (
    <_TestType>
      <div className="container">
        <div className="innerContainer">
          <Image src={vector} alt="vector" />
          <div className="testTitle">Sprint </div>
        </div>
      </div>
      <div className="container">
        <div className="innerContainer">
          <Image src={aimStreak} alt="aimStreak" />
          <div className="testTitle">Streak </div>
        </div>
      </div>
      <div className="container">
        <div className="innerContainer">
          <Image src={simulation} alt="simulation" />
          <div className="testTitle">Simulation </div>
        </div>
      </div>
    </_TestType>
  );
};
export default TestType;
