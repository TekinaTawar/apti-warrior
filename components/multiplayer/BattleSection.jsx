import styled from "styled-components";
import ContainerWithHead from "../shared/ContainerWithHead";
import BorderButton from "../shared/BorderButton";
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
        cursor: pointer;
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
                <GiBookmarklet /> Module
              </th>
              <th>
                <BsHeart /> Life
              </th>
              <th>
                <GiUnlitBomb /> Damage Multiplier
              </th>
              <th>
                <IoIosPeople />
                Opponents
              </th>
              <th>
                <AiOutlineFieldTime /> Time
              </th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
              <tr>
                <td>Geometry</td>
                <td>100</td>
                <td>2X</td>
                <td>1/6</td>
                <td>36</td>
                <td>
                  <button>Join</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </_Battles>
      <div className="battleButtons">
        <BorderButton className="button1">Join Battle</BorderButton>

        <BorderButton className="button2">Create Battle</BorderButton>
      </div>
    </_BattleSection>
  );
};
export default BattleSection;
