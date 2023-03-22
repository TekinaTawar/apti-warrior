import Image from "next/image";
import buttonBorder1 from "@/public/images/buttonBorder2.svg";
import styled, {css} from "styled-components";

const _IconButtonPrimary = styled.button`
  // this is a transparent button which contains absolute "borderImage" and "borderButtonContianer" is black and have width and height such that it seems it is indise the borderImage.
  position: relative;
  color: Black;
  font-family: stormfaze;
  font-size: var(--step-3);
  background-color: transparent;
  border: none;
  height: var(--space-3xl-4xl);
  /* width: var(--space-6xl-7xl); */
  width: var(--space-6xl-7xl);
  cursor: pointer;
  ${({ disabled }) => disabled && "cursor: not-allowed;"}

  & .borderbuttonContainer {
    width: 88%;
    height: 90%;
    margin-inline: auto;
    /* background-color: var(--primary-200); */
    background-image: linear-gradient(
      180deg,
      var(--primary-0),
      var(--primary-200)
    );
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: stretch;
    align-items: center;
    padding-inline: var(--space-2xs);
    position: relative;
    ${({ disabled }) =>
      disabled &&
      css`
        ::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--gray-200);
          opacity: 0.7;
          z-index: 2;
        }
      `}

    i {
      position: absolute;
      /* background-color: blue; */
      justify-self: stretch;
      /* width: 200px; */
      width: 60%;
      height: var(--space-xl-2xl);
      height: 100%;
    }

    .buttonContent {
      grid-column: 2/3;
      /* background-color: orange; */
      align-self: stretch;
      display: flex;
      align-items: center;
    }
  }
`;

const IconButtonPrimary = ({ children, icon, onClick, disabled = true }) => {
  return (
    <_IconButtonPrimary onClick={onClick} disabled={disabled}>
      <Image src={buttonBorder1} alt="button border" fill sizes="100vw" style={{ paddingInline: "var(--space-xs-s)",zIndex: "1"}} />
      <div className="borderbuttonContainer">
        <i>
          <Image src={icon} alt="book" fill sizes="100vw" />
        </i>
        <div className="buttonContent">{children}</div>
      </div>
    </_IconButtonPrimary>
  );
};
export default IconButtonPrimary;
