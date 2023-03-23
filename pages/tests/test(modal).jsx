import { useState } from "react";
import styled from "styled-components";
import SelectBattleMode from "@/components/shared/Modals/SelectBattleMode";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 20%;
  height: 10%;
`;

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <MainContainer>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      {showModal && <SelectBattleMode setShowModal={setShowModal}/>}
    </MainContainer>
  );
};
export default Test;
