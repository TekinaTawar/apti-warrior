import styled from "styled-components";
import ContainerWithImage from "./ContainerWithImage";

// import verticalContainer from "@/public/images/verticalContainer.svg";

const _VerticalContainer = styled(ContainerWithImage)`
  .container {
    background-color: transparent;
    z-index: 2;

    display: grid;
    grid-template-rows: 6.4% 93.6%;
    grid-template-columns: 1fr;
    justify-items: stretch;
    justify-content: stretch;
    align-items: stretch;
    align-content: stretch;
    grid-template-areas: "containerTitle" "containerContent";
  }

  .containerTitle {
    grid-area: containerTitle;
    background-color: transparent;
    align-self: center;
    justify-self: center;
    font-size: var(--step-0);
    font-weight: 700;
  }

  .containerContent {
    grid-area: containerContent;
  }
`;

const VerticalContainer = ({ className, children, title }) => {
  return (
    <_VerticalContainer
      className={className}
      image={ContainerWithImage}
      widthpercent="97%"
    >
      <div className="containerTitle">{title}</div>
      <div className="containerContent">{children}</div>
    </_VerticalContainer>
  );
};

export default VerticalContainer;
