import styled from "styled-components";
import Image from "next/image";

const _ContainerWithImage = styled.div`
  position: relative;
  display: grid;
  /* grid-template-columns: 1fr;
  grid-template-rows: 1fr; */
  ${({ takeExternalSize }) => takeExternalSize && `min-height: 100%;`}

  justify-items: center;
  align-items: center;
`;

//container should get small then border
const _Container = styled.div`
  width: 98%;
  height: 97%;
  background-color: black;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWithImage2 = ({
  children,
  image,
  className,
  takeExternalSize = true,
  ...props
}) => {
  return (
    <_ContainerWithImage {...props} takeExternalSize={takeExternalSize}>
      <Image
        src={image}
        alt=""
        fill
        style={{
          pointerEvents: "none",
        }}
      />
      <_Container className={className}>{children}</_Container>
    </_ContainerWithImage>
  );
};
export default ContainerWithImage2;
