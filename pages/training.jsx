import Image from "next/image";
import styled from "styled-components";
import { useState, useEffect } from "react";
//*import components
import Header from "@/components/shared/Header";
import SubjectsContainer from "@/components/training/SubjectsContainer";
import ContainerWithHead from "@/components/shared/Containers/ContainerWithHead";
//*images
import buttonBorder2 from "@/public/images/buttonBorder2.svg";
//*redux
import { useGetUserProfileQuery } from "@/redux/user/userSlice";
import {
  useGetSubjectsQuery,
  useGetModulesQuery,
} from "@/redux/course/courseSlice";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: fit-content(50px) 1fr;
  grid-template-areas: "Header Header" "subjectsContainer modulesContainer";
  column-gap: var(--space-xs-s);
  row-gap: var(--space-2xs-xs);
`;

const ModulesContainer = styled(ContainerWithHead)`
  margin-right: var(--space-2xs-xs);
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1%;
  column-gap: 1%;
  padding: 1%;
`;

const ModuleCard = styled.div`
  color: white;
  position: relative;
  display: grid;
  grid-template-columns: fit-content(10px) 1fr;
  grid-template-rows: fit-content(10px) 1fr; // check in dev tools if this is working
  /* justify-items: space-between; */
  align-items: center;
  padding-inline: var(--space-xs-s);
  padding-block: var(--space-xs-s);
  gap: var(--space-2xs-xs);
  grid-template-areas: "moduleImage moduleTitle" "progressBar progressBar";

  :hover {
    cursor: pointer;
  }

  .moduleImage {
    grid-area: moduleImage;
    width: var(--space-l-xl);
    height: var(--space-l-xl);
    background-color: var(--gray--100);
    /* position: absolute; */
  }

  .moduleTitle {
    grid-area: moduleTitle;
    font-size: var(--step-1);
    font-family: metropolis;
    font-weight: 700;
  }

  .moduleProgress {
    grid-area: progressBar;
    display: grid;
    /* grid-template-columns: 1fr fit-content(50px); */
    grid-template-rows: 1fr 1fr;
    row-gap: var(--space-2xs-xs);
    /* background-color: var(--gray--100); */
    /* align-items: center; */
    justify-items: center;
    column-gap: var(--space-2xs-xs);

    .progressBarContainer {
      border: 2px solid var(--primary-0);
      height: var(--space-s);
      border-radius: 3px;
      box-shadow: 0px 0px 20px 0px var(--primary--100);
      justify-self: stretch;

      .progressLine {
        /* background-color: var(--primary-0); */
        height: 100%;
        width: 75%;
        border: 1px solid black;
        background-image: repeating-linear-gradient(
          115deg,
          transparent 0px 1px,
          var(--primary-0) 2px 6px
        );
      }
    }
    span {
      /* background-color: pink; */
      font-family: stormfaze;
      font-size: var(--step--1);
    }
  }
`;

const Training = () => {
  console.log("rendering");
  const { data, isSuccess: isUserProfileSuccess } = useGetUserProfileQuery({});
  const courseId = data?.profile.courses[0].id;
  console.log("🚀 ~ file: training.jsx:112 ~ Training ~ courseId:", courseId);

  const { data: subjects, isSuccess: isSubjectsSuccess } = useGetSubjectsQuery(
    courseId,
    { skip: !isUserProfileSuccess }
  );
  console.log("🚀 ~ file: training.jsx:115 ~ Training ~ subjects:", subjects);

  const [selectedSubject, setSelectedSubject] = useState(undefined);

  useEffect(() => {
    if (isSubjectsSuccess) {
      console.log("printing subject id", subjects?.results[0].id);
      setSelectedSubject(subjects?.results[0].id);
    }
  }, [isSubjectsSuccess]);

  console.log(
    "🚀 ~ file: training.jsx:118 ~ Training ~ selectedSubject:",
    selectedSubject
  );

  const { data: modules } = useGetModulesQuery(
    { courseId, selectedSubject },
    { skip: !selectedSubject }
  );
  console.log("🚀 ~ file: training.jsx:123 ~ Training ~ modules:", modules);

  const handleSubjectClick = (id) => {
    setSelectedSubject(id);
  };

  return (
    <MainContainer>
      <Header />
      <SubjectsContainer subjects={subjects?.results ?? []} />
      <ModulesContainer
        withLegs={true}
        title={"Modules"}
        gridArea="modulesContainer"
      >
        {(modules?.results??[]).map((module) => (
          <ModuleCard key={module.id}>
            <Image src={buttonBorder2} alt="buttonBorder1" fill sizes="100vw" />
            <div className="moduleImage"></div>
            <div className="moduleTitle">{module.title}</div>
            <div className="moduleProgress">
              <div className="progressBarContainer">
                <div className="progressLine"> </div>
              </div>
              <span> 75% </span>
            </div>
          </ModuleCard>
        ))}
      </ModulesContainer>
    </MainContainer>
  );
};
export default Training;
