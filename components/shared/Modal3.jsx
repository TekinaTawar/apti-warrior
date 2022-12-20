import styled from "styled-components";

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  /* opacity: 0.5; */
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const _Modal = styled.div` 
  position: absolute;
`;

const Modal3 = ({ children, setShowModal  }) => {
  return (
    <>
      <ModalOverlay onClick={() => setShowModal(false)}></ModalOverlay>
      <_Modal>
        {children}
      </_Modal>
    </>
  );
};
export default Modal3;
