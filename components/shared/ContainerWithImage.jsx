import styled from "styled-components";
import Image from "next/image";

//docs: children will be automatically centered.
//docs: border is the image that will be used as the border.
//docs: widthpercent and heightpercent tells how much outside the border will be of continer.
//docs: give children a width of 100% and height of 100% to make it fill the container.
const _ContainerWithImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  .container {
    width: ${(props) => props.widthpercent || "98%"};
    height: ${(props) => props.heightpercent || "97%"};
    //custom
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContainerWithImage = ({
  className,
  children,
  image,
  widthpercent,
  heightpercent,
}) => {
  return (
    <_ContainerWithImage
      className={className}
      widthpercent={widthpercent}
      heightpercent={heightpercent}
    >
      <Image src={image} alt="" fill />
      <div className="container">{children}</div>
    </_ContainerWithImage>
  );
};
export default ContainerWithImage;
