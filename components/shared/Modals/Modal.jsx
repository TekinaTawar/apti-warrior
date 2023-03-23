import styled from "styled-components";

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);
  /* opacity: 0.5; */
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const _Modal = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: var(--step-0);
`;

const Modal = ({ children, className, setShowModal }) => {
  return (
    <>
      <ModalOverlay onClick={() => setShowModal(false)}></ModalOverlay>
      <_Modal className={className}>{children}</_Modal>
    </>
  );
};
export default Modal;
