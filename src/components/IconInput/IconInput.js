import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper size={size} width={width}>
      <IconWrapper>
        <Icon
          id={icon}
          strokeWidth={size === "large" ? 2 : 1}
          size={size === "large" ? 24 : 16}
        />
      </IconWrapper>
      <InputWrapper
        type='text'
        placeholder={placeholder}
        size={size}
        width={width}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: ${p => (p.size === "large" ? "2px solid" : "1px solid")};
  border-color: ${COLORS.black};
  color: ${COLORS.gray700};
  position: relative;
  width: ${p => p.width + "px"};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  //color: inherit;
  position: absolute;
  top: 0.2rem;
`;

const InputWrapper = styled.input`
  border: 0;
  color: inherit;
  font-size: ${p => (p.size === "large" ? 18 / 16 + "rem" : 14 / 16 + "rem")};
  font-weight: 700;
  line-height: 1.6;
  outline-offset: 4px;
  padding-left: ${p => (p.size === "large" ? "2rem" : "1.4rem")};
  width: ${p => p.width + "px"};
  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
