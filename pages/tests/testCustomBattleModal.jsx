import CustomBattle from "@/components/customBattle/CustomBattle";
import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const testCustomBattleModal = () => {
  return (
    <MainContainer>
      <CustomBattle />
    </MainContainer>
  );
};
export default testCustomBattleModal;
