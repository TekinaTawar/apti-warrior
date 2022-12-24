import styled from "styled-components";
import ContainerWithHead from "@/components/shared/ContainerWithHead";
import ContainerWithImage from "@/components/shared/ContainerWithImage";


//* svg Icons

import verticalBoxInsideBorder from "@/public/images/verticalBoxInsideBorder.svg";

const _SubjectsContainer = styled(ContainerWithHead)`
  padding: 2%;
  margin-left: 2%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "frame";
  align-content: stretch;
  min-height: 100%;
`;

const _ContainerWithImage = styled(ContainerWithImage)`
  width: 88%;
  height: 90%;
  /* padding-inline: var(--space-xs-s);
  padding-block: var(--space-s-m); */
  overflow-y: scroll;
  display: block;
`;

const SubjectCard = styled.div`
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
  margin-bottom: var(--space-2xs-xs);

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
`;

const SubjectsContainer = () => {
  return (
    <_SubjectsContainer title="Subjects" gridArea="subjectsContainer">
      <_ContainerWithImage image={verticalBoxInsideBorder}  style={{ gridArea: "frame" }}>
        {[...Array(6)].map((e, i) => (
          <SubjectCard key={i}>
            <div className="subjectImage"></div>
            <div className="subjectTitle">Digital Marketing</div>
            <div className="progressBar">
              <div className="progressBarContainer">
                <div className="progressLine"> </div>
              </div>
              <span> 75% </span>
            </div>
          </SubjectCard>
        ))}
      </_ContainerWithImage>
    </_SubjectsContainer>
  );
};
export default SubjectsContainer;
