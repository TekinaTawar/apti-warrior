import styled from "styled-components";
import BorderButton from "../shared/BorderButton";
import RadioButtonGroup from "../shared/RadioButtonGroup";
import { useState } from "react";
import ContainerWithHead from "../shared/ContainerWithHead";

const _Mathematics = styled(ContainerWithHead)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr fit-content(50px);
  grid-template-areas: "questionSection options" "buttons buttons";
  /* background-color: blue; */
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  row-gap: var(--space-xs);
  padding: 1%;
`;

const QuestionSection = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #fdcf1d;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .question {
    font-weight: 500;
    font-size: var(--step--1);
  }
  .questionsImage {
    width: var(--space-2xl-3xl);
    height: var(--space-2xl-3xl);
    background-color: var(--gray--100);
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
  justify-content: space-between;
  padding-bottom: var(--space-xs);
`;

const Mathematics = () => {
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

  // console.log(optionsValue);
  return (
    <_Mathematics title="Mathematics" grid-area="Mathematics">
      <QuestionSection>
        <p className="question">
          Q. Annual income of A is 10% more than of B whereas income of B is 20%
          more than that of C. If monthly income of C is $ 2000 then what is the
          sum of monthly incomes of A, B and C?
        </p>
        <div className="questionsImage"></div>
        <div className="options">
          {[...Array(4)].map((_, i) => (
            <div className="option" key={i}>
              <p>A</p>
              <div className="categoriesImage"></div>
            </div>
          ))}
        </div>
      </QuestionSection>

      <QuestionsOptions>
        <h3>Options</h3>
        <RadioButtonGroup
          groupName="options"
          options={optionsValue}
          option={option}
          setOption={setOption}
        />
        <h3>Sponsored By</h3>
      </QuestionsOptions>

      <Buttons>
        <BorderButton>Previous</BorderButton>
        <BorderButton>Clear Response</BorderButton>
        <BorderButton>Flag Question</BorderButton>
        <BorderButton>Save & Next</BorderButton>
      </Buttons>
    </_Mathematics>
  );
};
export default Mathematics;
