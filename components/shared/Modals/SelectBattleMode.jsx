import Image from "next/legacy/image";
import styled from "styled-components";
import Modal from "./Modal";
//images
import singlePlayer from "@/public/images/dashboard/singlePlayer.svg";
import multiPlayer from "@/public/images/dashboard/multiPlayer.svg";
import league from "@/public/images/dashboard/league.svg";
import lock from "@/public/images/Practice&Learn/lock.svg";
import { AiFillStar } from "react-icons/ai";

const PlayerContainer = styled.div`
  grid-area: player;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-xl-2xl);

  .container {
    width: 20%;
    height: 50%;
    display: flex;
    flex-direction: column;
    border: 6px solid #ffdb3a;
    gap: var(--space-2xs-xs);
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-xs-s);
    position: relative;
    background: rgba(18, 18, 18, 0.8);

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
      font-size: var(--space-2xs);
      gap: var(--space-3xs-2xs);

      border-bottom: 2.5px solid #fdcf1d;

      i {
        color: var(--primary-0);
        width: var(--space-m-l);

        & * {
          width: 6%;
          height: 8%;
        }
      }

      .activeUsers {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: var(--space-3xs-2xs);
        padding-block: var(--space-4xs-3xs);
      }

      .ComingSoonCard {
        background-color: #434343;
        width: 85%;
        height: 32%;
        color: #fdcf1d;
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
        font-size: var(--step--2);
        padding-block: var(--space-4xs-3xs);
      }
      .description {
        font-size: var(--step--3);
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
            <span>225/300</span>
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
              <li>425</li>
              <li
                style={{
                  background: "#89CC13",
                  border: "1px solid #FDCF1D",
                  paddingBlock: "var(--space-4xs-3xs)",
                }}
              >
                325 Online
              </li>
            </ul>
          </div>
          <div className="playerDetails">
            <div className="playerTitle">Multiplayer</div>
            <div className="description">
              Play againts real players around the world.Think you are good?
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
