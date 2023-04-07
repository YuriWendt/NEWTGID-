import styled, { css, keyframes } from "styled-components";
import { theme } from "../../globals/theme";

const slideDownReturn = keyframes`
  0% {
    transform-origin: 0 0;
    transform: translateY(100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    overflow-x: auto;
    white-space: nowrap;
  }
`;

// Container para os slides
export const SlideContainer = styled.div`
  display: flex;
  transition: "transform 0.5s ease-in-out";

  @media (max-width: 768px) {
    display: grid;
    width: 90px;
    height: 90px;
  }
`;

// Card
export const Card = styled.div`
  height: 180px;
  max-height: 180px;
  flex: 0 0 300px;
  margin-right: 16px;
  /* Estilos adicionais do card */
  background-color: #16171b;
  border: 1px solid rgba(156, 126, 68, 1);
  border-radius: 8px;
  padding: 16px;
  opacity: 0.5;

  img {
    width: 300px;
    margin: 30px;
  }

  :hover {
    background-color: #0e1114;
    color: ${theme.colors.secondary.color100};
  }

  &.selected {
    background-color: #0e1114;
    opacity: 1;
    transform: scale(1.1);
    transition: "transform 0.5s ease-in-out";
    z-index: 3;
  }

  @media (max-width: 768px) {
    display: grid;
    width: 90px;
    height: 90px;
  }
`;

export const OpenedCard = styled.div<{ animation: boolean }>`
  width: 360px;
  height: 400px;
  background-color: #16171b;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 16px;
  z-index: 4; /* Define a ordem de empilhamento para ficar em cima do slider */
  justify-content: center;
  position: relative;
  margin-left: 410px;
  color: ${theme.colors.secondary.color100};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.span`
    font-size: 36px;
`
