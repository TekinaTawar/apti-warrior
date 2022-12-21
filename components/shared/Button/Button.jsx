import styled, {css} from "styled-components";
import ContainerWithImage from "../ContainerWithImage";

const _Button = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: inherit;
  ${({buttonState})=> {
    switch(buttonState){
      case "disabled": return css`
        
      `
      case "loading": return css`
      
      `
    }
  }}
`

// button with 3 states disabled, loading
const Button = ({ className, children, buttonState, ...props }) => {
  return (
    <_Button {...props} buttonState={buttonState}>
      {children}
    </_Button>
  );
};
export default Button;
