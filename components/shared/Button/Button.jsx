import ContainerWithImage from "../ContainerWithImage";

// button with 3 states disabled, loading
const Button = ({ className, children, buttonState, image, ...props }) => {
  return (
    <button {...props}>
      <ContainerWithImage image={image}>{children}</ContainerWithImage>
    </button>
  );
};
export default Button;
