import Image from "next/image";

import styled from "styled-components";
import Frame from "@/public/images/Practice&Learn/fream_1.svg";
import openFrame from "@/public/images/Practice&Learn/open_fram.svg";
import lock from "@/public/images/Practice&Learn/lock.svg";
import StreakIcon from "@/public/images/Practice&Learn/strak_icon.svg";
import React, { useState } from "react";
import PointDetails from "./PointDetails";
import BorderButton from "./BorderButton";

import VerticalContainer from "@/components/shared/VerticalContainer"



const SubjectCards = styled.div`
  /* background-color: red; */
  z-index: 1;
  width: 76%;
  margin-inline: auto;
  height: 78%;
  top: 14%;
  left: 5%;
  position: relative;
  //inside items
  display: grid;
  row-gap: 5%;
  grid-template-rows: repeat(3, 1fr);

  color: white;

  .subjectCard {
    color: white;
    position: relative;
    display: grid;
    align-items: center;
    justify-content: space-evenly;
    padding-inline: var(--space-2xs-xs);
    padding-block: var(--space-2xs-xs);
    gap: var(--space-2xs-xs);
    grid-template-areas: "subjectImage subjectTitle";
    cursor: pointer;

    .subjectImage {
      grid-area: subjectImage;
      width: var(--space-l-xl);
      height: var(--space-l-xl);
      gap: var(--space-2xs-xs);
      /* background-color: var(--gray--100); */
      /* position: absolute; */
      z-index: 1;
    }

    .subjectTitle {
      grid-area: subjectTitle;
      font-size: var(--step-1);
      font-family: metropolis;
      font-weight: 700;
      z-index: 1;
    }
    .subjectImage1 {
      z-index: 1;
      color: black;
    }
    .subjectTitle1 {
      font-size: var(--step--3);
      font-family: metropolis;
      font-weight: 700;
      z-index: 1;
      color: black;
    }
    .PointDetails {
      z-index: 1;

      & span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const ChooseBattle = () => {
  const [showCard, setShowCard] = useState(true);

  return (
    <VerticalContainer title="Choose Battle">
      <SubjectCards>
        <h3>Topic: Digital Marketing</h3>
        {/* {[...Array(3)].map((e, i) => ( */}
        <div className="subjectCard" onClick={() => setShowCard(!showCard)}>
          {showCard ? (
            <React.Fragment>
              <Image src={Frame} alt="Frame" layout="fill" />
              <div className="subjectImage">
                <Image src={StreakIcon} alt="StreakIcon" layout="fill" />
              </div>
              <div className="subjectTitle">Streak </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Image
                src={openFrame}
                alt="openFrame"
                layout="fill"
                className="openImage"
              />
              <div className="subjectImage1">
                <Image
                  src={StreakIcon}
                  alt="StreakIcon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="subjectTitle1">Streak </span>
              <div className="PointDetails">
                <PointDetails />
                <BorderButton>
                  <span>
                    <Image src={lock} alt="lock" width={20} height={20} />
                    <h3>Play</h3>
                  </span>
                </BorderButton>
              </div>
            </React.Fragment>
          )}
        </div>
        {/* ))} */}
      </SubjectCards>
      </VerticalContainer>
  );
};

export default ChooseBattle;
