import styled from "styled-components";
import ContainerWithHead from "@/components/shared/Containers/ContainerWithHead";
import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
//* svg Icons
import verticalBoxInsideBorder from "@/public/images/verticalBoxInsideBorder.svg";

const _VerticalContainer = styled(ContainerWithHead)`
  padding: 2%;
  margin-left: 2%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "frame";
  align-content: stretch;
  min-height: 100%;
`;

const _ContainerWithImage = styled(ContainerWithImage)`
  width: 88%;
  height: 90%;
  /* padding-inline: var(--space-xs-s);
  padding-block: var(--space-s-m); */
  overflow-y: scroll;
  display: block;
`;

const VerticalContainer = ({
  className,
  children,
  title,
  gridArea,
  ...props
}) => {
  return (
    <_VerticalContainer
      className={className}
      title={title ?? "Title"}
      gridArea={gridArea ?? "verticalContainer"}
      {...props}
    >
      <_ContainerWithImage
        image={verticalBoxInsideBorder}
        style={{ gridArea: "frame" }}
      >
        {children}
      </_ContainerWithImage>
    </_VerticalContainer>
  );
};
export default VerticalContainer;
