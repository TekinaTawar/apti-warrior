import styled from "styled-components";

import Header from "@/components/shared/Header";
import ResultContainer from "@/components/training/result/ResultContainer";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "Header" "same";
`;

const result = () => {
  return (
    <MainContainer>
      <Header />
      <ResultContainer />
    </MainContainer>
  );
};
export default result;
