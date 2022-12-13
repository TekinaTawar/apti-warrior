import styled from "styled-components";
import Image from "next/legacy/image";


const _DiamondButton = styled.div`
  width: var(--space-xl-2xl);
  height: var(--space-xl-2xl);
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 70.71%; // 100 / sqrt(2)
    height: 70.71%;
    transform: rotate(45deg);
    border: var(--space-4xs-3xs) solid var(--primary-0);
    background-color: var(--gray-200);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 var(--space-3xs-2xs) 1px var(--primary-0);

    & .iconContainer {
      width: 70.71%; // 100 / sqrt(2)
      height: 70.71%;
      /* background-color: orange; */
      transform: rotate(-45deg);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: var(--primary-0);
    }
  }
`;


const DiamondButton = ({icon}) => {
  return (
    <_DiamondButton>
        <button>
          {/* this is needed so that the image does not overflow out of the button */}
          <div className="iconContainer">
            <Image src={icon} alt="daily task" fill/>
          </div>
        </button>
      </_DiamondButton>
  )
}
export default DiamondButton