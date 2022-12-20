import Image from "next/legacy/image";
import styled from "styled-components";
import ContainerWithHead from "../shared/ContainerWithHead";
import face from "@/public/images/Practice&Learn/face.svg";
import { AiFillHeart } from "react-icons/ai";

const _Battle = styled(ContainerWithHead)`
  grid-area: opponents;
`;
const ModuleCards = styled.div`
  z-index: 1;
  width: 90%;
  margin-inline: auto;
  height: 70%;
  position: relative;
  display: grid;
  top: 1%;
  row-gap: 2%;
  column-gap: 1%;

  .moduleCard {
    border: 1px solid yellow;
    color: white;
    position: relative;
    display: grid;
    grid-template-columns: fit-content(10px) 1fr;
    grid-template-rows: fit-content(10px) 1fr; // check in dev tools if this is working
    /* justify-items: space-between; */
    align-items: center;
    padding-inline: var(--space-4xs-3xs);
    padding-block: var(--space-4xs-3xs);
    gap: var(--space-2xs-xs);
    grid-template-areas: "moduleImage moduleTitle" "progressBar progressBar";
    border-radius: 10px;

    .moduleImage {
      grid-area: moduleImage;
      width: var(--space-m-l);
      height: var(--space-m-l);
    }

    .moduleTitle {
      grid-area: moduleTitle;
      font-size: var(--step--1);
      font-family: metropolis;
      font-weight: 700;
    }

    .moduleProgress {
      grid-area: progressBar;
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      padding-bottom: 5px;

      .progressBarContainer {
        border: 2px solid var(--primary-0);
        height: var(--space-2xs);
        border-radius: 8px;
        justify-self: stretch;

        .progressLine {
          height: 100%;
          width: 75%;
          border: 1px solid black;
          background: red;
        }
      }
      span {
        font-family: metropolis;
        font-size: var(--step--2);
      }
    }
  }
`;

const Battle = () => {
  return (
    <_Battle title="Battle">
      <ModuleCards>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="moduleCard">
            <div className="moduleImage">
              <Image src={face} alt="face" fill />
            </div>
            <div className="moduleTitle">Module {i}</div>

            <div className="moduleProgress">
              <span>Life</span>
              <AiFillHeart style={{ color: "red" }} />
              <div className="progressBarContainer">
                <div className="progressLine"> </div>
              </div>
            </div>
          </div>
        ))}
      </ModuleCards>
    </_Battle>
  );
};
export default Battle;
