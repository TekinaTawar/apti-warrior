import styled from "styled-components";
import ButtonHugging from "../shared/Buttons/ButtonHugging";
import ContainerWithHead from "../shared/Containers/ContainerWithHead";

const _CustomBattle = styled(ContainerWithHead)`
  .battleButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--step-1);
    .button1 {
      grid-area: button1;
    }
    .button2 {
      grid-area: button2;
    }
  }
`;

const _customBattleContent = styled.div`
  align-items: center;
  justify-content: center;
  font-family: "Metropolis";
  padding-block: var(--space-s-m);
  padding-inline: var(--space-s-m);

  .customBattle {
    display: flex;

    .battleHeadings {
      display: flex;
      flex-direction: column;
      gap: var(--step-3);
      padding: var(--space-s-m);

      p {
        font-size: var(--step--0);
        font-weight: 400;
      }
    }

    .customOptions {
      display: flex;
      flex-direction: column;
      margin: 40px;
      gap: 10px;

      select {
        font-weight: 500;
        font-size: var(--step--2);
        outline: 0;
        background: #232222;
        background-image: none;
        color: #fff;
        padding-block: var(--space-3xs-2xs);
        padding-inline: var(--space-3xs-2xs);
        cursor: pointer;
        border: 2px solid #fdcf1d;
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
          <ButtonHugging className="button1">Start Battle</ButtonHugging>
          <ButtonHugging
            className="button2"
            onClick={closeModal}
          >
            Cancel
          </ButtonHugging>
          {/* <button onClick={closeModal}>cancel</button> */}
        </div>
      </_customBattleContent>
    </_CustomBattle>
  );
};
export default CustomBattle;
