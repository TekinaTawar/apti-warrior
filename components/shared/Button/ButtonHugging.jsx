import styled from "styled-components";
import Button from "./Button";;
import buttonHugging from "@/public/images/buttonHugging.svg";
import ContainerWithImage from "../ContainerWithImage";

const _ButtonHugging = styled(ContainerWithImage)`
    width: 95%;
    height: 95%;
    font-size: var(--step-0);
    text-transform: uppercase;
    /* background-color: transparent; */
`

const ButtonHugging = ({ children, ...props }) => {
  return (
    <_ButtonHugging image={buttonHugging} takeExternalSize={false}>
      <Button {...props}>{children}</Button>

    </_ButtonHugging>
  );
};

export default ButtonHugging;
