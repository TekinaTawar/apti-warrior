import Button from "./Button";
import ContainerWithImage from "../ContainerWithImage";
import buttonBorder1 from "@/public/images/buttonBorder1.svg";

const Button1 = ({ children, ...props }) => {
  return (
    <ContainerWithImage image={buttonBorder1}>
      <Button {...props}>{children}</Button>
    </ContainerWithImage>
  );
};

export default Button1;
