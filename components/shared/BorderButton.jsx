import styled from "styled-components";
import buttonBorder from "public/images/buttonBorder.svg";
import Image from "next/legacy/image";
import { Children } from "react";

const _BorderButton = styled.button`
  background-color: var(--military-green);
  color: var(--golden-yellow4);
  text-transform: uppercase;
  font-family: metropolis;
  font-weight: 800;
  padding: 0.8rem 1.5rem; //maybe change later.
  border-radius: 5px;
  position: relative; //to position border;
  border: none;
`;

const BorderButton = ({ children }) => {
  return (
    <_BorderButton>
      <Image src={buttonBorder} alt="bg" layout="fill" objectFit="fill" />
      {children}
    </_BorderButton>
  );
};
export default BorderButton;
