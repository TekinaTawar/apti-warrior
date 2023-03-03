import VerticalContainer from "../VerticalContainer";
import ContainerCard from "../ContainerCard";

const ModulesContainer = ({ modules, onClick }) => {
  return (
    <VerticalContainer title="Modules" gridArea="modulesContainer">
      {modules.map((module) => (
        <ContainerCard
          cardId={module?.id}
          cardTitle={module?.title}
          onClick={onClick}
        />
      ))}
    </VerticalContainer>
  );
};
export default ModulesContainer;