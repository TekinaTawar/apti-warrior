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
    :hover {
      cursor: pointer;
    }
  }

  input:checked ~ label {
    background-color: var(--secondary-0);
  }
`;

// option is for useState, options = {option, label} for radio button
const RadioButtonGroup = ({ sectionName, options, option, setOption }) => {
  return (
    <>
      {options.map((_option) => (
        <_Options key={_option.value}>
          <input
            type="radio"
            name={sectionName}
            id={_option.value}
            value={_option.value}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            checked={_option.value == option}
          />
          <label htmlFor={_option.value}>{_option.label}</label>
        </_Options>
      ))}
    </>
  );
};
export default RadioButtonGroup;
