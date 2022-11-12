import Image from "next/legacy/image";
import buttonBorder from "public/images/buttonBorder2.svg";
import styled from "styled-components";
import book from "public/images/dashboard/book.svg";
import analytics from "public/images/dashboard/analytics.svg";
import bg from "public/images/bg.png";

const _IconButton = styled.button`
  // this is a transparent button which contains absolute "borderImage" and "borderButtonContianer" is black and have width and height such that it seems it is indise the borderImage.
  position: relative;
  color: white;
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
    background-color: var(--gray-200);
    display: grid;
    grid-template-columns: repeat(2, fit-content(1px));
    justify-content: space-around;
    align-content: stretch;
    align-items: center;
    padding-inline: var(--space-2xs);

    i {
      position: relative;
      /* background-color: blue; */
      width: var(--space-xl-2xl);
      height: var(--space-xl-2xl);
    }

    .buttonContent {
      /* background-color: orange; */
      align-self: stretch;
      display: flex;
      align-items: center;
    }
  }
`;

const IconButton = () => {
  return (
    <_IconButton>
      <Image src={buttonBorder} alt="button border" layout="fill" />
      <div className="borderbuttonContainer">
        <i>
          <Image src={book} alt="book" layout="fill" />
        </i>
        <div className="buttonContent">Training</div>
      </div>
    </_IconButton>
  );
};
export default IconButton;
