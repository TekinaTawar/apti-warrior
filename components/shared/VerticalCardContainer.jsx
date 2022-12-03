import verticalContainer from "@/public/images/training/verticalContainer.svg";
import styled from "styled-components";
import Image from "next/legacy/image";

const _VerticalCardContainer = styled.div`
  /* background-color: pink; */
  grid-area: subjectsContainer;
  position: relative;
  margin-left: var(--space-xs-s);
  display: grid;

  .title {
    position: absolute;
    color: white;
    font-size: var(--step-1);
    top: 2vh;
    justify-self: center;
  }
`;

const SubjectCards = styled.div`
  /* background-color: red; */
  z-index: 1;
  width: 76%;
  margin-inline: auto;
  height: 78%;
  top: 14%;
  position: relative;
  //inside items
  display: grid;
  row-gap: 1%;
  grid-template-rows: repeat(4, 1fr);

  .subjectCard {
    border: 1px solid var(--primary-0);
    color: white;
    position: relative;
    display: grid;
    grid-template-columns: fit-content(10px) 1fr;
    grid-template-rows: fit-content(10px) 1fr; // check in dev tools if this is working
    /* justify-items: space-between; */
    align-items: center;
    padding-inline: var(--space-2xs-xs);
    padding-block: var(--space-2xs-xs);
    gap: var(--space-2xs-xs);
    grid-template-areas: "subjectImage subjectTitle" "progressBar progressBar";

    .subjectImage {
      grid-area: subjectImage;
      width: var(--space-l-xl);
      height: var(--space-l-xl);
      background-color: var(--gray--100);
      /* position: absolute; */
    }

    .subjectTitle {
      grid-area: subjectTitle;
      font-size: var(--step-1);
      font-family: metropolis;
      font-weight: 700;
    }

    .progressBar {
      grid-area: progressBar;
      display: grid;
      grid-template-columns: 1fr fit-content(50px);
      /* background-color: var(--gray--100); */
      align-items: center;
      column-gap: var(--space-2xs-xs);

      .progressBarContainer {
        border: 2px solid var(--primary-0);
        height: var(--space-s);
        border-radius: 3px;
        box-shadow: 0px 0px 20px 0px var(--primary--100);

        .progressLine {
          /* background-color: var(--primary-0); */
          height: 100%;
          width: 75%;
          border: 1px solid black;
          background-image: repeating-linear-gradient(
            115deg,
            transparent 0px 1px,
            var(--primary-0) 2px 6px
          );
        }
      }
      span {
        /* background-color: pink; */
        font-family: stormfaze;
        font-size: var(--step--1);
      }
    }
  }
`;

const VerticalCardContainer = () => {
  return (
    <_VerticalCardContainer>
      <Image src={verticalContainer} alt="horizontalContainer" layout="fill" />
      <h3 className="title">Subject</h3>
      <SubjectCards>
        {[...Array(4)].map((e, i) => (
          <div className="subjectCard" key={i}>
            <div className="subjectImage"></div>
            <div className="subjectTitle">Digital Marketing</div>
            <div className="progressBar">
              <div className="progressBarContainer">
                <div className="progressLine"> </div>
              </div>
              <span> 75% </span>
            </div>
          </div>
        ))}
      </SubjectCards>
    </_VerticalCardContainer>
  );
};
export default VerticalCardContainer;
