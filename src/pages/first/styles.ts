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
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  z-index: 0;
  width: 200px;
  height: 200px;
  animation: ${spaceInRight} 4s;

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  padding: 5rem;

  @media screen and (max-width: 768px) {
    display: grid;
    padding: 2rem;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const GlitchEffect = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    width: min-content;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Stick = styled.span`
  width: 3px;
  height: 500px;
  background: ${theme.colors.secondary.color100};
  position: absolute;
  margin: 3rem;
  right: 50%;
  top: 20%;

  @media screen and (max-width: 767px) {
    width: 300px;
    height: 3px;
    margin: 0;
    position: absolute;
    right: 10%;
    top: 50%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 500px;
    height: 3px;
    margin: 0;
    position: absolute;
    right: 20%;
    top: 50%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    position: absolute;
    right: 49%;
    top: 10%;
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

  @media screen and (min-width: 1025px) and (max-width: 1367px) {
    margin-top: 5rem;
  }
`;

export const MoreButtonStyled = styled.div`
  margin-top: 100px;
  margin-left: 300px;
`;