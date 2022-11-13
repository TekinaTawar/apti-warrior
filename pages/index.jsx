import Link from "next/link";
import styled from "styled-components";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  color: hsl(232, 100%, 10%);
  font-weight: 600;

  a {
    color: blue;
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <h3>
        This is the index page that is page if someone visits the bare URL. (you
        can check out the progress of the following pages by clicking the link
        below)
      </h3>
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
          <Link href="/training-area">training-area</Link>
          <span>: not done</span>
        </li>
        <li>
          <Link href="/training-area/1">training-area/1</Link>
          <span>: not done</span>
        </li>
        <li>
          <Link href="/test">test</Link>
          <span>: For the Deloper only to test current things.</span>
        </li>
      </ul>
    </MainContainer>
  );
};
export default Home;
