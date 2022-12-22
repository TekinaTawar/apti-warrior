import Image from "next/image";
import styled from "styled-components";

const _ContainerWithImage = styled.div`
  position: relative;
  display: grid;
  /* justify-content: center; */
  grid-template-rows: 1fr;
  min-height: 100%;
`;

const Container = styled.div`
  position: relative;
  height: 97%;
  width: 98%;
  //custom
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// !give styling like gridArea and margin that influence parent use style={{ //styles}}

const ContainerWithImage = ({ className, children, image, ...props }) => {
  return (
    <_ContainerWithImage {...props}>
      <Image
        src={image}
        alt=""
        fill
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      {/* ! if you want internal box with color to shrink give width & height directly */}
      {/* this is internal box */}

      <Container className={className}>{children}</Container>
    </_ContainerWithImage>
  );
};
export default ContainerWithImage;
