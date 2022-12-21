import styled from "styled-components";
import Button from "./Button";
import ContainerWithImage from "../ContainerWithImage";
import buttonHugging from "@/public/images/buttonHugging.svg";

const _ButtonHugging = styled(ContainerWithImage)`
    width: 95%;
    height: 95%;
    font-size: var(--step-0);
    text-transform: uppercase;
    background-color: transparent;
`

const ButtonHugging = ({ children, ...props }) => {
  return (
    <_ButtonHugging image={buttonHugging}>
      <Button {...props}>{children}</Button>

    </_ButtonHugging>
  );
};

export default ButtonHugging;
