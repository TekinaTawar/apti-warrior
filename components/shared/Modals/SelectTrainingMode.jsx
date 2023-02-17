import Image from "next/legacy/image";
import styled from "styled-components";
import ContainerAuth from "../Containers/ContainerAuth";
import Modal from "./Modal";
import buttonBorder2 from "@/public/images/buttonBorder2.svg";
import eLearning from "@/public/images/Practice&Learn/eLearning.svg";
import dumbbellsPractice from "@/public/images/Practice&Learn/dumbbellsPractice.svg";
import Link from "next/link";
import IconButton from "../IconButton";

const TrainingMode = styled(ContainerAuth)`
  display: grid;
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-xs-s);
`;

const _Modal = styled(Modal)`
  background: transparent;
`;

const SelectTrainingMode = ({ setShowModal }) => {
  return (
    <_Modal onClose={() => setShowModal(false)} setShowModal={setShowModal}>
      <TrainingMode title="Training">
        <Link href="/training">
          <IconButton icon={eLearning}>Learn</IconButton>
        </Link>
        <Link href="/training">
          <IconButton icon={dumbbellsPractice}>Practice</IconButton>
        </Link>
      </TrainingMode>
    </_Modal>
  );
};
export default SelectTrainingMode;
