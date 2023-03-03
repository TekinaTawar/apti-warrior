import { useGetLecturesQuery } from "@/redux/course/courseSlice";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect } from "react";

const LectureList = ({
  courseId,
  subjectId,
  topicId,
  lectureId,
  showLecture,
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
        <li key={lecture.item_details.id} onClick={() => showLecture(lecture)}>
          <i>{lectureIcon(lecture.type)}</i>
          {lecture.item_details.title}
        </li>
      ))}
    </>
  );
};
export default LectureList;
