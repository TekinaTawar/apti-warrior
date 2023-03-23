import styled from "styled-components";
import ButtonHugging from "../shared/Buttons/ButtonHugging";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";

const _CustomBattle = styled(ContainerWithHead)`
  width: 50vw;
  .battleButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl-2xl);
    .button1 {
      grid-area: button1;
    }
    .button2 {
      grid-area: button2;
    }
  }
`;

const _customBattleContent = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  font-family: "Metropolis";
  padding-block: var(--space-s-m);
  padding-inline: var(--space-s-m);

  .customBattle {
    display: flex;
    padding-block: var(--space-s-m);
    gap: var(--space-m-l);
    .battleHeadings {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: var(--space-s-m);

      p {
        font-size: var(--step--1);
        font-weight: 400;
      }
    }

    .customOptions {
      display: flex;
      flex-direction: column;
      margin: 40px;
      gap: 20px;

      select {
        font-weight: 500;
        font-size: var(--step--2);
        outline: 0;
        background: #232222;
        background-image: none;
        color: var(--whtie);
        padding-block: var(--space-3xs-2xs);
        padding-inline: var(--space-l-xl);
        cursor: pointer;
        border: 2px solid var(--primary-0);
        border-radius: 5px;
      }
    }
  }
`;

const CustomBattle = ({ closeModal }) => {
  return (
    <_CustomBattle title=" Custom Battle" grid-area="CustomBattle">
      <_customBattleContent>
        <div className="customBattle">
          <div className="battleHeadings">
            <p>Game Mode</p>
            <p>Number of Opponents</p>
            <p>Module</p>
            <p>Life</p>
            <p>Damage Multiplier</p>
            <p>Who can join?</p>
          </div>
          <div className="customOptions">
            {[...Array(6)].map((e, i) => (
              <select name="language" key={i}>
                <option value=" Select Game Mode" selected>
                  {" "}
                  Select Game Mode
                </option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
                <option value="java">Java</option>
              </select>
            ))}
          </div>
        </div>

        <div className="battleButtons">
          <ButtonHugging className="button1">Start </ButtonHugging>
          <ButtonHugging className="button2" onClick={closeModal}>
            Cancel
          </ButtonHugging>
          {/* <button onClick={closeModal}>cancel</button> */}
        </div>
      </_customBattleContent>
    </_CustomBattle>
  );
};
export default CustomBattle;
