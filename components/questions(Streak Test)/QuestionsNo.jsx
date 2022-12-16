import styled from "styled-components";
import VerticalContainer from "../shared/VerticalContainer";
import { useState } from "react";

const _QuestionsNo = styled(VerticalContainer)`
  grid-area: QuestionsNo;

  .containerContent {
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

      background: linear-gradient(180deg, #b7e255 -17.56%, #4da717 49.54%);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: black;
      font-size: var(--step-1);
      font-weight: 700;
      align-self: stretch;
      justify-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
    <_QuestionsNo title="23:45">
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
