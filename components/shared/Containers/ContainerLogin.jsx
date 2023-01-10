import styled from "styled-components";
import ContainerAuth from "./ContainerAuth";
import Button1 from "@/components/shared/Buttons/Button1";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/auth/authApiSlice";
import { setOtpToken } from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const _ContainerLogin = styled(ContainerAuth)`
  display: grid;
  grid-auto-rows: repeat(4, 1fr);
  justify-content: center;
  align-content: space-around;
  align-items: center;
  justify-items: center;

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

const WelcomeText = styled.h2`
  font-family: stormfaze;
  font-size: var(--step-0);
  padding-bottom: 1rem;
  border-bottom: 1px solid #ebac45;
  display: inline-block;
`;

const PhNoSection = styled.div`
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
`;

const ContainerLogin = () => {
  const schema = z.object({
    phNumber: z
      .string()
      .length(10, { message: "Phone Number must be 10 digits long" })
      .regex(/^[1-9]\d{9}$/, {
        message: "Phone number should only include numbers",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const router = useRouter();

  const submitForm = async (value) => {
    console.log(value.phNumber, "phNumber"); // to delete

    const data = await login({ mobile: value.phNumber }).unwrap();
    dispatch(setOtpToken(data.otp_token));
    cookies.set("otpToken", data.otp_token, { path: "/" });
    router.push("/auth/otp");
  };

  if (errors.phNumber) { 
    console.log(errors.phNumber.message, "errors.phNumber.message"); // to delete
  }

  if (errors.phNumber) {
    toast.error(errors.phNumber.message);
  }

  return (
    <_ContainerLogin title="Login" onSubmit={handleSubmit(submitForm)}>
      <WelcomeText>WELCOME TO APTIWARRIOR</WelcomeText>
      <PhNoSection>
        <label htmlFor="phNumber">ENTER YOUR MOBILE NUMBER</label>
        <section className="phNumberInput" id="phNumber">
          <span className="countryCode">+91</span>
          <input type="tel" {...register("phNumber")} />
        </section>
      </PhNoSection>
      <Button1 isLoading={isLoading}>Continue</Button1>
      <strong>OR</strong>
      <section className="socialLogin ">
        <h5>Login using your social media accounts</h5>
        <section className="socialIcons">
          <span>G</span> <span>F</span> <span>in</span>
        </section>
      </section>
    </_ContainerLogin>
  );
};
export default ContainerLogin;
