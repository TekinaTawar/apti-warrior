import styled, {css} from "styled-components";

const _ContainerCard = styled.div`
  border: 1px solid var(--primary-0);
  color: white;
  position: relative;
  display: grid;
  grid-template-columns: fit-content(10px) 1fr;
  grid-template-rows: fit-content(10px) 1fr; // check in dev tools if this is working
  /* justify-items: space-between; */
  align-items: center;
  padding-inline: var(--space-2xs-xs);
  padding-block: var(--space-2xs-xs);
  gap: var(--space-2xs-xs);
  grid-template-areas: "cardImage cardTitle" "progressBar progressBar";
  margin-bottom: var(--space-2xs-xs);

  :hover {
    cursor: pointer;
  }

  ${({ selected }) =>
    selected && css`
    background: var(--secondary-0);
  `}

  .cardImage {
    grid-area: cardImage;
    width: var(--space-l-xl);
    height: var(--space-l-xl);
    background-color: var(--gray--100);
    /* position: absolute; */
  }

  .cardTitle {
    grid-area: cardTitle;
    font-size: var(--step-1);
    font-family: metropolis;
    font-weight: 700;
  }

  .progressBar {
    grid-area: progressBar;
    display: grid;
    grid-template-columns: 1fr fit-content(50px);
    /* background-color: var(--gray--100); */
    align-items: center;
    column-gap: var(--space-2xs-xs);

    .progressBarContainer {
      border: 2px solid var(--primary-0);
      height: var(--space-s);
      border-radius: 3px;
      box-shadow: 0px 0px 20px 0px var(--primary--100);
      display: flex;
      justify-content: start;
      align-items: center;

      .progressLine {
        /* background-color: var(--primary-0); */
        height: 90%;
        width: ${({ cardProgress })=> cardProgress? cardProgress: 0}%;   
        
        background-image: repeating-linear-gradient(
          115deg,
          transparent 0px 1px,
          var(--primary-0) 2px 6px
        );
      }
    }
    span {
      /* background-color: pink; */
      font-family: stormfaze;
      font-size: var(--step--1);
    }
  }
`;

const ContainerCard = ({ onClick, cardId, cardTitle, cardProgress, selected }) => {
  return (
    <_ContainerCard onClick={() => onClick(cardId)} selected={selected} cardProgress={cardProgress}>
      <div className="cardImage"></div>
      <div className="cardTitle">{cardTitle??"cardTitle"}</div>
      <div className="progressBar">
        <div className="progressBarContainer">
          <div className="progressLine"> </div>
        </div>
        <span> {cardProgress}%</span>
      </div>
    </_ContainerCard>
  );
};
export default ContainerCard;
