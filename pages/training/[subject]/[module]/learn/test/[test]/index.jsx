import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
// * components
import Header from "@/components/shared/Header";
import QuestionContainer from "@/components/questions(Streak Test)/QuestionContainer";
import QuestionsNoContainer from "@/components/questions(Streak Test)/QuestionsNoContainer";
import Button1 from "@/components/shared/Buttons/Button1";
// * redux
import { useDispatch, useSelector } from "react-redux";
import {
  useGetTestDetailsQuery,
  useSubmitTestMutation,
  setCurrentTestDetails,
  selectCurrentQuestionIndex,
  selectCurrentTestDetails,
  setTestResult,
} from "@/redux/test/testSlice";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr fit-content(50px);
  grid-template-areas:
    "Header  Header"
    "QuestionContainer  QuestionsNoContainer"
    "QuestionContainer  submitTestButton";
  row-gap: var(--space-xs-s);
  column-gap: var(--space-xs-s);
  align-content: stretch;
`;

const Buttons = styled.div`
  grid-area: submitTestButton;
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-xs);
`;

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [submitTest, { isLoading }] = useSubmitTestMutation();

  const { subject, module, test } = router.query;
  const { data: testDetails, isSuccess: isTestDetailsSuccess } =
    useGetTestDetailsQuery(test, { skip: !test });

  useEffect(() => {
    if (isTestDetailsSuccess) {
      dispatch(setCurrentTestDetails(testDetails));
    }
  }, [isTestDetailsSuccess]);

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const currentTestDetails = useSelector(selectCurrentTestDetails);

  const handleSubmitTest = async () => {
    const { data } = await submitTest(currentTestDetails);

    if (data) {
      dispatch(setTestResult(data));
      router.push(
        `/training/${subject}/${module}/learn/test/${test}/result/${data.id}`
      );
    }
  };

  return (
    <MainContainer>
      <Header />
      <QuestionContainer
        currentTestDetails={currentTestDetails}
        currentQuestionIndex={currentQuestionIndex}
      />
      <QuestionsNoContainer
        currentTestDetails={currentTestDetails}
        currentQuestionIndex={currentQuestionIndex}
      />
      <Buttons>
        <Button1 isLoading={isLoading} onClick={handleSubmitTest}>
          Submit test
        </Button1>
      </Buttons>
    </MainContainer>
  );
};
export default Index;
