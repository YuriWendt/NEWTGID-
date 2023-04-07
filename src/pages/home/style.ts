import styled, { keyframes } from "styled-components";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

const spaceInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scale(0.2) translate(0%, 200%);
    transform: scale(0.2) translate(0%, 200%);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scale(1) translate(0%, 0%);
    transform: scale(1) translate(0%, 0%);
  }
`;

const spaceInRight = keyframes`
    0% {
    opacity: 0;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scale(0.2) translate(200%, 0%);
    transform: scale(0.2) translate(200%, 0%);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scale(1) translate(0%, 0%);
    transform: scale(1) translate(0%, 0%);
  }
`;

const swashIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }

  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
`;

export const SectionWrapper = styled.section`
  height: 100vh; /* Define a altura como 100% da altura da janela */
`;

export const SectionContent = styled.div`
  max-width: 800px;
  padding: 0 16px;
  text-align: center;
`;

export const BackgroundStyled = styled.div`
  background: url("https://www.fiap.com.br/wp-content/themes/fiap2016/images/shared/background/gradiente.jpg")
    top repeat-y;
  background-size: contain;
  position: relative;
`;

export const Logo = styled.img`
  z-index: 0;
  width: 200px;
  height: 200px;
  animation: ${spaceInRight} 4s;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  padding: 5rem;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    flex-direction: column;
    padding: 2rem;
  }
`;

export const StyledContent = styled.div`
  max-width: 550px;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    max-width: 100%;
  }
`;

export const TextContent = styled.div`
  max-width: 400px;
  margin-top: 7rem;
  float: right;
  text-align: start;
  display: grid;
  animation: ${swashIn} 3s forwards;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
    color: ${theme.colors.secondary.color100};
  }

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    float: none;
    margin-top: 3rem;
    text-align: center;
  }
`;

export const GlitchEffect = styled.div`
  position: relative;
`;

export const Stick = styled.span`
  width: 3px;
  height: 500px;
  background: ${theme.colors.secondary.color100};
  position: absolute;
  margin: 3rem;
  right: 50%;
  top: 20%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SliderList = styled.div`
  position: absolute;
  top: 125%;
  left: 16.5%;
`;
