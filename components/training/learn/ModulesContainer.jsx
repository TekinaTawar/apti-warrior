import VerticalContainer from "../VerticalContainer";
import ContainerCard from "../ContainerCard";

const ModulesContainer = ({ modules, onClick, selectedModule }) => {
  return (
    <VerticalContainer title="Modules" gridArea="modulesContainer">
      {modules.map((module) => (
        <ContainerCard
          key={module?.id}
          cardId={module?.id}
          cardTitle={module?.title}
          onClick={onClick}
          selected={selectedModule === module?.id}
        />
      ))}
    </VerticalContainer>
  );
};
export default ModulesContainer;
