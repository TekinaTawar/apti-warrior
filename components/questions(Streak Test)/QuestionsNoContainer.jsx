import styled, { css } from "styled-components";
// * components
import ContainerWithHead from "../shared/Containers/ContainerWithHead";
import Timer from "./Timer";
// * redux
import { useDispatch } from "react-redux";
import { setCurrentQuestionIndex } from "@/redux/test/testSlice";

const _QuestionsNoContainer = styled(ContainerWithHead)`
  padding: var(--space-xs);
  display: grid;
  grid-auto-rows: fit-content(20px);
  grid-template-columns: repeat(5, 1fr);
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

const QuestionNoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

  &.attempted {
    color: white;
    background: linear-gradient(180deg, #b7e255 -17.56%, #4da717 49.54%);
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    border-radius: 2px;
    clip-path: polygon(31% 0, 70% 0, 100% 36%, 100% 100%, 0 100%, 0 38%);
    /* transform: translateY(2px); */
    padding-top: 6px;
  }

  &.skipped {
    color: white;
    background: linear-gradient(180.4deg, #ac2708 35.82%, #ed5206 99.66%);
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    clip-path: polygon(31% 0, 70% 0, 100% 36%, 100% 100%, 0 100%, 0 38%);
    padding-top: 6px;
  }

  &.current {
    // not in use yet
    color: white;
    background: #7c579c;
    border: 0.5px solid #ffffff;
    border-radius: 50%;
  }
`;

const Flag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(40%, 40%);
  background: linear-gradient(180deg, #b7e255 -17.56%, #4da717 49.54%);
  border-radius: 50%;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: 0.5px solid white;
  font-weight: 700;
`;

const QuestionsNoContainer = ({currentTestDetails, currentQuestionIndex}) => {
  const dispatch = useDispatch();
  var questions = [];
  var time = 0;

  if (currentTestDetails) {
    questions = currentTestDetails.questions;
    time = currentTestDetails?.test_data.time;
  }

  const getQuestionStatus = (question, i) => {
    if (i=== currentQuestionIndex) return "current";
    if (question.is_attempted) return "attempted";
    else if (question.is_skipped) return "skipped";
  };

  return (
    <_QuestionsNoContainer
      title={<Timer time={time} />}
      gridArea="QuestionsNoContainer"
    >
      <h3>Questions</h3>
      {questions.map((question, i) => (
        <QuestionNoContainer
          key={question.id}
          onClick={() => dispatch(setCurrentQuestionIndex(i))}
        >
          <QuestionNumber className={getQuestionStatus(question, i)}>
            {i + 1}
          </QuestionNumber>
          {question.is_flagged && <Flag>F</Flag>}
        </QuestionNoContainer>
      ))}
    </_QuestionsNoContainer>
  );
};
export default QuestionsNoContainer;
