import styled from "styled-components";
import Image from "next/legacy/image"; //after this is made try to change it to not legacy

//docs: children will be automatically centered.
//docs: border is the image that will be used as the border.
//docs: widthpercent and heightpercent tells how much outside the border will be of continer.
//docs: give children a width of 100% and height of 100% to make it fill the container.
const _BorderContainer = styled.div`
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

const BorderContainer = ({
  className,
  children,
  border,
  widthpercent,
  heightpercent,
}) => {
  return (
    <_BorderContainer
      className={className}
      widthpercent={widthpercent}
      heightpercent={heightpercent}
    >
      <Image src={border} alt="border" layout="fill" />
      <div className="container">{children}</div>
    </_BorderContainer>
  );
};
export default BorderContainer;
