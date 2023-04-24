import styled, { keyframes } from "styled-components";
import "swiper/swiper-bundle.min.css";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const boingInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(1500px) rotateX(-90deg);
    transform: perspective(1500px) rotateX(-90deg);
  }
  50% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(1500px) rotateX(50deg);
    transform: perspective(1500px) rotateX(50deg);
  }
  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-transform: perspective(1500px) rotateX(0deg);
    transform: perspective(1500px) rotateX(0deg);
  }
`;

const animatedgradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ContainerStyled = styled(Container)`
  width: 100%;
  height: 100%;
`;

export const SectionTwo = styled.div`
  position: absolute;
  top: 125%;
  left: 16.5%;
  z-index: 15;
`;

export const SectionTwoContent = styled.div<{ sectionAtual: boolean }>`
  max-width: 100%;
  max-height: 90%;
  height: 450px;
  margin: 50px;

  h1 {
    animation: ${({ sectionAtual }) =>
      sectionAtual ? "${spaceInDown} 3s" : "none"};
  }
`;

export const TypingEffect = styled.span`
  display: grid;
  overflow: hidden;
  font-size: 48px;
  border-right: 3px solid #000; /* Adapte a cor e a largura da borda conforme necessário */
  white-space: nowrap;
`;

export const SubText = styled.p`
  color: ${theme.colors.primary.color100};
  text-align: start;
`;

export const SectionAtual = styled.div`
  &.animate {
    animation: ${boingInUp} 1s ease-in-out;
  }
`;
