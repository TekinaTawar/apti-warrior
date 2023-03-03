import VerticalContainer from "../VerticalContainer";
import ContainerCard from "../ContainerCard";

const SubjectsContainer = ({ subjects, onClick }) => {
  return (
    <VerticalContainer title="Subjects" gridArea="subjectsContainer">
      {subjects.map((subject) => (
        <ContainerCard
          key = {subject?.id}
          cardId={subject?.id ?? 0}
          cardTitle={subject?.title}
          onClick={onClick}
        />
      ))}
    </VerticalContainer>
  );
};
export default SubjectsContainer;
