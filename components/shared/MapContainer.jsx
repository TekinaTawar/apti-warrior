import Image from "next/image";
import React from "react";
import styled from "styled-components";
import map from "@/public/images/Practice&Learn/map.svg";
import levelCard from "@/public/images/Practice&Learn/LevelCard.svg";
// import star from "@/public/images/star.svg"

const _MapContainer = styled.div`
  display: grid;
`;
const LevelCards = styled.div`
  position: relative;
  padding-left: var(--space-3xl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  z-index: 1;

  .levelCard {
    display: grid;
    position: relative;
  }
  .card1 {
    justify-self: end;
  }

  .card2 {
    grid-column: 3 / 4;
  }
  span {
    position: absolute;
    font-family: stormfaze;
    font-size: var(--step-4);
    color: var(--whtie);
    padding: var(--space-xs);
  }
`;
const MapTitle = styled.span`
  color: white;
  margin-left: 4%;
  padding-left: 2%;
  padding-top: 0.5%;
  font-family: Metropolis;
  border: 2px solid var(--primary-0);
  background: var(--black);
  width: 30%;
  height: 20%;

  transform: skew(-20deg);
`;

const MapContainer = () => {
  return (
    <_MapContainer>
      <Image src={map} alt="map" layout="fill" />
      <MapTitle>
        <h1>Digital Marketing</h1>
      </MapTitle>

      <LevelCards>
        <div className="levelCard card1">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>2</span>
        </div>
        <div className="levelCard card2">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>4</span>
        </div>
        <div className="levelCard card3">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>6</span>
        </div>
        <div className="levelCard card4">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          {/* <> */}
          <span>1</span>
          {/* <Image src={star} alt="star" width={20} height={20} /> */}
          {/* </> */}
        </div>
        <div className="levelCard card5">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>3</span>
        </div>
        <div className="levelCard card6">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>5</span>
        </div>
        <div className="levelCard card7">
          <Image src={levelCard} alt="LevelCard" width={70} height={100} />
          <span>7</span>
        </div>
      </LevelCards>
    </_MapContainer>
  );
};

export default MapContainer;
