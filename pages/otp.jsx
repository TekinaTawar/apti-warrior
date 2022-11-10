import { useState } from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";

import Modal from "components/shared/Modal";
import BorderButton from "components/shared/BorderButton";

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

const OtpModal = styled(Modal)`
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

const login = () => {
  const [otp, setOtp] = useState();

  return (
    <MainContainer>
      <OtpModal modalHead={"OTP"}>
        <h3 className="verifyMobileLabel">VERIFY YOUR MOBILE NUMBER</h3>
        <div className="mobileNumberEdit">
          <h3 className="mobileNo">+91-1234567890</h3>
          <BorderButton> Edit </BorderButton>
        </div>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={6}
          containerStyle="otpContainer"
          isInputNum={true}
        />
        <h4>Enter your OTP</h4>
        <BorderButton>Verify</BorderButton>
      </OtpModal>
    </MainContainer>
  );
};
export default login;
