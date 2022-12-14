import styled from "styled-components";
import { useState } from "react";
import ContainerWithHead from "../shared/ContainerWithHead";

const _QuestionsNo = styled(ContainerWithHead)`
  padding: var(--space-xs);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas: "question question question question question";
  align-items: center;
  justify-items: center;
  row-gap: var(--space-xs);
  column-gap: var(--space-xs);

  h3 {
    grid-area: question;
  }

  .questionNumber {
    border: 1px solid white;
    background-color: white;
    color: black;
    font-size: var(--step-1);
    font-weight: 700;
    align-self: stretch;
    justify-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const QuestionsNo = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const questions = [...Array(40)];
  const questionStatus = ["Idle", "Correct", "Incorrect", "Flagged", "Skipped"];
  const [questionsState, setQuestionsState] = useState(
    questions.map((question, index) => {
      var obj = {};
      obj[index] = questionStatus[getRandomInt(5)];
      return obj;
    })
  );

  console.log(questionsState);
  return (
    <_QuestionsNo title="23:45" grid-area="QuestionsNo">
      <h3>Questions</h3>
      {[...Array(40)].map((_, i) => (
        <div className="questionNumber" key={i}>
          {i}
        </div>
      ))}
    </_QuestionsNo>
  );
};
export default QuestionsNo;
