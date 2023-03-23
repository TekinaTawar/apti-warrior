import styled from "styled-components";

const _CircularBar = styled.div`
  .circle-wrap {
    /* margin: 150px auto; */
    width: 150px;
    height: 150px;
    background: #fefcff;
    border-radius: 50%;
    border: 1px solid #cdcbd0;
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .circle-wrap .inside-circle {
    width: 122px;
    height: 122px;
    border-radius: 50%;
    background: var(--black);
    line-height: var(--step-4);
    text-align: center;
    margin-top: var(--step--3);
    margin-left: var(--step--3);
    color: var(--primary-0);
    position: absolute;
    /* z-index: 100; */
    font-weight: 700;
    font-size: var(--step-2);
  }

  /* color animation */

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: var(--primary-0);
  }

  .mask.full,
  .circle .fill {
    animation: fill ease-in-out 3s;
    transform: rotate(135deg);
  }

  @keyframes fill {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(135deg);
    }
  }
`;

const CircularBar = () => {
  return (
    <_CircularBar>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 7 units </div>
        </div>
      </div>
    </_CircularBar>
  );
};
export default CircularBar;
