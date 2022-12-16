import modalsvg from "@/public/images/authContainer.svg";
import Image from "next/image";

import styled from "styled-components";

const _Modal = styled.form`
  position: relative; //to position the image
  width: clamp(22.5rem, calc(6.51rem + 71.05vw), 30.94rem);
  height: clamp(500px, 8vh, 650px);
  padding-block: 4rem 2rem; // to accomodate the border top and bottom.
  color: white;

  & > * {
    z-index: 2;
  }

  & > .modalHead {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: "stormfaze";
    font-size: var(--step-0);
    color: #ffd976;
    top: 1px;
  }
`;

//the modal box with border that scales automatically.
const Modal = ({ className, children, modalHead }) => {
  return (
    <_Modal className={className}>
      <Image
        src={modalsvg}
        alt="login modal"
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: "fill"
        }} />
      <h1 className="modalHead">{modalHead}</h1>
      {children}
    </_Modal>
  );
};
export default Modal;
