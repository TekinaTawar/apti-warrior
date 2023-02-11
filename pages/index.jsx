import Link from "next/link";
import styled from "styled-components";
import ContainerWithImage from "@/components/shared/Containers/ContainerWithImage";
import borderVid from "@/public/images/training2/borderVid.svg";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--primary-0);
    text-underline-position: under;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }
`;

const Banner = styled(ContainerWithImage)`
  /* height: 60%; */
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-2xs);
    z-index: 1;

    h2 {
      font-family: stormfaze;
      font-size: var(--step-2);
      font-weight: 400;
    }

    h4 {
      font-size: var(--step--1);
    }

    li {
      padding-bottom: var(--space-3xs);
    }
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <Banner
        image={borderVid}
        style={{ height: "75%", width: "60%" }}
        takeExternalSize={false}
      >
        <div className="content">
          <h2>Apti Warrior</h2>
          <h4>Check the Progress by Clicking the links below.</h4>
          <ul>
            <li>
              <Link href="/auth/login"> Login</Link>
              <span>: design done</span>
            </li>
            <li>
              <Link href="/auth/signup"> signup</Link>
              <span>: design done</span>
            </li>
            <li>
              <Link href="/auth/otp">otp</Link>
              <span>: design done</span>
            </li>
            <li>
              <Link href="/dashboard">dashboard</Link>
              <span>: design done (mobile layout some confusions)</span>
            </li>
            <li>
              <Link href="/training">training-area</Link>
              <span>: done</span>
            </li>
            <li>
              <Link href="/training2">training-area/1</Link>
              <span>: done</span>
            </li>
            <li>
              <Link href="/regularTest">Regular Test</Link>
              <span>: one section of UI , functionality pending..</span>
            </li>
            <li>
              <Link href="/practice&learn">Practice&Learn</Link>
              <span>: UI done but functionality pending.</span>
            </li>
            <li>
              <Link href="/multiplayerDashboard">Multiplayer Dashboard</Link>
              <span>: UI done but functionality pending.</span>
            </li>
            <li>
              <Link href="/streakTest2">Streak Test 2</Link>
              <span>: one section of UI , functionality pending..</span>
            </li>
            <li>
              <Link href="/sprintTest">Sprint Test</Link>
              <span>: one section of UI , functionality pending..</span>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
              <span>: one section of UI ..</span>
            </li>
            ------------------------------------------------------------------------------------------------
            <li>
              <Link href="/tests/test(buttons)">test(buttons)</Link>
              <span>: For the Developer only to test current things.</span>
            </li>
            <li>
              <Link href="/tests/test(modal)">test(Modal)</Link>
              <span>: For the Developer only to test current things.</span>
            </li>
          </ul>
        </div>
      </Banner>
    </MainContainer>
  );
};
export default Home;
