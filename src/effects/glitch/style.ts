import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";

export const stackAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -4px 6px 0 red, 4px -6px 0 blue;
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 4px -6px 0 red, -4px 6px 0 blue;
  }
  100% {
    text-shadow: none;
  }
`;

export const glitchAnimation = keyframes`
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 100% {  text-shadow: none; transform: none; }
`;

export const Stack = styled.span<{ index: number; stacks: number }>`
  margin: 1rem;
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 4rem;
  --stack-height: calc(100% / ${(props) => props.stacks} - 1px);
  --clip-top: calc(var(1) * ${(props) => props.index});
  --clip-bottom: calc(var(1) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: ${stackAnimation} 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1
      backwards calc(${(props) => props.index} * 120ms),
    ${glitchAnimation} 2s ease infinite 1s alternate-reverse;

  @media screen and (max-width: 768px) {
    margin: 5px;
    font-size: 50px;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media ${theme.screenSizes.desktop} {
    margin: 5px;
    font-size: 50px;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

`;
