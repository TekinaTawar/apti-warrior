import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/redux/auth/authApiSlice";
import { setOtpToken } from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Button1 from "@/components/shared/Buttons/Button1";
import ContainerAuth from "@/components/shared/Containers/ContainerAuth";
import { useRouter } from "next/router";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerSignUp = styled(ContainerAuth)`
  display: grid;
  justify-content: center;
  align-content: space-around;
  grid-auto-rows: repeat(6, 1fr);
`;

const WelcomeText = styled.h2`
  font-family: stormfaze;
  font-size: var(--step-0);
  padding-bottom: 1rem;
  border-bottom: 1px solid #ebac45;
  display: inline-block;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > label {
    font-size: 0.8rem;
  }
  & > input {
    background-color: black;
    border: 1px solid var(--golden-yellow3);
    height: 2.4rem;
    color: white;
    font-family: metropolis;
    font-size: 1rem;
    font-weight: 500;
    padding-inline: 0.5rem;
    border-radius: 5px;
  }
`;

const PhNoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: stretch;
  font-size: var(--step--2);
  row-gap: 0.5rem;

  > .phNumberInput {
    /* background-color: pink; */
    border: 1px solid var(--golden-yellow1);
    border-radius: 5px;
    background-color: black;
    height: 2.4rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    font-size: 1rem;

    :focus-within {
      border: 2px solid white;
    }

    > input {
      color: white;
      /* border-radius: 5px; */
      width: 100%;
      margin-left: 0.8rem;
      background-color: transparent;
      /* width: auto; */
      outline: none;
      border: none;
      height: 100%;
      font-family: Metropolis;
      border-left: 1px solid var(--golden-yellow1);
      padding-inline: 1rem;
      position: relative;

      :focus-visible {
        border-left: 2px solid white;
      }
    }
  }
`;

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [registerUser, { isLoading, isSuccess }] = useRegisterMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const registerAndsetOtpToken = async (value) => {
    try {
      const data = await registerUser(value).unwrap();
      dispatch(setOtpToken(data.otp_token));
      cookies.set("otpToken", data?.otp_token, { path: "/auth/otp" });
      router.push("/auth/otp");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <ContainerSignUp
        title="SIGN UP"
        onSubmit={handleSubmit(registerAndsetOtpToken)}
      >
        <WelcomeText>WELCOME TO APTIWARROR</WelcomeText>
        <InputGroup>
          <label htmlFor="username">ENTER YOUR USER NAME</label>
          <input type="text" id="username" {...register("username")} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="name">ENTER YOUR FULL NAME</label>
          <input type="text" id="name" {...register("name")} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">ENTER YOUR EMAIL</label>
          <input type="email" id="email" {...register("email")} />
        </InputGroup>
        <PhNoSection>
          <label htmlFor="phNumber">ENTER YOUR MOBILE NUMBER</label>
          <section className="phNumberInput">
            <span className="countryCode">+91</span>
            <input type="tel" id="phNumber" {...register("phNumber")} />
          </section>
        </PhNoSection>
        <Button1
          style={{
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          Continue
        </Button1>
      </ContainerSignUp>
    </MainContainer>
  );
};

export default Signup;
