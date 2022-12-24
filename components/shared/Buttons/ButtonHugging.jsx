import styled from "styled-components";
import Button from "./Button";
import buttonHugging from "@/public/images/buttonHugging.svg";
import ContainerWithImage from "../Containers/ContainerWithImage";

const _ButtonHugging = styled(ContainerWithImage)`
  width: 70%;
  height: 60%;
  font-size: var(--step-0);
  text-transform: uppercase;
  padding-inline: var(--space-s-m);
  padding-block: var(--space-2xs-xs);
  /* background-color: transparent; */
`;

const ButtonHugging = ({ children, ...props }) => {
  return (
    <_ButtonHugging image={buttonHugging} takeExternalSize={false}>
      <Button {...props}>{children}</Button>
    </_ButtonHugging>
  );
};

export default ButtonHugging;
