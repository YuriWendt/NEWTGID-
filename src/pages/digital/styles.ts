import styled, { keyframes } from "styled-components";
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

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SectionContent = styled.div`
  max-width: 700px;
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
  background-color: ${theme.colors.black.color100};
  border: 1 solid ${theme.colors.primary.color60};
  border-radius: 8px;
  padding: 64px 64px 64px 64px !important;
  box-shadow: 9px 24px 40px 25px ${theme.colors.primary.color100};
`;

export const TypingEffect = styled.span`
  display: grid;
  overflow: hidden;
  font-size: 48px;
  border-right: 3px solid #000; /* Adapte a cor e a largura da borda conforme necessário */
  white-space: nowrap;

  @media ${theme.screenSizes.desktop} {
    font-size: 24px;
  }
`;

export const SubText = styled.p`
  text-align: start;
`;

export const CodeBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CodeImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  opacity: 0.4;
  mask-image: linear-gradient(-90deg, black 50%, transparent 100%);
  height: 300px;
  float: right;
`;
