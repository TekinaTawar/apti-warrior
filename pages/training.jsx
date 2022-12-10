import Image from "next/legacy/image";
import styled from "styled-components";
import horizontalContainer from "@/public/images/training/horizontalContainer.svg";
import Header from "@/components/shared/Header";
import buttonBorder2 from "@/public/images/buttonBorder2.svg";
import VerticalCardContainer from "@/components/shared/VerticalCardContainer"; // this is vertical not horizontal



const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: "Header Header" "subjectsContainer modulesContainer";
  column-gap: var(--space-xs-s);
  row-gap: var(--space-2xs-xs);

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

const Training = () => {
  return (
    <MainContainer>
      <Header />
      <VerticalCardContainer />
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
export default Training;
