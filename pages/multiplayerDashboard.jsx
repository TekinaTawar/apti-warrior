import React from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import horizontalContainer from "@/public/images/training/horizontalContainer.svg";

// import backArrow from "public/images/training/backArrow.svg";
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

const ModuleItems = styled.div`
  /* background-color: pink; */
  z-index: 1;
  width: 97%;
  margin-inline: auto;
  height: 83%;
  position: relative;
  top: 11%;

  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  row-gap: 1%;
  column-gap: 1%;
  color: white;

  table {
    border: 1px solid #ffdb3a;
   
    th {
      background-color: #5b6643;
      border: 2px solid #ffdb3a;
      text-align: center
    }
    td{
      text-align: center
    }
    td button {
      background: #89cc13;
      width: 100%;
      padding: 10%;
      color: #fff;
      border-radius: 3.75261px;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const multiplayerDashboard = () => {
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

        <ModuleItems>
          <table>
            <tr>
              <th>Module</th>
              <th>Max Life</th>
              <th>Damage Multiplier</th>
              <th>Opponents</th>
              <th>Time</th>
              <th>Time</th>
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
          </table>
        </ModuleItems>
      </div>
    </MainContainer>
  );
};

export default multiplayerDashboard;
