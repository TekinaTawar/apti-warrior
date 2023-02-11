import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import containerAuthImage from "@/public/images/containerAuth.svg";
import styled from "styled-components";

const _ContainerAuth = styled(ContainerWithImage)`
  z-index: 1;
  background-color: transparent;
  /* background-color: orange; */
  height: 100%;
  width: 88%;
  color: white;
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
`;

const ContainerAuth = ({ children, title, className, onSubmit }) => {
  return (
    <_ContainerAuth
      takeExternalSize={false}
      image={containerAuthImage}
      style={{
        width: "clamp(22.5rem, calc(6.51rem + 71.05vw), 30.94rem)",
        height: "clamp(550px, 8vh, 650px)",
      }}
    >
      <h1 className="containerTitle">{title}</h1>
      <Content className={className} onSubmit={onSubmit}>
        {children}
      </Content>
    </_ContainerAuth>
  );
};
export default ContainerAuth;
