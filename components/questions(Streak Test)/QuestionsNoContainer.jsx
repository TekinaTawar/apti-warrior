import styled, { css } from "styled-components";
import { useState } from "react";
import ContainerWithHead from "../shared/ContainerWithHead";

const _QuestionsNoContainer = styled(ContainerWithHead)`
  padding: var(--space-xs);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: repeat(4, 50px); */
  grid-template-areas: "question question question question question";
  align-items: center;
  justify-items: center;
  row-gap: var(--space-xs);
  column-gap: var(--space-xs);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  h3 {
    grid-area: question;
  }
`;

const QuestionNumber = styled.div`
  height: var(--space-m-l);
  width: var(--space-m-l);
  background-color: white;
  color: black;
  font-size: var(--step-1);
  font-weight: 700;
  /* align-self: stretch;
  justify-self: stretch; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ questionState }) => {
    switch (questionState) {
      case "Correct":
        return css`
          color: white;
          background: linear-gradient(180deg, #b7e255 -17.56%, #4da717 49.54%);
          /* border: 1px solid rgba(255, 255, 255, 0.3); */
          border-radius: 2px;
          clip-path: polygon(31% 0, 70% 0, 100% 36%, 100% 100%, 0 100%, 0 38%);
          /* transform: translateY(2px); */
          padding-top: 6px;
        `;
      case "Incorrect":
        return css`
          color: white;
          background: linear-gradient(180.4deg, #ac2708 35.82%, #ed5206 99.66%);
          /* border: 1px solid rgba(255, 255, 255, 0.3); */
          clip-path: polygon(31% 0, 70% 0, 100% 36%, 100% 100%, 0 100%, 0 38%);
          padding-top: 6px;
        `;
      case "Skipped":
        return css`
          color: white;
          background: #7c579c;
          border: 0.5px solid #ffffff;
          border-radius: 50%;
        `;
      case "Flagged":
        return css`
          color: white;
          background: #7c579c;
          border: 0.5px solid #ffffff;
          border-radius: 50%;
          position: relative;
          ::after{

            position: absolute;
            content: "F";
            font-size: 12px;
            width: 50%;
            height: 50%;
            background: linear-gradient(180deg, #b7e255 -17.56%, #4da717 49.54%);
            border-radius: 50%;
            border: .5px solid white;
            transform: translate(80%, 80%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: black
          }
        `;
    }
  }}
`;

const QuestionsNoContainer = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const questions = [...Array(60)];
  const questionStatus = ["Idle", "Correct", "Incorrect", "Flagged", "Skipped"];
  const [questionsState, setQuestionsState] = useState(
    questions.map((question, index) => {
      var obj = {};
      obj[index] = questionStatus[getRandomInt(5)];
      return obj;
    })
  );

  console.log(questionsState[1][1]);

  return (
    <_QuestionsNoContainer title="23:45" gridArea="QuestionsNoContainer">
      <h3>Questions</h3>
      {questions.map((_, i) => (
        <QuestionNumber key={i} questionState={questionsState[i][i]}>
          {i}
        </QuestionNumber>
      ))}
    </_QuestionsNoContainer>
  );
};
export default QuestionsNoContainer;

// #octagon {
//   width: 100px;
//   height: 100px;
//   background: red;
//   position: relative;
// }
// #octagon:before {
//   content: "";
//   width: 100px;
//   height: 0;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border-bottom: 29px solid red;
//   border-left: 29px solid #eee;
//   border-right: 29px solid #eee;
// }
// #octagon:after {
//   content: "";
//   width: 100px;
//   height: 0;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// }
