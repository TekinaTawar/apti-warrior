import Image from "next/legacy/image";
import styled from "styled-components";
import map from "@/public/images/Practice&Learn/map.png";
import LevelCard from "@/components/practice&learn/LevelCard";
// import star from "@/public/images/star.svg"

const _MapContainer = styled.div`
  grid-area: mapContainer;
  position: relative;
  background-color: var(--gray-200);

  display: grid;
  align-content: center;
`;

const LevelCards = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-inline: auto;
  row-gap: 140px;
  width: 80%;

  > :nth-child(even) {
    grid-area: 1 / auto / span 2 / auto;
    align-self: start;
    /* display: none; */
    ::before {
      content: "";
      position: absolute;
      background-image: linear-gradient(
        90deg,
        #fff,
        #fff 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 20px 1px;
      width: 150%;
      height: 4px;
      transform: rotate(45deg) translateX(110%) translateY(300%);
      z-index: -200;
    }
  }

  > :nth-child(odd) {
    /* grid-area: auto / 2 / auto / span 2; */
    grid-area: 2 / auto / span 2 / auto;
    position: relative;

    ::before {
      content: "";
      position: absolute;
      background-image: linear-gradient(
        90deg,
        #fff,
        #fff 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 20px 1px;
      width: 150%;
      height: 4px;
      transform: rotate(-45deg) translateX(80%) translateY(400%);
      z-index: -200;
    }
  }
`;

const MapContainer = () => {
  return (
    <_MapContainer>
      <Image src={map} alt="map" layout="fill" objectFit="fill" />
      <LevelCards>
        {[...Array(7)].map((_, i) => (
          <LevelCard key={i} />
        ))}
      </LevelCards>
    </_MapContainer>
  );
};

export default MapContainer;
