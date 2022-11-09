import Image from "next/legacy/image";
import styled from "styled-components";

import LoginModal from "public/images/loginModal.svg";
import buttonBorder from "public/images/buttonBorder.svg";

const MainContainer = styled.main`
  /* background-color: orange; */
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModalContainer = styled.div`
  /* background-color: red; */
  color: white;
  position: relative; //to position the image
  width: clamp(22.5rem, calc(6.51rem + 71.05vw), 30.94rem);
  height: clamp(34.38rem, calc(25.63rem + 25vw), 40.63rem);
  height: clamp(34.38rem, calc(-4.51rem + 111.11vw), 40.63rem);
  height: clamp(550px, 8vh, 650px);
  padding-block: 4rem 2rem;
  display: grid;
  grid-auto-rows: repeat(4, 1fr);
  justify-content: center;
  align-content: space-around;
  align-items: center;
  justify-items: center;
  /* row-gap: 60px; */

  & > * {
    z-index: 2;
  }

  h1 {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: "stormfaze";
    font-size: var(--step-0);
    color: #ffd976;
    top: 1px;
  }

  > h2 {
    font-family: stormfaze;
    font-size: var(--step-0);
    padding-bottom: 1rem;
    border-bottom: 1px solid #ebac45;
    display: inline-block;
  }

  > .phNumberSection {
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    font-size: var(--step--2);
    row-gap: 10px;

    > .phNumberInput {
      /* background-color: pink; */
      border: 2px solid var(--golden-yellow1);
      border-radius: 5px;
      background-color: black;
      height: 3rem;
      display: flex;
      align-items: center;
      padding-left: 1rem;
      font-size: var(--step--1);

      :focus-within {
        border: 2px solid white;
      }

      > input {
        color: white;
        /* border-radius: 5px; */
        width: 100%;
        margin-left: 1rem;
        background-color: transparent;
        /* width: auto; */
        outline: none;
        border: none;
        height: 100%;
        font-size: var(--step--1);
        font-family: Metropolis;
        border-left: 2px solid var(--golden-yellow1);
        padding-inline: 1rem;
        position: relative;

        :focus-visible {
          border-left: 2px solid white;
        }
      }
    }
  }

  > button {
    background-color: var(--military-green);
    color: var(--golden-yellow4);
    text-transform: uppercase;
    font-family: metropolis;
    font-weight: 800;
    padding: 0.8rem 1.5rem; //maybe change later.
    border-radius: 5px;
    position: relative; //to position border;
    border: none;
  }

  > strong {
    font-size: var(--step-1);
    color: var(--golden-yellow3);
  }

  > .socialLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem; //spacing

    & > h5 {
      font-family: metropolis;
      font-weight: 500;
    }

    > .socialIcons {
      display: flex;
      /* justify-content: space-around; */
      /* background-color: pink; */
      width: 100%;
      justify-content: center;
      column-gap: 1rem;
      > * {
        display: flex;
        background: white;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        color: black;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const login = () => {
  return (
    <MainContainer>
      <LoginModalContainer>
        <Image
          src={LoginModal}
          alt="login modal"
          layout="fill"
          objectFit="fill"
        />
        <h1>LOGIN</h1>

        <h2>WELCOME TO APTIWARROR</h2>

        <group className="phNumberSection">
          <label htmlFor="phNumber">ENTER YOUR MOBILE NUMBER</label>
          <group className="phNumberInput">
            <span className="countryCode">+91</span>
            <input type="tel" name="phNumber" id="phNumber" />
          </group>
        </group>

        <button>
          <Image src={buttonBorder} alt="bg" layout="fill" objectFit="fill" />
          CONTINUE
        </button>
        <strong>OR</strong>

        <group className="socialLogin">
          <h5>Login using your social media accounts</h5>
          <group className="socialIcons">
            <span>G</span> <span>F</span> <span>in</span>
          </group>
        </group>
      </LoginModalContainer>
    </MainContainer>
  );
};
export default login;
