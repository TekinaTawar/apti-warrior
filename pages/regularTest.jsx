import QuestionsNo from "@/components/questions(Streak Test)/QuestionsNo";
import Header from "@/components/shared/Header";
import styled from "styled-components";
import Mathematics from "@/components/questions(Streak Test)/Mathematics";
import BorderButton from "@/components/shared/BorderButton";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "Mathematics  QuestionsNo"
    "Mathematics  buttons";
  row-gap: var(--space-xs-s);
  align-content: stretch;
`;

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-xs);
`;

const streakTest = () => {
  return (
    <MainContainer>
      <Header />
      <Mathematics />
      <QuestionsNo />
      <Buttons>
        <BorderButton>Submit test</BorderButton>
      </Buttons>
    </MainContainer>
  );
};
export default streakTest;
