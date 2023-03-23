import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import styled, { css } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
//#region images
import victoryHead from "@/public/images/result/victoryHead.svg";
import defeatHead from "@/public/images/result/defeatHead.svg";
import resultContainerImage from "@/public/images/result/resultContainer.svg";
import resultContainerImageDefeat from "@/public/images/result/resultContainerDefeat.svg";
import noMedal from "@/public/images/result/noMedal.svg";
import bronzeMedal from "@/public/images/result/bronzeMedal.svg";
import silverMedal from "@/public/images/result/silverMedal.svg";
import goldMedal from "@/public/images/result/goldMedal.svg";
import leafs from "@/public/images/result/leafs.svg";
import defeatLeaves from "@/public/images/result/defeatLeaves.svg"
import star from "@/public/images/icons/star.svg";
import money from "@/public/images/icons/money.png";
import diamond from "@/public/images/icons/diamond.png";
import time from "@/public/images/icons/time.svg";
import target from "@/public/images/icons/target.svg";
//#endregion images
import ProgressBar from "@/components/shared/ProgressBar/ProgressBar";
import Button1 from "@/components/shared/Buttons/Button1";
//#region redux
import { useSelector } from "react-redux";
import {
  selectTestResult,
  useGetTestResultDetailsQuery,
} from "@/redux/test/testSlice";

const Overlay = styled.div`
  grid-area: 2 / 1 / -1 / -1;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 18, 0.1);
  backdrop-filter: blur(10px);
`;

const _ResultContainer = styled.div`
  grid-area: 2 / 1 / -1 / -1;
  z-index: 1;
  align-self: center;
  justify-self: center;
`;

const ResultHead = styled(ContainerWithImage)`
  z-index: 1;
  background-color: transparent;
  height: 70%;
  width: 38%;
  align-self: flex-end;
  font-family: stormfaze;
  font-size: var(--step--3);
  font-weight: 400;
  color: var(--primary-0);

  ${({ isVictory }) =>
    !isVictory &&
    css`
      color: white;
      align-self: center;
    `}
`;

const ResultContentContainer = styled(ContainerWithImage)`
  z-index: 2;
  background-color: transparent;
  display: grid;
  padding: 50px;
  grid-auto-rows: fit-content(50px);
  grid-template-columns: repeat(2, fit-content(50px));
  grid-template-areas: "score medal" "progressBar progressBar" "message message" "assetsRecived assetsRecived" "timeTaken accuracy" "leftButton rightButton";
  row-gap: var(--space-s-m);
  column-gap: var(--space-2xs-xs);
`;
const Score = styled.div`
  grid-area: score;
  border: 2px solid var(--primary-0);
  border-radius: 8%;
  justify-self: start;
  padding-inline: var(--space-s-m);
  padding-block: 1px;
  background: linear-gradient(
    90deg,
    rgba(91, 102, 67, 0.06) 0%,
    rgba(91, 102, 67, 0.31) 18.53%,
    #5b6643 51.35%,
    rgba(91, 102, 67, 0.32) 84.92%,
    rgba(91, 102, 67, 0.06) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: stormFaze;
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    font-size: var(--step--2);
  }

  .score {
    font-size: var(--step-2);
  }
`;
const Medal = styled.div`
  grid-area: medal;
  justify-self: end;
  /* background-color: orange; */
  width: var(--space-2xl);
  height: var(--space-2xl);

  .leafsContainer {
    width: 60%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
  }
`;
const _ProgressBar = styled(ProgressBar)`
  grid-area: progressBar;
`;
const Message = styled.div`
  grid-area: message;
  justify-self: center;
  font-weight: 700;
  font-size: var(--step--2);
  color: hsla(126, 100%, 51%, 1);
  max-lines: 1;

  span {
    color: var(--primary-0);
  }

  ${({ isVictory }) =>
    !isVictory &&
    css`
      color: var(--bad);
      font-size: var(--step--2);
    `}
`;
const AssetsRecived = styled.div`
  grid-area: assetsRecived;
  border-block: 1px solid var(--primary-0);
  background: linear-gradient(
    90deg,
    rgba(91, 102, 67, 0) 0%,
    rgba(91, 102, 67, 0.32) 17.5%,
    #5b6643 49.78%,
    #5b6643 49.79%,
    rgba(91, 102, 67, 0.22) 84.69%,
    rgba(217, 217, 217, 0) 100%
  );
  display: grid;
  grid-template-columns: repeat(3, fit-content(50px));
  justify-content: space-between;

  ${({ isVictory }) =>
    !isVictory &&
    css`
      .asset:not(.asset:first-child) {
        display: none;
      }

      .asset:first-child{
        grid-column: 1 / -1;
        justify-self: center; 
      }
    `}

  .asset {
    display: grid;
    grid-template-columns: repeat(2, fit-content(50px));
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "assetIcon assetAmount" "assetIcon assetName";
    padding-block: var(--space-xs-s);
    font-family: stormFaze;

    .assetIcon {
      grid-area: assetIcon;
      height: 50px;
      width: 50px;
      object-fit: contain;
    }

    .assetAmount {
      grid-area: assetAmount;
      align-self: flex-end;
      justify-self: center;
    }

    .assetName {
      grid-area: assetName;
      align-self: flex-start;
      justify-self: center;
    }
  }
`;
const TimeTaken = styled.div`
  grid-area: timeTaken;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(2, fit-content(50px));
  grid-template-rows: repeat(2, fit-content(50px));
  grid-template-areas: "icon value" "icon label";
  gap: 2px;
  column-gap: 5px;

  .icon {
    grid-area: icon;
    height: 36px;
    width: 36px;
    object-fit: contain;
    align-self: center;
  }
  .value {
    grid-area: value;
    font-size: var(--step-1);
    font-weight: 500;
    font-family: metropolis;
  }
  .label {
    grid-area: label;
    font-size: var(--step--3);
    font-weight: 500;
  }
`;
const Accuracy = styled.div`
  grid-area: accuracy;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(2, fit-content(50px));
  grid-template-rows: repeat(2, fit-content(50px));
  grid-template-areas: "icon value" "icon label";
  gap: 5px;

  .icon {
    grid-area: icon;
    height: 36px;
    width: 36px;
    object-fit: contain;
    align-self: center;
  }
  .value {
    grid-area: value;
    font-size: var(--step-1);
    font-weight: 500;
    font-family: metropolis;
  }
  .label {
    grid-area: label;
    font-size: var(--step--3);
    font-weight: 500;
  }
`;
const LeftButton = styled(Button1)`
  grid-area: leftButton;
  font-size: var(--step-0);
  padding-inline: var(--space-2xs-xs);
  padding-block: var(--space-3xs-2xs);
  color: var(--primary--100);
  background-color: var(--gray-100);
`;
const RightButton = styled(Button1)`
  grid-area: rightButton;
  font-size: var(--step-0);
  padding-inline: var(--space-2xs-xs);
  padding-block: var(--space-3xs-2xs);
  color: var(--primary--100);
`;

