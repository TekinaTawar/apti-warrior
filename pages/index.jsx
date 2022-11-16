import Link from "next/link";
import styled from "styled-components";
import BorderContainer from "@/components/shared/BorderContainer";
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

const Banner = styled(BorderContainer)`
  width: 60%;
  height: 60%;

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

    h4{
      font-size: var(--step--1);
    }
    
    li{
      padding-bottom: var(--space-3xs);
    }
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <Banner border={borderVid}>
        <div className="content">
          <h2>Apti Warrior</h2>
          <h4>
            Check the Progress by Clicking the links below.
          </h4>
          <ul>
            <li>
              <Link href="/login"> Login</Link>
              <span>: design done</span>
            </li>
            <li>
              <Link href="/signup"> signup</Link>
              <span>: design done</span>
            </li>
            <li>
              <Link href="/otp">otp</Link>
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
              <Link href="/test">test</Link>
              <span>: For the Deloper only to test current things.</span>
            </li>
          </ul>
        </div>
      </Banner>
    </MainContainer>
  );
};
export default Home;
