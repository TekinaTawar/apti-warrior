import Image from "next/image";
import containerHead from "@/public/images/containerHead.svg";
import styled, { css } from "styled-components";

const _ContainerWithHead = styled.div`
  display: grid;
  grid-template-rows: var(--space-l-xl) 1fr;
  grid-template-columns: 1fr;
  min-height: 100%;
  
  ${(props) => props.gridArea && `grid-area: ${props.gridArea};`}

  .head {
    /* background-color: lightblue; */
    position: relative;
    color: white;
    margin-bottom: -4px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      transform: translateY(2px);
    }
  }
`;

const Container = styled.div`
  border: 4px solid var(--primary-0);
  width: auto;
  background-color: black;
  border-radius: 8px;
  position: relative;
  color: white;
  

  ${(props) =>
    props.withLegs &&
    css`
      height: 97%;
      border-radius: 10;
      ::after,
      ::before {
        content: "";
        position: absolute;
        background-color: var(--primary-0);
        width: 15%;
        height: 3%;
        bottom: 0;
        left: 20%;
        transform: translateY(100%);
        transform: translate(-50%, 100%);
        clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
      }

      ::before {
        left: auto;
        right: 20%;
        transform: translate(50%, 100%);
        /* border-radius: 0 0  100% 50%; */
      }
    `}
`;

const ContainerWithHead = ({
  className,
  children,
  gridArea,
  title,
  withLegs = false,
}) => {
  return (
    <_ContainerWithHead gridArea={gridArea}>
      <div className="head">
        <Image
          src={containerHead}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
        <h2>{title}</h2>
      </div>
      <Container className={className} withLegs={withLegs}>
        {children}
      </Container>
    </_ContainerWithHead>
  );
};

export default ContainerWithHead;
