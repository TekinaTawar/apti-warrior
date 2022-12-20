import styled from "styled-components";
import BorderButton from "../shared/BorderButton";
import ContainerWithHead from "../shared/ContainerWithHead";
import RadioButtonGroup from "../shared/RadioButtonGroup";
import { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";

const _Mathematics = styled(ContainerWithHead)`
  grid-area: Mathematics;

  .containerContent {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 10% 1fr fit-content(50px);
    grid-template-areas: "points points " " questionSection options" "  buttons buttons";
    /* background-color: blue; */
    width: 98%;
    height: 98%;
    align-self: center;
    justify-self: center;
  }
`;

const QuestionPoint = styled.div`
  grid-area: points;
  background-color: var(--secondary-0);
  width: 100%;
  border: 3px solid #fdcf1d;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .time {
    display: flex;
    padding-inline: var(--space-3xs-2xs);
    gap: var(--space-3xs-2xs);
  }
  .points {
    display: flex;
    justify-content: space-between;
    gap: var(--space-m-l);
    padding-inline: var(--space-3xs-2xs);
  }
`;

const QuestionSection = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #fdcf1d;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-xs-s);

  .question {
    font-weight: 500;
    font-size: var(--step--1);
  }
  .questionsImage {
    width: var(--space-2xl-3xl);
    height: var(--space-2xl-3xl);
    background-color: var(--gray--100);
  }

  .zoomInOut {
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--space-xs-s);

    .option {
      display: flex;
      align-items: center;
      gap: var(--space-xs-s);

      p {
        font-size: var(--step--1);
        border: 1px solid #fdcf1d;
        border-radius: 10px;
        padding: 10px;
      }
      .categoriesImage {
        width: var(--space-xl-2xl);
        height: var(--space-xl-2xl);
        background-color: var(--gray--100);
      }
    }
  }
`;

const QuestionsOptions = styled.div`
  h3 {
    text-align: center;
  }
`;

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-xs);
  padding-top: var(--space-xs);
`;

const Mathematics2 = () => {
  const [option, setOption] = useState({});

  const optionsValue = [
    ["A", 123],
    ["B", 214],
    ["C", 134],
    ["D", 234],
  ].map((option, key) => {
    return {
      value: option[1],
      label: (
        <>
          <span>{option[0]}</span>
          <p>{option[1]}</p>
        </>
      ),
    };
  });

  //   console.log(optionsValue);
  return (
    <_Mathematics title="Mathematics">
      <QuestionPoint>
        <div className="time">
          <p>Time left</p>
          <IoTimerOutline />
          <p className="elapsedTime">00:45</p>
        </div>
        <div className="points">
          <p className="correctPoint">Points Correct: +180</p>
          <p className="wrongPoint">Wrong : -45</p>
        </div>
      </QuestionPoint>
      <QuestionSection>
        <p className="question">
          Q. Annual income of A is 10% more than of B whereas income of B is 20%
          more than that of C. If monthly income of C is $ 2000 then what is the
          sum of monthly incomes of A, B and C?
        </p>
        <div className="questionsImage"></div>
        <div className="zoomInOut">
          <FaSearchMinus />
          <FaSearchPlus />
        </div>
      </QuestionSection>

      <QuestionsOptions>
        <RadioButtonGroup
          groupName="options"
          options={optionsValue}
          option={option}
          setOption={setOption}
        />
        <h3>Sponsored By</h3>
      </QuestionsOptions>

      <Buttons>
        <BorderButton>Submit</BorderButton>
        {/* <BorderButton>Clear Response</BorderButton>
        <BorderButton>Flag Question</BorderButton>
        <BorderButton>Save & Next</BorderButton> */}
      </Buttons>
    </_Mathematics>
  );
};
export default Mathematics2;
