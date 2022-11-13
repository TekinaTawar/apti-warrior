import Image from "next/legacy/image";
import styled from "styled-components";
import horizontalContainer from "public/images/training/horizontalContainer.svg";
import verticalContainer from "public/images/training/verticalContainer.svg";
import backArrow from "public/images/training/backArrow.svg";
import Header from "components/shared/header";
import buttonBorder2 from "public/images/buttonBorder2.svg";

//making the loading bar with css

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: "header header" "subjectsContainer modulesContainer";
  column-gap: var(--space-xs-s);
  row-gap: var(--space-2xs-xs);

  .subjectsContainer {
    /* background-color: pink; */
    grid-area: subjectsContainer;
    position: relative;
    margin-left: var(--space-xs-s);
    display: grid;
  }

  .modulesContainer {
    grid-area: modulesContainer;
    position: relative;
    margin-right: var(--space-xs-s);

    display: grid;
  }

  .title {
    position: absolute;
    color: white;
    font-size: var(--step-1);
    top: 2vh;
    /* background-color: orange; */
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

const ModuleCards = styled.div`
  /* background-color: pink; */
  z-index: 1;
  width: 97%;
  margin-inline: auto;
  height: 83%;
  position: relative;
  top: 11%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1%;
  column-gap: 1%;

  .moduleCard {
    color: white;
    position: relative;
    display: grid;
    grid-template-columns: fit-content(10px) 1fr;
    grid-template-rows: fit-content(10px) 1fr; // check in dev tools if this is working
    /* justify-items: space-between; */
    align-items: center;
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-xs-s);
    gap: var(--space-2xs-xs);
    grid-template-areas: "moduleImage moduleTitle" "progressBar progressBar";

    .moduleImage {
      grid-area: moduleImage;
      width: var(--space-l-xl);
      height: var(--space-l-xl);
      background-color: var(--gray--100);
      /* position: absolute; */
    }

    .moduleTitle {
      grid-area: moduleTitle;
      font-size: var(--step-1);
      font-family: metropolis;
      font-weight: 700;
    }

    .moduleProgress {
      grid-area: progressBar;
      display: grid;
      /* grid-template-columns: 1fr fit-content(50px); */
      grid-template-rows: 1fr 1fr;
      row-gap: var(--space-2xs-xs);
      /* background-color: var(--gray--100); */
      /* align-items: center; */
      justify-items: center;
      column-gap: var(--space-2xs-xs);

      .progressBarContainer {
        border: 2px solid var(--primary-0);
        height: var(--space-s);
        border-radius: 3px;
        box-shadow: 0px 0px 20px 0px var(--primary--100);
        justify-self: stretch;

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

const training = () => {
  return (
    <MainContainer>
      <Header />
      <div className="subjectsContainer">
        <Image
          src={verticalContainer}
          alt="horizontalContainer"
          layout="fill"
        />
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
      </div>
      <div className="modulesContainer">
        <Image
          src={horizontalContainer}
          alt="verticalContainer"
          layout="fill"
        />
        <h3 className="title">Modules</h3>

        <ModuleCards>
          {[...Array(9)].map((_, i) => (
            <div key={i} className="moduleCard">
              <Image src={buttonBorder2} alt="buttonBorder" layout="fill" />
              <div className="moduleImage"></div>
              <div className="moduleTitle">Module {i}</div>
              <div className="moduleProgress">
                <div className="progressBarContainer">
                  <div className="progressLine"> </div>
                </div>
                <span> 75% </span>
              </div>
            </div>
          ))}
        </ModuleCards>
      </div>
    </MainContainer>
  );
};
export default training;
