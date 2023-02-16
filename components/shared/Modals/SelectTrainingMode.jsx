import Image from "next/legacy/image";
import styled from "styled-components";
import ContainerAuth from "../Containers/ContainerAuth";
import Modal from "./Modal";
import buttonBorder2 from "@/public/images/buttonBorder2.svg";





const TrainingMode = styled(ContainerAuth)`
  display: grid;
  grid-auto-rows: repeat(2, 1fr);
  justify-content: center;
  align-content: space-around;
  align-items: center;
  justify-items: center;
`;

const ModuleCard = styled.div`
  color: white;
  position: relative;
  display: grid;
  align-items: center;
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-xs-s);

  grid-template-areas: "moduleImage " " moduleTitle";

  .moduleTitle {
    grid-area: moduleTitle;
    font-size: var(--step-1);
    font-family: metropolis;
    font-weight: 700;
  }
`;

const SelectTrainingMode = ({ setShowModal }) => {
  return (
    <Modal onClose={() => setShowModal(false)} setShowModal={setShowModal}>
      <TrainingMode title="Training">
        <ModuleCard>
          <Image src={buttonBorder2} alt="buttonBorder1" />
          <div className="moduleImage"></div>
          <div className="moduleTitle">LEARN</div>
        </ModuleCard>
        <ModuleCard>
          <Image src={buttonBorder2} alt="buttonBorder1" />
          <div className="moduleImage"></div>
          <div className="moduleTitle">PRACTICE</div>
        </ModuleCard>
      </TrainingMode>
    </Modal>
  );
};
export default SelectTrainingMode;
