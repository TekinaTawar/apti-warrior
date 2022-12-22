import styled, { css } from "styled-components";

const _Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: inherit;
  text-transform: inherit;
  padding-inline: var(--space-s-m);
  padding-block: var(--space-2xs-xs);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  font-family: stormfaze;
  white-space: nowrap;

  :hover {
    transform: scale(110%);
  }

  ${({ buttonState }) => {
    switch (buttonState) {
      case "disabled":
        return css`
          opacity: 0.532;
          z-index: 10;
          background-color: black;
          color: darkslategray;
          border-radius: 5px;
          cursor: not-allowed;

          :hover {
            transform: scale(100%);
          }
        `;
      case "loading":
        return css`
          cursor: progress;
          color: transparent;

          &::before {
            content: "";
            box-sizing: border-box;
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 5px solid transparent;
            border-top-color: white;
            border-right-color: white;
            animation: loading 0.3s linear infinite;
          }
          @keyframes loading {
            to {
              transform: rotate(360deg);
            }
          }
        `;
    }
  }}
`;

//* button with 3 states disabled, loading

const Button = ({ className, children, isLoading, isDisabled, ...props }) => {
  const getButtonState = () => {
    if (isLoading == true && isDisabled == true) {
      return "loading";
    } else if (isLoading == true) {
      return "loading";
    } else if (isDisabled == true) {
      return "disabled";
    } else {
      return null;
    }
  };
  return (
    <_Button {...props} buttonState={getButtonState()} className={className}>
      {children}
    </_Button>
  );
};
export default Button;
