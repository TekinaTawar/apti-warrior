import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
//* components
import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import Header from "@/components/shared/Header";
import QuizContainer from "@/components/training/learn/QuizContainer";
import LectureList from "@/components/training/learn/LectureList";
import ModulesContainer from "@/components/training/learn/ModulesContainer";
//* svg Icons
import borderVid from "@/public/images/training2/borderVid.svg";
import border3 from "@/public/images/training2/border3.svg";
// *React Icons
import { FaPlay } from "react-icons/fa";
// *redux
import { useGetUserProfileQuery } from "@/redux/user/userSlice";
import {
  useGetModulesQuery,
  useGetTopicsQuery,
} from "@/redux/course/courseSlice";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: fit-content(50px) 1fr 1fr;
  grid-template-areas:
    "Header Header Header"
    "modulesContainer videoContainer moduleTopicContainer"
    "modulesContainer videoTextContainer moduleTopicContainer";
  column-gap: var(--space-2xs-xs);
  row-gap: var(--space-2xs-xs);
`;

const VideoContainer = styled(ContainerWithImage)`
  :hover {
    cursor: pointer;
  }

  .content{
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .video{
      width: 100%;
      height: 100%;
      padding-inline: var(--space-4xs-3xs);
      padding-block: 4px;

      position: absolute;
    }
  }
  /* border: 1px solid white; */

  /* .video{
    border: 1px solid white;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

const VideoTextContainer = styled.div`
  grid-area: videoTextContainer;
  width: 100%;
  height: 100%;
  background-color: black;
  border: var(--space-4xs-3xs) solid var(--primary-0);
  /* border-bottom: none; */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: var(--space-2xs-xs);
  gap: var(--space-2xs-xs);
  overflow-y: scroll;

  h1 {
    font-size: var(--step-1);
  }
  p {
    font-size: var(--step-0);
  }
`;

const ModuleTopicContainer = styled(ContainerWithImage)`
  /* height: 99%; */
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-s-m);
  overflow-y: scroll;
  display: block;

  .topicAndLectures {
    border-bottom: 4px solid var(--primary-0);
    display: flex;
    padding-bottom: var(--space-4xs-3xs);
    flex-direction: column;
    gap: var(--space-4xs-3xs);

    .topicTitle {
      margin-top: var(--space-2xs-xs);
      margin-bottom: var(--space-4xs-3xs);
      border-bottom: 8px double white;
      white-space: nowrap;
      font-size: var(--step--1);
      font-family: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Training2 = () => {
  const router = useRouter();

  const { data, isSuccess: isUserProfileSuccess } = useGetUserProfileQuery({});
  const courseId = data?.profile.courses[0].id;

  const { subject, module } = router.query;

  const { data: modules } = useGetModulesQuery(
    { courseId, subjectId: subject },
    { skip: !(isUserProfileSuccess && subject) }
  );

  const [selectedModule, setSelectedModule] = useState(undefined);

  useEffect(() => {
    if (module) {
      setSelectedModule(module);
    }
  }, [module]);

  const { data: topics, isSuccess: isTopicsSuccess } = useGetTopicsQuery(
    { courseId, subjectId: subject, moduleId: selectedModule },
    { skip: !(isUserProfileSuccess && selectedModule) }
  );

  const [selectedLecture, setSelectedLecture] = useState(undefined);

  const showLecture = () => {
    if (selectedLecture?.type === "Lecture") {
      return (
        <>
          <VideoContainer
            image={borderVid}
            style={{ gridArea: " videoContainer" }}
          >
            {/* <FaPlay size={50} /> */}
            <div className="content">
              <video
                controls
                src={selectedLecture?.item_details?.video_url}
                className="video"
              ></video>
            </div>
          </VideoContainer>

          <VideoTextContainer>
            <h1>{selectedLecture?.item_details?.title}</h1>
            <p>{selectedLecture?.item_details?.description}</p>
          </VideoTextContainer>
        </>
      );
    } else if (selectedLecture?.type === "Test") {
      return (
        <>
          <QuizContainer test={selectedLecture?.item_details} />
        </>
      );
    }
  };

  return (
    <MainContainer>
      <Header />

      <ModulesContainer
        modules={modules?.results ?? []}
        onClick={(id) => setSelectedModule(id)}
        selectedModule={selectedModule}
      />

      {showLecture()}

      <ModuleTopicContainer
        image={border3}
        style={{ gridArea: "moduleTopicContainer" }}
      >
        {(topics?.results ?? []).map((topic, i) => (
          <ul key={topic.id} className="topicAndLectures">
            <h2 className="topicTitle">{`Topic ${i + 1}: ${topic.title}`}</h2>
            <LectureList
              courseId={courseId}
              subjectId={subject}
              moduleId={selectedModule}
              topicId={topic.id}
              showLecture={(id) => setSelectedLecture(id)}
              selectedLecture={selectedLecture}
            />
          </ul>
        ))}
      </ModuleTopicContainer>
    </MainContainer>
  );
};
export default Training2;
