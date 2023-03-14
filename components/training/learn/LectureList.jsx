import styled, {css} from "styled-components";
import { useGetLecturesQuery } from "@/redux/course/courseSlice";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect } from "react";

const Lecture = styled.li`
  font-size: var(--step--1);
  display: flex;
  align-items: center;
  padding-block: var(--space-4xs-3xs);
  column-gap: var(--space-2xs-xs);
  padding-inline: var(--space-4xs-3xs);
  
  :hover {
    cursor: pointer;
    background-color: var(--gray-200)
  }

  ${({ selected }) => 
  selected&&css`
    background-color: var(--secondary-0);

    :hover {
      background-color: var(--secondary-0);
      transform: scale(1.01);
    }
  `}

  i{
    display: flex;
    align-items: center;
  }
`


const LectureList = ({
  courseId,
  subjectId,
  topicId,
  lectureId,
  showLecture,
  selectedLecture,
}) => {
  const { data: lectures, isSuccess: isLecturesSuccess } = useGetLecturesQuery({
    courseId,
    subjectId,
    topicId,
    lectureId,
  });

  useEffect(() => {
    if (lectures?.results.length > 0) {
      showLecture(lectures?.results[0]);
    }
  }, [isLecturesSuccess]);

  const lectureIcon = (type) => {
    if (type === "Lecture") {
      return <AiFillPlayCircle />;
    } else if (type === "Test") {
      return <BsQuestionCircleFill />;
    }
  };

  return (
    <>
      {(lectures?.results ?? []).map((lecture) => (
        <Lecture
          key={lecture.item_details.id}
          onClick={() => showLecture(lecture)}
          selected={selectedLecture?.item_details.id === lecture.item_details.id}
        >
          <i>{lectureIcon(lecture.type)}</i>
          {lecture.item_details.title}
        </Lecture>
      ))}
    </>
  );
};
export default LectureList;
