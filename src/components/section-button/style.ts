import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";


export const reflex = keyframes`
  0% {
    transform: translateY(0)
  }

  100% {
    transform: translateY(100%)
  }
`;

export const StyledButton = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border-color: rgba(156, 126, 68, 1);
  background: #191c20;
  position: absolute;
  right: 51%;
  bottom: 5%;
  cursor: pointer;
  transition: 0.2s;
  z-index: 9;
  &:hover {
    transform: scale(1.2);
  }

  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-color: rgba(156, 126, 68, 1);
    background: #191c20;
  }

  @media screen and (max-width: 767px) {
    display: none;
    right: 30%;
    bottom: 3%;
  }
`;


export const StyledCircle = styled.span`
  position: absolute
`;


