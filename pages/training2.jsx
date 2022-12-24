import { useState } from "react";
import styled from "styled-components";

import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import Header from "@/components/shared/Header";
import SubjectsContainer from "@/components/training/SubjectsContainer";
import QuizContainer from "@/components/QuizContainer";

//* svg Icons

import borderVid from "@/public/images/training2/borderVid.svg";
import border3 from "@/public/images/training2/border3.svg";

// *React Icons

import { FaPlay } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: fit-content(50px) 1fr 1fr;
  grid-template-areas:
    "Header Header Header"
    "subjectsContainer videoContainer moduleTopicContainer"
    "subjectsContainer videoTextContainer moduleTopicContainer";
  /* "subjectsContainer quizContainer moduleTopicContainer"
    "subjectsContainer quizContainer moduleTopicContainer"; */
  column-gap: var(--space-2xs-xs);
  row-gap: var(--space-2xs-xs);
`;

const VideoContainer = styled(ContainerWithImage)``;

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

  ul {
    border-bottom: 4px solid var(--primary-0);

    * {
      font-size: var(--step-0);
      margin-bottom: var(--space-4xs-3xs);
    }
    li {
      font-size: var(--step--1);
      display: flex;
      align-content: center;
      justify-content: flex-start;
      gap: var(--space-2xs-xs);
      cursor: pointer;
    }
  }
  h2 {
    margin-top: var(--space-2xs-xs);
    margin-bottom: var(--space-2xs-xs);
    border-bottom: 8px double white;
    white-space: nowrap;
    font-size: var(--step--1);
    font-family: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Training2 = () => {
  const [showQuizContainer, setShowQuizContainer] = useState(false);
  return (
    <MainContainer>
      <Header />

      <SubjectsContainer />

      {showQuizContainer ? (
        <QuizContainer />
      ) : (
        <>
          <VideoContainer
            image={borderVid}
            style={{ gridArea: " videoContainer" }}
          >
            <FaPlay size={50} />
          </VideoContainer>

          <VideoTextContainer>
            <h1>Digital Marketing</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda vel eaque autem veniam fugit at. Nobis maxime quibusdam
              temporibus cum in quam, laboriosam asperiores repellat nihil nisi
              quasi laudantium officiis dignissimos sit quas error, debitis
              ratione ut delectus velit architecto numquam beatae quis. Unde,
              esse illo id repudiandae ipsam aliquam dolorum earum illum
              explicabo ducimus sed voluptatibus, labore dicta repellendus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              at eveniet quia itaque tempore et quas! Natus obcaecati delectus
              earum, adipisci debitis distinctio dolor rerum nisi cumque eaque
              neque corrupti. Veniam fugiat provident commodi assumenda totam
              quaerat laborum incidunt esse voluptatum possimus dolor illum
              debitis nemo corrupti excepturi aperiam earum voluptatibus natus
              ipsum, cupiditate quis obcaecati cum? Temporibus quod perspiciatis
              asperiores in accusantium! Quae explicabo mollitia ex ab expedita
              ipsam magni provident distinctio in quibusdam accusantium numquam,
              facere asperiores voluptates quaerat blanditiis, placeat ipsa quod
              eaque? Dolor ab cupiditate atque asperiores deleniti amet odio,
              consequatur suscipit. Distinctio deserunt iusto aspernatur
              provident odio iste delectus sit beatae praesentium deleniti
              tenetur inventore, laudantium at enim alias, libero modi odit
              facilis, quos ullam quasi similique! Magni repellendus iusto
              cumque odio nam fuga voluptatibus vitae. Numquam laborum error
              recusandae, officiis beatae sit magnam dolores! Esse sint
              reiciendis at blanditiis obcaecati odio ducimus, aliquam, optio
              quis corporis vel dolore distinctio doloremque molestiae harum
              dolorem dolores temporibus est repellendus, suscipit nulla!
              Mollitia omnis iure dicta sapiente magnam vero quod deleniti
              incidunt ipsa officiis est minima veritatis a labore consequuntur,
              magni laudantium aliquid nobis exercitationem ipsam facilis hic
              beatae eaque nihil. Quaerat odio impedit quasi quo repellendus.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              numquam similique odit labore, eum repudiandae perspiciatis id
              quos totam enim eos laudantium quibusdam vel vero laborum magni.
              Fuga, eos ea non ipsum vero odio excepturi inventore nihil facilis
              consectetur, soluta praesentium quam dignissimos omnis temporibus
              cum esse velit. Asperiores exercitationem inventore ipsum,
              repellendus nesciunt sequi iure accusantium molestiae ullam
              tempore!
            </p>
          </VideoTextContainer>
        </>
      )}

      <ModuleTopicContainer
        image={border3}
        style={{ gridArea: "moduleTopicContainer" }}
      >
        <ul>
          <h2>
            Topic 1: The Tigers&apos;s of Cave <FiChevronUp />
          </h2>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1:Prognostic Test
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Prognostic Test
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Retention Test
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Diagnostic Test
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Quiz Time
          </li>
        </ul>
        <ul>
          <h2>
            Topic 1: The Tigers&apos;s of Cave <FiChevronUp />
          </h2>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Diagnostic Quiz
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Prognostic Test
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <AiFillPlayCircle />
            </i>
            1.1: Should plastic be banned?
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Retention Test
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Diagnostic Test
          </li>
          <li>
            <i>
              <BsQuestionCircleFill />
            </i>
            1.1: Quiz Time
          </li>
        </ul>
      </ModuleTopicContainer>
    </MainContainer>
  );
};
export default Training2;
