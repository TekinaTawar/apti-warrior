import { useEffect, useState } from "react";
import styled from "styled-components";
// * components
import ContainerWithHead from "../shared/Containers/ContainerWithHead";
import Button1 from "../shared/Buttons/Button1";
import RadioButtonGroup from "../shared/RadioButtonGroup";
// * redux
import { useDispatch } from "react-redux";
import {
  setCurrentAttempted,
  setCurrentQuestionIndex,
  setCurrentSkipped,
  toggleFlag,
} from "@/redux/test/testSlice";

const _QuestionContainer = styled(ContainerWithHead)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr fit-content(50px);
  grid-template-areas: "questionSection options" "buttons buttons";
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

const QuestionContainer = ({ currentTestDetails, currentQuestionIndex }) => {
  const dispatch = useDispatch();
  const currentQuestion = currentTestDetails?.questions?.[currentQuestionIndex];

  const [option, setOption] = useState();

  useEffect(() => {
    if (currentQuestion) {
      if (currentQuestion?.answer_id) setOption(currentQuestion?.answer_id);
    }
  }, [currentQuestion]);

  const optionsValue = (currentQuestion?.options ?? []).map((_option, i) => {
    return {
      value: _option.id,
      label: (
        <>
          <span>{String.fromCharCode(65 + i)}</span>
          <p>{_option.option}</p>
        </>
      ),
    };
  });

  const saveAndNext = () => {
    if (option) dispatch(setCurrentAttempted(option));
    else dispatch(setCurrentSkipped());
    currentTestDetails?.questions.length === currentQuestionIndex + 1
      ? ""
      : dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));

    setOption(undefined);
  };

  return (
    <_QuestionContainer
      title="English"
      gridArea="QuestionContainer"
      withLegs={true}
    >
      <QuestionSection>
        <p className="question">{currentQuestion?.question || "Question"}</p>
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
          sectionName="options"
          options={optionsValue}
          option={option}
          setOption={setOption}
        />
        <h3>Sponsored By</h3>
      </QuestionsOptions>

      <Buttons>
        <Button1
          isDisabled={currentQuestionIndex === 0}
          onClick={() =>
            !currentQuestionIndex
              ? ""
              : dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1))
          }
        >
          Previous
        </Button1>
        <Button1 onClick={() => setOption(undefined)}>Clear Response</Button1>
        <Button1 onClick={() => dispatch(toggleFlag())}>
          {currentQuestion?.is_flagged ? "Un" : ""}
          Flag Question
        </Button1>
        <Button1 onClick={saveAndNext}>
          {currentTestDetails?.questions.length === currentQuestionIndex + 1
            ? "Save"
            : "Save & Next"}
        </Button1>
      </Buttons>
    </_QuestionContainer>
  );
};
export default QuestionContainer;
