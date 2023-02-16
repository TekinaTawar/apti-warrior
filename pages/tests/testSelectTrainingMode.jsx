import { useState } from "react";
import styled from "styled-components";
import SelectTrainingMode from "@/components/shared/Modals/SelectTrainingMode";
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
    <div>
      <MainContainer>
        <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        {showModal && <SelectTrainingMode setShowModal={setShowModal} />}
      </MainContainer>
    </div>
  );
};
export default Test;
