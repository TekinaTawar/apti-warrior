import styled from "styled-components";
import Image from "next/legacy/image";

import Header from "@/components/shared/Header";
import HorizontalCardContainer from "@/components/shared/HorizontalCardContainer";

import BorderContainer from "@/components/shared/BorderContainer";
import borderVid from "@/public/images/Training2/borderVid.svg";
import border3 from "@/public/images/Training2/border3.svg";
import { FaPlay } from "react-icons/fa";

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
  column-gap: var(--space-2xs-xs);
  row-gap: var(--space-2xs-xs);
`;

const VideoContainer = styled(BorderContainer)`
  grid-area: videoContainer;
`;

const VideoTextContainer = styled.div`
  grid-area: videoTextContainer;
  width: 100%;
  height: 100%;
  background-color: black;
  border: var(--space-4xs-3xs) solid var(--primary-0);
  border-bottom: none;
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

const ModuleTopicContainer = styled(BorderContainer)`
  grid-area: moduleTopicContainer;
  margin-right: var(--space-2xs-xs);

  .content {
    width: 100%;
    height: 100%;
    padding-inline: var(--space-xs-s);
    padding-block: var(--space-s-m);
    font-size: var(--step-0);
    overflow-x: scroll;

    z-index: 1;

    ::-webkit-scrollbar {
      display: none;
    }

    ul {
      border-bottom: 4px solid var(--primary-0);

      * {
        font-size: var(--step-1);
        margin-bottom: var(--space-2xs-xs);
      }
    }
    h2 {
      margin-top: var(--space-2xs-xs);
      border-bottom: 8px double white;
    }
    li {
    }
  }
`;

const training2 = () => {
  return (
    <MainContainer>
      <Header />
      {/* modulecontainer */}
      <HorizontalCardContainer />
      {/* videoContainer */}
      <VideoContainer border={borderVid} widthpercent={"98%"}>
        <FaPlay size={50} />
      </VideoContainer>
      {/* videoTextContainer */}
      <VideoTextContainer>
        <h1>Digital Marketing</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          vel eaque autem veniam fugit at. Nobis maxime quibusdam temporibus cum
          in quam, laboriosam asperiores repellat nihil nisi quasi laudantium
          officiis dignissimos sit quas error, debitis ratione ut delectus velit
          architecto numquam beatae quis. Unde, esse illo id repudiandae ipsam
          aliquam dolorum earum illum explicabo ducimus sed voluptatibus, labore
          dicta repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nesciunt at eveniet quia itaque tempore et quas! Natus obcaecati
          delectus earum, adipisci debitis distinctio dolor rerum nisi cumque
          eaque neque corrupti. Veniam fugiat provident commodi assumenda totam
          quaerat laborum incidunt esse voluptatum possimus dolor illum debitis
          nemo corrupti excepturi aperiam earum voluptatibus natus ipsum,
          cupiditate quis obcaecati cum? Temporibus quod perspiciatis asperiores
          in accusantium! Quae explicabo mollitia ex ab expedita ipsam magni
          provident distinctio in quibusdam accusantium numquam, facere
          asperiores voluptates quaerat blanditiis, placeat ipsa quod eaque?
          Dolor ab cupiditate atque asperiores deleniti amet odio, consequatur
          suscipit. Distinctio deserunt iusto aspernatur provident odio iste
          delectus sit beatae praesentium deleniti tenetur inventore, laudantium
          at enim alias, libero modi odit facilis, quos ullam quasi similique!
          Magni repellendus iusto cumque odio nam fuga voluptatibus vitae.
          Numquam laborum error recusandae, officiis beatae sit magnam dolores!
          Esse sint reiciendis at blanditiis obcaecati odio ducimus, aliquam,
          optio quis corporis vel dolore distinctio doloremque molestiae harum
          dolorem dolores temporibus est repellendus, suscipit nulla! Mollitia
          omnis iure dicta sapiente magnam vero quod deleniti incidunt ipsa
          officiis est minima veritatis a labore consequuntur, magni laudantium
          aliquid nobis exercitationem ipsam facilis hic beatae eaque nihil.
          Quaerat odio impedit quasi quo repellendus. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Sit numquam similique odit labore,
          eum repudiandae perspiciatis id quos totam enim eos laudantium
          quibusdam vel vero laborum magni. Fuga, eos ea non ipsum vero odio
          excepturi inventore nihil facilis consectetur, soluta praesentium quam
          dignissimos omnis temporibus cum esse velit. Asperiores exercitationem
          inventore ipsum, repellendus nesciunt sequi iure accusantium molestiae
          ullam tempore!
        </p>
      </VideoTextContainer>
      {/* moduleTopicContainer */}
      <ModuleTopicContainer border={border3} widthpercent={"98%"}>
        <div className="content">
          <ul>
            <h2>Topic 1: The Tigers's of Cave</h2>
            <li>1.1: Quiz</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Quiz</li>
          </ul>
          <ul>
            <h2>Topic 1: The Tigers's of Cave</h2>
            <li>1.1: Quiz</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Should plastic be banned?</li>
            <li>1.1: Quiz</li>
          </ul>
        </div>
      </ModuleTopicContainer>
    </MainContainer>
  );
};
export default training2;
