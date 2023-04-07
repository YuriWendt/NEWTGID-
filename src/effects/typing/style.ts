import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";

export const typing = keyframes`
    to {
    width: 0;
  }
  `;

export const caret = keyframes`
  50% {
    color: transparent;
  }
`;

export const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TypeWriter = styled.span`
  position: relative;

  &:after {
    content: "|";
    position: absolute;
    right: 0;
    width: 100%;
    color: ${theme.colors.secondary.color100};
    animation: ${typing} 2s steps(21, end),
      ${caret} 0.5s step-end infinite alternate;
  }
`;

export const TypingTextWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

export const TypingCursor = styled.span`
  display: inline-block;
  width: 0.4em;
  height: 1em;
  background-color: #000;
  animation: ${blink} 0.7s infinite;
  margin-left: 0.2em;
  vertical-align: middle;
`;
