import styled from "styled-components";

const _ProgressBar = styled.div`
  width: 100%;
  background-color: black;
  height: 15px;
  position: relative;
`;
const Twinkle = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => props.progress ?? 50}%;
  /* background-color: orange; */
  display: flex;
  align-items: center;

  ::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background-color: blue;
    z-index: 90;
    left: 100%;
    transform: translateX(-60%);
    border-radius: 50%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ffffff 4.69%,
      rgba(251, 255, 206, 0.7) 16.67%,
      rgba(253, 205, 83, 0.37) 47.92%,
      rgba(255, 228, 255, 0) 100%
    );
    mix-blend-mode: normal;
  }
`;

const Progress = styled.div`
  background-color: var(--primary-0);
  height: 100%;
  width: ${(props) => props.progress ?? 50}%;
  border-top: 4px solid var(--primary--200);
  clip-path: polygon(0 0, 100% 0, 98% 100%, 0 100%);
`;

const ProgressBar = ({ progress = 75, className }) => {
  return (
    <_ProgressBar className={className}>
      <Twinkle progress={progress} />
      <Progress progress={progress}></Progress>
    </_ProgressBar>
  );
};
export default ProgressBar;
