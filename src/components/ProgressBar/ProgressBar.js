/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: { "--height": 8 + "px", "--padding": 0, "--border-radius": 4 + "px" },
  medium: {
    "--height": 12 + "px",
    "--padding": 0,
    "--border-radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--border-radius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <WrapperBase
      style={styles}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <Bar size={size} value={value}></Bar>
    </WrapperBase>
  );
};

const WrapperBase = styled.div`
  width: 370px;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--border-radius);
`;

const Bar = styled.div`
  width: ${p =>
    p.size === "large"
      ? (362 / 100) * p.value + "px"
      : (370 / 100) * p.value + "px"};
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.value === 100 && "4px"};
  border-bottom-right-radius: ${p => p.value === 100 && "4px"};
`;

export default ProgressBar;
