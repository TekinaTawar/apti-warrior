import Image from "next/image";
import styled from "styled-components";


//* svg Icons

import questionCircle from "@/public/images/Practice&Learn/questionCircle.svg";
import time from "@/public/images/Practice&Learn/time.svg";
import checkmark from "@/public/images/Practice&Learn/checkmark.svg";
import money from "@/public/images/Practice&Learn/money.svg";
import diamond from "@/public/images/Practice&Learn/diamond.svg";

const _PointDetails = styled.div`
  font-family: metropolis;
  font-size: var(--step--3);
  display: grid;
  grid-template-columns: 1fr fit-content(50px);

  white-space: nowrap;

  .correctAns {
    padding-top: 4%;
  }
  .point {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    gap: 0.5rem;
  }
  .Reward {
    border: 1px solid var(--primary-0);
    padding: var(--space-4xs);

    & > h3 {
      color: var(--primary-0);
      font-size: var(--step--1);
    }

    .rewardsItems {
      padding: var(--space-4xs);
    }
  }
`;
const PointDetails = () => {
  return (
    <_PointDetails>
      <ul>
        <li className="point">
          <Image
            src={questionCircle}
            alt="questionCircle"
            width={20}
            height={20}
          />
          <p>10 questions</p>
        </li>
        <li className="point">
          <Image src={time} alt="time" width={20} height={20} />
          <p>5 minutes</p>
        </li>
        <li className="point">
          <Image src={checkmark} alt="checkmark" width={20} height={20} />
          <p>6 correct answers required</p>
        </li>
        <p className="correctAns">Your best attempt: 5 correct answers</p>
      </ul>
      <div className="Reward">
        <h3>Reward</h3>
        <ul className="rewardsItems">
          <li className="point">
            <Image src={money} alt="money" width={20} height={20} />
            <p>30K</p>
          </li>
          <li className="point">
            <Image src={diamond} alt="diamond" width={20} height={20} />
            <p>10</p>
          </li>
        </ul>
      </div>
    </_PointDetails>
  );
};

export default PointDetails;
