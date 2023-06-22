import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import containerAuthImage from "@/public/images/containerAuth.svg";
import styled from "styled-components";

const _ContainerAuth = styled.div`
  /* border: 1px solid red; */
  width: clamp(22.5rem, calc(6.51rem + 71.05vw), 30.94rem);
  height: clamp(600px, 8vh, 650px);

  @media screen and (max-width: 896px) and (orientation: landscape) {
    /* display: none; */
    height: 97%;
    width: 50%;
    max-height: clamp(600px, 8vh, 650px);
  }
`;

const _ContainerWithImage = styled(ContainerWithImage)`
  z-index: 1;
  background-color: transparent;
  height: 100%;
  width: 88%;
  color: white;
  /* border: 1px solid blue;  */
  display: grid;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: var(--space-xs-s);

  .containerTitle {
    font-family: "stormfaze";
    font-size: var(--step-0);
    color: #ffd976;
  }
`;
const Content = styled.form`
  width: 100%;
  height: 100%;
  padding-bottom: var(--space-s-m);
  /* border: 1px solid green; // */
`;

// for now i am giving classname to Content just for sake of ease but if i face
// ...problem giving classname to _ContainerAuth and then accessing Content won't be a problem.
const ContainerAuth = ({ children, title = "india", className, onSubmit, ...props }) => {
  return (
    <_ContainerAuth>
      <_ContainerWithImage image={containerAuthImage}>
        <h1 className="containerTitle">{title}</h1>
        <Content className={className} onSubmit={onSubmit}>
          {children}
        </Content>
      </_ContainerWithImage>
    </_ContainerAuth>
  );
};
export default ContainerAuth;
