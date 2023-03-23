import { useState } from "react";
import styled from "styled-components";

import Button1 from "../shared/Buttons/Button1";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";
import RadioButtonGroup from "../shared/RadioButtonGroup";

//* React Icons

import { IoTimerOutline } from "react-icons/io5";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsBinoculars } from "react-icons/bs";
import { ImBin, ImTarget } from "react-icons/im";
import CircularBar from "../shared/CircularBar";

//*Styled Component

const _Mathematics = styled(ContainerWithHead)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 10% 1fr fit-content(50px);
  grid-template-areas: "points points " " questionSection options" "  buttons buttons";
  /* background-color: blue; */
`;

const QuestionPoint = styled.div`
  grid-area: points;
  background-color: var(--secondary-0);
  width: 100%;
  border: 3px solid var(--primary-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Metropolis;
  font-weight: 700;
  font-size: var(--step-0);
  .time {
    display: flex;
    padding-inline: var(--space-3xs-2xs);
    gap: var(--space-3xs-2xs);
  }
  .points {
    display: flex;
    justify-content: space-between;
    gap: var(--space-m-l);
    padding-inline: var(--space-3xs-2xs);

    .correctPoint {
      span {
        color: var(--good);
      }
    }

    .wrongPoint {
      span {
        color: var(--neutral);
      }
    }
  }
`;

const QuestionSection = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid var(--primary-0);
  border-radius: 10px;
  padding: 20px;
  display: grid;
  gap: var(--space-xs-s);

  .question {
    font-weight: 500;
    font-size: var(--step--1);
    line-height: 25px;
  }
  .questionsImage {
    padding-top: var(--space-2xl-3xl);
    width: var(--space-2xl-3xl);
    height: var(--space-2xl-3xl);
    background-color: var(--gray--100);
  }

  .zoomInOut {
    display: flex;
    align-items: flex-end;
    justify-content: end;

    :hover {
      cursor: pointer;
    }
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--space-xs-s);

    .option {
      display: flex;
      align-items: center;
      gap: var(--space-xs-s);

      p {
        font-size: var(--step--1);
        border: 1px solid #fdcf1d;
        border-radius: 10px;
        padding: 10px;
      }
      .categoriesImage {
        width: var(--space-xl-2xl);
        height: var(--space-xl-2xl);
        background-color: var(--gray--100);
      }
    }
  }
  .levelContainer {
    width: 100%;
    height: 100%;
    border: 3px solid var(--primary-0);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-3xs-2xs);

    .levelOptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: var(--space-2xl-3xl);
      height: var(--space-2xl-3xl);
      border: 2px solid var(--primary-0);
      font-family: stormfaze;
      gap: var(--space-2xs-xs);

      .levelType {
        display: grid;
        grid-template-columns: fit-Content(20px), 1fr;
        text-align: center;
        font-family: "Metropolis";
        font-style: normal;
        font-weight: 700;
        color: #ffffff;

        p {
          height: 6vh;
          width: 8vw;
          font-size: var(--step-0);
          border: 5px solid var(--primary-0);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          height: 11vh;
          width: 8vw;
          font-family: "Metropolis";
          font-size: var(--step-3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--whtie);
          background: linear-gradient(
            232.88deg,
            var(--primary-0)-25.32%,
            rgba(35, 0, 0, 0) 71.54%
          );
          border-bottom: 5px solid var(--primary-0);
          border-left: 5px solid var(--primary-0);
          border-right: 5px solid var(--primary-0);
        }
      }
    }
  }
`;

const QuestionsOptions = styled.div`
  h3 {
    text-align: center;
  }
`;

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-xs);
  padding-top: var(--space-xs);
`;

//*Styled Component

const Mathematics2 = () => {
  const [option, setOption] = useState({});

  const optionsValue = [
    ["A", 123],
    ["B", 214],
    ["C", 134],
    ["D", 234],
  ].map((option, key) => {
    return {
      value: option[1],
      label: (
        <>
          <span>{option[0]}</span>
          <p>{option[1]}</p>
        </>
      ),
    };
  });

  //   console.log(optionsValue);
  return (
    <_Mathematics gridArea="Mathematics">
      <QuestionPoint>
        <div className="time">
          <p>Time left :</p>
          <IoTimerOutline
            style={{
              color: "var(--primary-0)",
            }}
          />
          <p className="elapsedTime">00:45</p>
        </div>
        <div className="points">
          <p className="correctPoint">
            Points Correct : <span>+180</span>
          </p>
          <p className="wrongPoint">
            Wrong : <span>-45</span>
          </p>
        </div>
      </QuestionPoint>
      <QuestionSection>
        <div className="questionDetails">
          <p className="question">
            Q. Annual income of A is 10% more than of B whereas income of B is
            20% more than that of C. If monthly income of C is $ 2000 then what
            is the sum of monthly incomes of A, B and C? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsa distinctio magni expedita,
            laborum quas illum repudiandae inventore ea aut est esse dolore ad
            iusto!
          </p>
          <br />
          <div className="questionsImage"></div>
          <div className="zoomInOut">
            <FaSearchMinus
              style={{
                width: "30px",
                height: "22px",
                color: "var(--primary-0)",
              }}
            />
            <FaSearchPlus
              style={{
                width: "30px",
                height: "22px",
                color: "var(--primary-0)",
              }}
            />
          </div>
        </div>
        <div className="levelContainer">
          <div className="levelOptions">
            <ImTarget
              style={{
                height: "10vh",
                width: "7vw",
                color: "var(--primary-0)",
              }}
            />
            <p>
              Attack{" "}
              <AiOutlineInfoCircle
                style={{
                  color: "var(--primary-0)",
                }}
              />
            </p>
          </div>
          <div className="levelOptions">
            <BsBinoculars
              style={{
                height: "10vh",
                width: "7vw",
                color: "var(--primary-0)",
              }}
            />
            <p>
              Repels{" "}
              <AiOutlineInfoCircle
                style={{
                  color: "var(--primary-0)",
                }}
              />
            </p>
          </div>
          <div className="levelOptions">
            <ImBin
              style={{
                height: "10vh",
                width: "7vw",
                color: "var(--primary-0)",
              }}
            />
            <p>
              Deletes{" "}
              <AiOutlineInfoCircle
                style={{
                  color: "var(--primary-0)",
                }}
              />
            </p>
          </div>
          <div className="levelOptions" style={{ border: "none" }}>
            <div>
              <CircularBar />
            </div>
          </div>
          <div className="levelOptions" style={{ border: "none" }}>
            <div className="levelType">
              <p>Level</p>
              <h3>Easy</h3>
            </div>
          </div>
        </div>
      </QuestionSection>

      <QuestionsOptions>
        <RadioButtonGroup
          sectionName="options"
          options={optionsValue}
          option={option}
          setOption={setOption}
        />
        <h3>Sponsored By</h3>
      </QuestionsOptions>

      <Buttons>
        <Button1>Submit</Button1>
      </Buttons>
    </_Mathematics>
  );
};
export default Mathematics2;
