import Modal3 from "@/components/shared/Modal3";
import styled from "styled-components";
import { useState } from "react";
import CustomBattle from "@/components/customBattle/CustomBattle";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test2 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MainContainer>
      <button onClick={() => setShowModal(true)}>showModal</button>
      {showModal && (
        <Modal3 setShowModal={setShowModal}>
          <CustomBattle closeModal={() => setShowModal(false)} />
        </Modal3>
      )}
    </MainContainer>
  );
};
export default Test2;
