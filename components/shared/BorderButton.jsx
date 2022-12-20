import styled from "styled-components";
import buttonBorder1 from "@/public/images/buttonBorder1.svg";
import Image from "next/image";

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

const BorderButton = ({ children, onClick }) => {
  return (
  <_BorderButton onClick={onClick}>
      <Image
        src={buttonBorder1}
        alt="bg"
        fill
        sizes="100vw"
        style={{
          objectFit: "fill",
        }}
      />
      {children}
    </_BorderButton>
  );
};
export default BorderButton;
