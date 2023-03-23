import Image from "next/legacy/image";
import styled from "styled-components";
import Modal from "./Modal";
//images
import singlePlayer from "@/public/images/dashboard/singlePlayer.svg";
import multiPlayer from "@/public/images/dashboard/multiPlayer.svg";
import league from "@/public/images/dashboard/league.svg";
import rectangleColBattle from "@/public/images/Practice&Learn/rectangleColBattle.svg";
import lock from "@/public/images/Practice&Learn/lock.svg";
import { AiFillStar } from "react-icons/ai";

const PlayerContainer = styled.div`
  grid-area: player;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: var(--space-xl-2xl);
  padding-block: var(--space-xl-2xl);
  gap: var(--space-3xl-4xl);

  .container {
    width: var(--space-5xl-6xl);
    height: var(--space-6xl-7xl);
    display: flex;
    flex-direction: column;
    border: 6px solid var(--primary-0);
    gap: var(--space-2xs-xs);
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-xs-s);
    position: relative;
    background: rgba(18, 18, 18, 0.8);
    :hover {
      cursor: pointer;
    }

    .moduleProgress {
      display: grid;
      grid-template-rows: 1fr;
      justify-items: center;
      column-gap: var(--space-2xs-xs);

      .progressBarContainer {
        border: 2px solid var(--primary-0);
        height: var(--space-s);
        border-radius: 3px;
        box-shadow: 0px 0px 20px 0px var(--primary--100);
        justify-self: stretch;

        .progressLine {
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
    }

    .points {
      align-items: center;
      text-align: center;

      font-size: var(--step--1);
      gap: var(--space-3xs-2xs);
      font-family: "Metropolis";
      font-weight: 800;
      padding-block: var(--space-4xs-3xs);
      border-bottom: 2.5px solid var(--primary-0);

      i {
        color: var(--primary-0);
      }
      .scores {
        padding-inline: var(--space-4xs-3xs);
      }

      .activeUsers {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: var(--space-3xs-2xs);
        padding-block: var(--space-4xs-3xs);
      }

      .ComingSoonCard {
        background-color: var(--gray-100);
        width: 87%;
        height: 32%;
        color: var(--primary-0);
        position: absolute;
        top: var(--space-2xl-3xl);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: var(--step-2);
        font-weight: 700;
      }
    }

    .playerDetails {
      .playerTitle {
        font-size: var(--step-1);
        padding-block: var(--space-4xs-3xs);
        font-family: Metropolis;
        font-weight: 800;
      }
      .description {
        font-family: Metropolis;
        font-weight: 400;
        font-size: var(--step--3);
        line-height: 1.4;
      }
    }
  }
`;

const SelectBattleMode = ({ setShowModal }) => {
  return (
    <Modal onClose={() => setShowModal(false)} setShowModal={setShowModal}>
      <PlayerContainer>
        <div className="container">
          <Image src={singlePlayer} alt="singlePlayer" fill />
          <div className="moduleProgress">
            <div className="progressBarContainer">
              <div className="progressLine"> </div>
            </div>
          </div>
          <div className="points">
            <i>
              <AiFillStar />
            </i>
            <span className="scores">225/300</span>
          </div>
          <div className="playerDetails">
            <div className="playerTitle">Single Player</div>
            <div className="description">
              Prepare yourself for the big leagues. play, practice and conquer
              the topics.
            </div>
          </div>
        </div>
        <div className="container">
          <Image src={multiPlayer} alt="multiPlayer" fill />
          <div className="points">
            <ul className="activeUsers">
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: " var(--space-3xs-2xs)",
                }}
              >
                <li>
                  <Image
                    src={rectangleColBattle}
                    alt="rectangleColBattle"
                    fill
                  />
                </li>
                <li>425</li>
              </li>
              <li
                style={{
                  alignItems: "center",
                  background: "#89CC13",
                  border: "1px solid #FDCF1D",
                  paddingBlock: "var(--space-3xs-2xs)",
                  paddingInline: "var(--space-4xs-3xs)",
                }}
              >
                325 Online
              </li>
            </ul>
          </div>
          <div className="playerDetails">
            <div className="playerTitle">Multiplayer</div>
            <div className="description">
              Play against real players around the world.Think you are good?
              Than prove it.
            </div>
          </div>
        </div>
        <div className="container">
          <Image src={league} alt="league" fill />
          <div className="points">
            <ul className="ComingSoonCard ">
              <li>
                <Image src={lock} alt="lock" width={30} height={30} />
              </li>
              <li>Coming Soon</li>
            </ul>
          </div>
          <br />
          <div className="playerDetails">
            <div className="playerTitle">League</div>
            <div className="description">
              Prepare yourself for the big leagues. play, practice and conquer
              the topics.
            </div>
          </div>
        </div>
      </PlayerContainer>
    </Modal>
  );
};
export default SelectBattleMode;
