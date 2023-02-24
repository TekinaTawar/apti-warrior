import styled from "styled-components";
import OtpInput from "react-otp-input";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useVerifyOtpMutation } from "@/redux/auth/authApiSlice";
import { useRouter } from "next/router";
import { selectOtpToken } from "@/redux/auth/authSlice";
import Cookies from "universal-cookie";

import Button1 from "@/components/shared/Buttons/Button1";
import Button from "@/components/shared/Buttons/Button";
import ContainerAuth from "@/components/shared/Containers/ContainerAuth";

//*Styled Component

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

const ContainerOtp = styled(ContainerAuth)`
  display: grid;
  justify-content: center;
  align-content: space-around;
  justify-items: center;

  /* grid-auto-rows: repeat(6, 1fr); */

  > .mobileNumberEdit {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .otpContainer {
    display: flex;
    gap: 0.5rem;

    & input {
      border-radius: 5px;
      border: 1px solid var(--golden-yellow3);
      background-color: black;
      font-size: 2rem;
      color: white;
    }
  }
`;

const EditButton = styled(Button)`
  border: 3px solid var(--primary--100);
  padding-inline: var(--space-2xs-xs);
  padding-block: var(--space-4xs-3xs);
  text-transform: Capitalize;
  font-family: metropolis;
`;

//*Styled Component


const Otp = () => {
  const { handleSubmit, control } = useForm();
  const [verifyOtp, { isLoading, isSuccess }] = useVerifyOtpMutation();
  const otpToken = useSelector(selectOtpToken);
  const router = useRouter();
  const cookies = new Cookies();

  const foo = async ({ otp }) => {
    try {
      // console.log({ otp, otpToken });
      const data = await verifyOtp({ otp, otpToken }).unwrap();
      localStorage.setItem("userToken", data?.access_token);
      cookies.set("jwt", data?.access_token, { path: "/" });
      cookies.remove("otpToken", {path: "/"});
      router.push("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainContainer>
      <ContainerOtp title={"OTP"} onSubmit={handleSubmit(foo)}>
        <h3 className="verifyMobileLabel">VERIFY YOUR MOBILE NUMBER</h3>
        <div className="mobileNumberEdit">
          <h3 className="mobileNo">+91-1234567890</h3>
          <EditButton> Edit </EditButton>
        </div>
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <OtpInput
              {...field}
              numInputs={6}
              containerStyle="otpContainer"
              isInputNum={true}
            />
          )}
        />
        <h4>Enter your OTP</h4>
        <Button1>Verify</Button1>
      </ContainerOtp>
    </MainContainer>
  );
};
export default Otp;
