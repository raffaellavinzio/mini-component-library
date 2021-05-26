import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper
        displayedValue={displayedValue}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectWrapper>
      <Icon id='chevron-down' size={24} style={IconDelegatedStyles} />
    </Wrapper>
  );
};

const IconDelegatedStyles = {
  color: "inherit",
  position: "relative",
  right: "2.5rem",
  top: "0.7rem",
};

const Wrapper = styled.div`
  display: flex;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: 0;
  color: inherit;
  font-size: 1rem;
  height: 43px;
  max-width: ${p => p.displayedValue.length * 9 + 12 + 52 + 2 + "px"};
  padding: 12px 52px 12px 16px;
`;

export default Select;
