import styled from "styled-components";
import ContainerWithImage from "@/components/shared/ContainerWithImage";
import borderVid from "@/public/images/training2/borderVid.svg";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = () => {
  return (
    <MainContainer>
      <ContainerWithImage image={borderVid}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem
        quod iste blanditiis, velit eligendi rem exercitationem! Ratione
        repellendus voluptatem aut illo molestias id minus ipsam quo
        consequatur. Eveniet odit corrupti iste voluptatum, dolores optio nulla
        assumenda, debitis explicabo at mollitia maiores similique eos provident
        pariatur? Reprehenderit distinctio possimus doloremque incidunt
        corporis, corrupti fugit labore magnam veritatis velit ullam.
      </ContainerWithImage>
    </MainContainer>
  );
};
export default Test;
