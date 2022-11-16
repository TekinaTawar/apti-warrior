import Image from "next/legacy/image";
import buttonBorder from "@/public/images/buttonBorder2.svg";
import styled from "styled-components";


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

  & .borderbuttonContainer {
    width: 99%;
    height: 90%;
    margin-inline: auto;
    /* background-color: var(--primary-200); */
    background-image: linear-gradient(180deg, var(--primary-0), var(--primary-200));
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: stretch;
    align-items: center;
    padding-inline: var(--space-2xs);

    i {
      position: absolute;
      /* background-color: blue; */
      justify-self: stretch;
      /* width: 200px; */
      width: 60%;
      height: var(--space-xl-2xl);
      height: 100%
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

const IconButtonPrimary = ({children, icon}) => {
  return (
    <_IconButtonPrimary>
      <Image src={buttonBorder} alt="button border" layout="fill" />
      <div className="borderbuttonContainer">
        <i>
          <Image src={icon} alt="book" layout="fill" />
        </i>
        <div className="buttonContent">{children}</div>
      </div>
    </_IconButtonPrimary>
  );
};
export default IconButtonPrimary;
