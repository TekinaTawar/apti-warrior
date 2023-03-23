import styled from "styled-components";
import Button from "./Button";
import ContainerWithImage from "../Containers/ContainerWithImage";
import buttonBorder1 from "@/public/images/buttonBorder1.svg";

const _Button1 = styled(ContainerWithImage)`
  width: 95%;
  height: 95%;
  font-size: var(--step-0);
  text-transform: uppercase;
  background-color: var(--secondary-0);
  font-family: stormfaze;
  color: white;
  padding-inline: var(--space-s-m);
  padding-block: var(--space-2xs-xs);

`;

const Button1 = ({ children, className, ...props }) => {
  return (
    <_Button1 image={buttonBorder1} takeExternalSize={false} className={className} style={{justifySelf: "center"}}>
      <Button {...props}>{children}</Button>
    </_Button1>
  );
};

export default Button1;
