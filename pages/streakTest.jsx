import QuestionsNo from "@/components/questions/QuestionsNo";
import Header from "@/components/shared/Header";
import styled from "styled-components";
import Mathematics from "@/components/questions/Mathematics";



const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas:
    "Header  Header"
    "Mathematics  QuestionsNo";
  row-gap: var(--space-xs-s);
  align-content: stretch;
`;

const streakTest = () => {
  return (
    <MainContainer>
      <Header />
      <Mathematics />
      <QuestionsNo/>
    </MainContainer>
  );
};
export default streakTest;
