import Image from "next/image";
import styled from "styled-components";

import ContainerWithImage from "./shared/ContainerWithImage";
import ButtonHugging from "@/components/shared/Buttons/ButtonHugging";

//*   svg Icons

import borderVid from "@/public/images/training2/borderVid.svg";
import questionCircle from "@/public/images/Practice&Learn/questionCircle.svg";
import time from "@/public/images/Practice&Learn/time.svg";
import checkmark from "@/public/images/Practice&Learn/checkmark.svg";
import money from "@/public/images/Practice&Learn/money.svg";
import diamond from "@/public/images/Practice&Learn/diamond.svg";
import dumbbells from "@/public/images/Practice&Learn/dumbbells.svg";
import xp from "@/public/images/Practice&Learn/xp.svg";

const _QuizContainer = styled(ContainerWithImage)``;

const QuizType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;
  height: 100%;
  padding: var(--space-m-l);
  /* gap: var(--space-m-l); */

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: var(--step-0);
  }

  p {
    font-weight: 400;
    font-size: var(--step--1);
  }

  .correct {
    padding-left: var(--space-xl-2xl);
  }
  .testDetails {
    display: flex;
    column-gap: var(--space-m-l);
    row-gap: var(--space-m-l);
    align-items: center;
    justify-content: space-around;
    font-size: var(--step--1);

    .testName {
      display: flex;
      flex-direction: column;
      row-gap: var(--space-m-l);
    }
    .rewards {
      display: flex;
      flex-direction: column;
      row-gap: var(--space-m-l);
    }
    .point {
      display: flex;
      flex-direction: row;
      column-gap: var(--space-2xs-xs);
      align-items: center;
    }
  }
`;

const QuizContainer = () => {
  return (
    <_QuizContainer image={borderVid} style={{ gridArea: "span 2" }}>
      <QuizType>
        <h2>Some Random Topic Name</h2>
        <p>
          Congratulations on completing the topic Some random topic name.Lets
          check take a small test to revise our learnings.
        </p>
        <p>All the best and do well!</p>

        <div className="testDetails">
          <div className="testName">
            <div className="point">
              <Image
                src={questionCircle}
                alt="questionCircle"
                width={30}
                height={30}
              />
              <p>10 questions</p>
            </div>
            <div className="point">
              <Image src={time} alt="time" width={30} height={30} />
              <p>5 minutes</p>
            </div>
            <div className="point">
              <Image src={checkmark} alt="checkmark" width={30} height={30} />
              <p>correct answers required</p>
            </div>
            <div className="point"></div>
          </div>
          <div className="rewards">
            <div className="point">
              <Image src={money} alt="money" width={30} height={30} />
              <p>30K</p>
            </div>
            <div className="point">
              <Image src={diamond} alt="diamond" width={30} height={30} />
              <p>10</p>
            </div>
            <div className="point">
              {" "}
              <Image src={dumbbells} alt="diamond" width={30} height={30} />
              <p>1668</p>
            </div>
            <div className="point">
              {" "}
              <Image src={xp} alt="diamond" width={30} height={30} />
              <p>400</p>
            </div>
          </div>
        </div>
        <p className="correct">
          Your best attempt: <span>5</span> correct answers
        </p>
        <ButtonHugging>START TEST</ButtonHugging>
      </QuizType>
    </_QuizContainer>
  );
};
export default QuizContainer;
