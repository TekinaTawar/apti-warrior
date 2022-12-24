import styled from "styled-components";

import ContainerWithHead from "../shared/Containers/ContainerWithHead";
import ButtonHugging from "@/components/shared/Buttons/ButtonHugging";

//* Icons

import { GiBookmarklet, GiUnlitBomb } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineFieldTime } from "react-icons/ai";

const _BattleSection = styled.div`
  grid-area: BattleSection;
  display: grid;

  .battleButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .button1 {
      grid-area: button1;
    }
    .button2 {
      grid-area: button2;
    }
  }
`;

const _Battles = styled(ContainerWithHead)`
  grid-template-rows: 1fr fit-content(50px);
  grid-template-columns: 1fr 1fr;
  grid-area: "battle battle" "button1 button2";

  .battleArea {
    grid-area: battle;
    display: grid;

    table {
      border-collapse: collapse;
      th {
        height: var(--space-l);
        background-color: #5b6643;
        /* border: 2px solid #ffdb3a; */
        text-align: center;
        align-items: center;
        justify-items: center;
        gap: var(--space-3xs-2xs);
      }

      i {
        color: var(--primary-0);
        padding-inline: var(--space-3xs-2xs);
        /* background-color: black; */
      }

      td {
        text-align: center;
        padding-inline: var(--space-3xs-2xs);
        padding-block: var(--space-3xs-2xs);
      }
      td button {
        border: none;
        background: #89cc13;
        width: 100%;
        padding: 10%;
        color: #fff;
        border-radius: 3.75261px;
        font-weight: 700;
      }
    }
  }
`;

const BattleSection = () => {
  return (
    <_BattleSection>
      <_Battles title="Battles">
        <div className="battleArea">
          <table>
            <thead>
              <th>
                <i>
                  <GiBookmarklet />
                </i>
                <span>Module</span>
              </th>
              <th>
                <i>
                  <BsHeart />
                </i>
                <span>Life</span>
              </th>
              <th>
                <i>
                  <GiUnlitBomb />
                </i>
                <span>Damage Multiplier</span>
              </th>
              <th>
                <i>
                  <IoIosPeople />
                </i>
                <span>Opponents</span>
              </th>
              <th>
                <i>
                  <AiOutlineFieldTime />
                </i>
                <span>Time</span>
              </th>
              <th></th>
            </thead>
            <tbody>
              {[...Array(8)].map((e, i) => (
                <tr key={i}>
                  <td>Geometry</td>
                  <td>100</td>
                  <td>2X</td>
                  <td>1/6</td>
                  <td>36</td>
                  <td>
                    <button>Join</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </_Battles>
      <div className="battleButtons">
        <ButtonHugging className="button1">Join Battle</ButtonHugging>

        <ButtonHugging className="button2">Create Battle</ButtonHugging>
      </div>
    </_BattleSection>
  );
};
export default BattleSection;
