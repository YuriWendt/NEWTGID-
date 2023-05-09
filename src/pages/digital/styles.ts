import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";

export const StyledContainer = styled.div`
  max-width: 100%;

  @media ${theme.screenSizes.tablet} {
    width: 700px;
  }

  @media ${theme.screenSizes.mobile} {
    width: 320px;
    top: 40%;
    height: 60%;
  }
`;

export const SectionContent = styled.div`
  width: 50%;
  max-height: 50%;
  height: 400px;
  display: flex;
  background-color: ${theme.colors.black.color100};
  border: 1 solid ${theme.colors.primary.color60};
  border-radius: 8px;
  padding: 64px 64px 64px 64px !important;
  box-shadow: 9px 24px 40px 25px ${theme.colors.primary.color100};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${theme.screenSizes.tablet} {
    width: 70%;
    height: 300px;
  }

  @media ${theme.screenSizes.mobile} {
    width: 40%;
    height: 100%;
  }
`;

export const TextContent = styled.div`
  text-align: start;
  display: grid;
  z-index: 5;
`;

export const TypingEffect = styled.h1`
  display: grid;
  text-align: center;
  align-items: center;
  font-size: 48px;

  @media ${theme.screenSizes.tablet} {
    font-size: 24px;
    margin: 0;
  }

  @media ${theme.screenSizes.mobile} {
    font-size: 18px;
    margin: 0;
  }
`;

export const SubText = styled.p`
  text-align: start;

  @media ${theme.screenSizes.mobile} {
    font-size: 12px;
  }
`;

export const CodeBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CodeImage = styled.img`
  overflow: hidden;
  object-fit: cover;
  opacity: 0.4;
  mask-image: linear-gradient(-90deg, black 50%, transparent 100%);
  height: 400px;
  float: right;

  @media ${theme.screenSizes.mobile} {
    width: 100%;
  }
`;
