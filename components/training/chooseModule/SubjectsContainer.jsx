import VerticalContainer from "../VerticalContainer";
import ContainerCard from "../ContainerCard";

const SubjectsContainer = ({ subjects, onClick }) => {
  return (
    <VerticalContainer title="Subjects" gridArea="subjectsContainer">
      {subjects.map((subject) => (
        <ContainerCard
          cardId={subject?.id}
          cardTitle={subject?.title}
          onClick={onClick}
        />
      ))}
    </VerticalContainer>
  );
};
export default SubjectsContainer;