const ResultContainer = () => {
  // const testResult = useSelector(selectTestResult);
  // const test_result_id = testResult?.id;
  const router = useRouter();
  const {subject, module} = router.query;
  const { result: test_result_id } = router.query;

  const { data: testResultDetails, isSuccess: isTestResultDetailsSuccess } =
    useGetTestResultDetailsQuery(test_result_id, { skip: !test_result_id });
  const TRD = testResultDetails;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const getMedal = () => {
    if (TRD?.medal_details?.medal_count === 0) return noMedal;
    else if (TRD?.medal_details?.medal_count === 1) return bronzeMedal;
    else if (TRD?.medal_details?.medal_count === 2) return silverMedal;
    else if (TRD?.medal_details?.medal_count === 3) return goldMedal;
  };

  if (!isTestResultDetailsSuccess) return <></>;

  return (
    <>
      <Overlay></Overlay>
      <_ResultContainer isVictory={TRD?.is_victory}>
        <ResultHead
          image={TRD?.is_victory ? victoryHead : defeatHead}
          style={{
            width: "100%",
            height: `${TRD?.is_victory ? "115px" : "160px"}`,
            zIndex: 1,
            transform: "translateY(28px)",
          }}
          isVictory={TRD?.is_victory}
        >
          <h1>{TRD?.is_victory ? "VICTORY" : "DEFEAT"}</h1>
        </ResultHead>
        <ResultContentContainer
          image={
            TRD?.is_victory ? resultContainerImage : resultContainerImageDefeat
          }
          style={{
            transform: "translateY(-30px)",
          }}
        >
          <Score>
            <p className="label">Score</p>
            <p className="score">{`${TRD?.answer_correctly}/${TRD?.total_questions}`}</p>
          </Score>
          <Medal>
            <ContainerWithImage image={TRD?.is_victory?leafs:defeatLeaves} className="leafsContainer">
              <Image src={getMedal()} alt="bronze medal" fill style={{}} />
            </ContainerWithImage>
          </Medal>
          <_ProgressBar
            progress={(TRD?.answer_correctly / TRD?.total_questions) * 100}
          />
          <Message isVictory={TRD?.is_victory}>
            {!TRD?.is_victory ? (
              "Good attempt. But try harder next time"
            ) : (
              <>
                Great job! You missed bronze by just<span> 2 points</span>
              </>
            )}
          </Message>
          <AssetsRecived>
            <li className="asset">
              <Image
                src={star}
                alt="star"
                className="assetIcon"
                style={{ padding: "5px" }}
              />
              <p className="assetAmount">{testResultDetails?.xp_gained ?? 0}</p>
              <p className="assetName">XP</p>
            </li>
            <li className="asset">
              <Image src={money} alt="money" className="assetIcon" />
              <p className="assetAmount">
                {testResultDetails?.cash_gained ?? 0}
              </p>
              <p className="assetName">CASH</p>
            </li>
            <li className="asset">
              <Image src={diamond} alt="star" className="assetIcon" />
              <p className="assetAmount">
                {testResultDetails?.gems_gained ?? 0}
              </p>
              <p className="assetName">GEMS</p>
            </li>
          </AssetsRecived>
          <TimeTaken>
            <Image src={time} alt="time" className="icon" />
            <strong className="value">
              {formatTime(testResultDetails?.test_time ?? 0)}
            </strong>
            <label className="label">Time?Que</label>
          </TimeTaken>
          <Accuracy>
            <Image src={target} alt="accuracy" className="icon" />
            <strong className="value">
              {testResultDetails?.Accuracy ?? 0}%
            </strong>
            <label className="label">Accuracy</label>
          </Accuracy>
          <RightButton onClick={()=>router.push(`/training/${subject}/${module}/learn/`)}>Return Home</RightButton>
          <LeftButton onClick={()=>router.push(`/settings`)}>Analytics</LeftButton>
        </ResultContentContainer>
      </_ResultContainer>
    </>
  );
};
export default ResultContainer;
