import React, { useState } from "react";
import styled from "styled-components";

const _Options = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #fdcf1d;
    border-radius: 8px;
    padding-inline: var(--space-4xs-3xs);
    padding-block: var(--space-3xs-2xs);
    margin-inline: var(--space-4xs-3xs);
    margin-block: var(--space-3xs-2xs);
    gap: var(--space-xs);
    span {
      border: 1px solid #fdcf1d;
      border-radius: 10px;
      padding-inline: var(--space-3xs-2xs);
      padding-block: var(--space-3xs-2xs);
    }
  }

  input:checked ~ label{
    background-color: var(--secondary-0);
  }
`;

// option is fpr useState, options = {option, label} for radio button
const RadioButtonGroup = ({ groupName, options, option, setOption }) => {
  return (
    <>
      {options.map((value, i) => (
        <_Options key={i}>
          <input
            type="radio"
            name={groupName}
            id={value.value}
            value={value.value}
            onChange={(e) => {
              console.log("India", e);
              setOption(e.target.value);
            }}
            checked={value.value == option}
          />
          <label htmlFor={value.value}>{value.label}</label>
        </_Options>
      ))}
    </>
  );
};
export default RadioButtonGroup;
