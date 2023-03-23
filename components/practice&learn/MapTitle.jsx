import styled from "styled-components";

const Border = styled.div`
  grid-area: mapTitle;
  justify-self: start;
  margin-left: var(--space-xs-s);
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: -4px;
    left: 5.2%;
    background-color: var(--primary-0);
    width: 50%;
    height: 50%;
    /* z-index: 50; */
    z-index: -1;
    clip-path: polygon(12% 0, 100% 0, 88% 100%, 0% 100%);
    /* transform: translate(-2px, 20px); */
  }

  ::before{
    content: "";
    position: absolute;
    bottom: -4px;
    right: 5.2%;
    background-color: var(--primary-0);
    width: 50%;
    height: 50%;
    clip-path: polygon(12% 0, 100% 0, 88% 100%, 0% 100%);
  }
`;

const _MapTitle = styled.div`
  color: white;
  padding-block: var(--space-2xs-xs);
  padding-inline: var(--space-l-xl);
  font-size: var(--step--2);
  font-weight: 700;
  text-transform: uppercase;

  clip-path: polygon(12% 0, 100% 0, 88% 100%, 0% 100%);
  font-family: Metropolis;
  background: var(--black);
  /* transform: skew(-25deg); */
`;

const MapTitle = () => {
  return (
    <Border>
      <_MapTitle>
        <h1>Digital Marketing</h1>
      </_MapTitle>
    </Border>
  );
};
export default MapTitle;
