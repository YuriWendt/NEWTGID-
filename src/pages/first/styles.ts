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
  position: absolute;
  margin-top: 80px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); 

   @media ${theme.screenSizes.mobile} {
    top: 40%;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  max-width: 100%;

  @media ${theme.screenSizes.mobile} {
    display: grid;
  }
`;

export const Logo = styled.img`
  z-index: 0;
  width: 400px;
  height: 120px;
  animation: ${spaceInRight} 4s;
  margin-top: 30px;

  @media ${theme.screenSizes.desktop} {
    width: 250px;
    height: 150px;
  }

  @media ${theme.screenSizes.tablet} {
    width: 200px;
    height: 100px;
  }

  @media ${theme.screenSizes.mobile} {
    width: 230px;
    height: 150px;
    margin-top: 10px;
  }
`;


export const GlitchEffect = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: left;

  @media ${theme.screenSizes.tablet} {
    margin-right: 5rem;
  }

  @media ${theme.screenSizes.mobile} {
    visibility: hidden;
    height: 0;
  }
`;

export const TextContent = styled.div`
  float: right;
  text-align: start;
  justify-content: right;
  display: grid;
  animation: ${swashIn} 3s forwards;

  h1 {
    font-size: 50px;
  }

  p {
    font-size: 20px;
    color: ${theme.colors.secondary.color100};
  }

  @media ${theme.screenSizes.desktop} {
    margin-left: 24px;
  }

  @media ${theme.screenSizes.tablet} {
    margin-left: 24px;
   h1 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }
  }

   @media ${theme.screenSizes.mobile} {
    margin-left: 50px;
   h1 {
    font-size: 30px;
  }

  p {
    font-size: 15px;
  }
  }
`;

export const MoreButtonStyled = styled.div`
  margin-left: 30%;
  width: 100%;

  @media ${theme.screenSizes.mobile} {
    margin-left: 15%;
  }
`;
