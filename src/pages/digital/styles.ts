import styled, { keyframes } from "styled-components";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

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

export const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  padding: 4rem;

  @media screen and (max-width: 768px) {
    display: grid;
    padding: 2rem;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionTwoContent = styled.div`
  display: flex;
  background-color: ${theme.colors.black.color100};
  border: 1 solid ${theme.colors.primary.color60};
  border-radius: 8px;
  padding: 128px 0px 64px 64px !important;
  box-shadow: 9px 24px 40px 25px ${theme.colors.primary.color100};
`;

export const TypingEffect = styled.span`
  display: grid;
  overflow: hidden;
  font-size: 48px;
  border-right: 3px solid #000; /* Adapte a cor e a largura da borda conforme necessário */
  white-space: nowrap;
`;

export const SubText = styled.p`
  text-align: start;
`;

export const SectionAtual = styled.div`
  &.animate {
    animation: ${boingInUp} 1s ease-in-out;
  }
`;

export const CodeBox = styled.div`
  mask-image: linear-gradient(-90deg, black 50%, transparent 100%);
`;