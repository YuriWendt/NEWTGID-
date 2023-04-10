import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";

const buttonLeftAnimation = keyframes`
  0% {
    transform: translate(0%, -100%);
  }
  25% {
    transform: translate(50%, -75%);
  }
  50% {
    transform: translate(25%, -50%);
  }
  75% {
    transform: translate(0%, -25%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

const buttonBottomAnimation = keyframes`
  0% {
    transform: translate(-100%);
  }
  10% {
    transform:  translate(-90%);
  }
  20% {
    transform:  translate(-80%);
  }
  30% {
    transform:  translate(-70%);
  }
  40% {
    transform: translate(-60%);
  }
  50% {
    transform:  translate(-50%);
  }
  60% {
    transform: translate(-40%) 
  }
  70% {
    transform:  translate(-30%);
  }
  80% {
    transform: translate(-20%);
  }
  90% {
    transform:  translate(-10%);
  }
  100% {
    transform: translate(0%);
  }
`;

const buttonRightAnimation = keyframes`
  0% {
    transform: translate(100%, 0%);
  }
  25% {
    transform: translate(75%, 50%);
  }
  50% {
    transform: translate(50%, 25%);
  }
  75% {
    transform: translate(25%, 0%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

const buttonTopAnimation = keyframes`
   0% {
    transform: translate(100%);
  }
  10% {
    transform:  translate(90%);
  }
  20% {
    transform:  translate(80%);
  }
  30% {
    transform:  translate(70%);
  }
  40% {
    transform: translate(60%);
  }
  50% {
    transform:  translate(50%);
  }
  60% {
    transform: translate(40%) 
  }
  70% {
    transform:  translate(30%);
  }
  80% {
    transform: translate(20%);
  }
  90% {
    transform:  translate(10%);
  }
  100% {
    transform: translate(0%);
  }
`;

export const ButtonTop = styled.span`
  background: ${theme.colors.secondary.color100};
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  top: 0;
`;

export const ButtonBottom = styled.span`
  background: ${theme.colors.secondary.color100};
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
`;

export const ButtonRight = styled.span`
  background: ${theme.colors.secondary.color100};
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  right: 0;
`;

export const ButtonLeft = styled.span`
  background: ${theme.colors.secondary.color100};
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 0;
`;

export const StyledButton = styled.span`
  color: ${theme.colors.secondary.color100};
  background: transparent;
  display: inline-block;
  font: 14px Gotham HTF Medium;
  letter-spacing: 1.5px;
  overflow: hidden;
  padding: 13px 50px;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 2px 0 10px ${theme.colors.secondary.color100};
  cursor: pointer;
  ${ButtonBottom} {
    animation: ${buttonBottomAnimation} 0.5s forwards;
  }
  ${ButtonRight} {
    animation: ${buttonRightAnimation} 0.5s forwards;
    animation-delay: 0.5s;
    animation-fill-mode: both;
    
  }
  ${ButtonTop} {
    animation: ${buttonTopAnimation} 0.5s forwards;
    animation-delay: 1s;
    animation-fill-mode: both;
  }
  ${ButtonLeft} {
    animation: ${buttonLeftAnimation} 0.5s forwards;
    animation-delay: 1.5s;
    animation-fill-mode: both;
  }
`;
