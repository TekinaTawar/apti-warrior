import Account from "@/components/accountSettings/Account";
// import ModuleLocked from "@/components/shared/ModuleLocked";
// import RadioButtonGroup from "@/components/shared/RadioButtonGroup";
// import { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  //center the content vertically and horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = () => {
  // const [color, setColor] = useState({});
  return (
    <MainContainer>
      {/* <RadioButtonGroup
        groupName="Colors"
        values={["orange", "pink", "Black", "White"]}
        option={color}
        setOption={setColor}
      /> */}
      {/* <ModuleLocked /> */}
      <Account/>
    </MainContainer>
  );
};
export default Test;
