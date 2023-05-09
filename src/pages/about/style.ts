import styled from "styled-components";
import { theme } from "../../globals/theme";
import { GlitchEffect } from "../first/styles";

export const StyledContent = styled.div`
  display: flex;
  width: max-content;
  background-color: red;

  p {
    width: 500px;
    margin: 20px;
    letter-spacing: 1px;
  }
`;

export const Objetive = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  width: 100%;
  color: ${theme.colors.white};
  -webkit-text-stroke-color: ${theme.colors.primary.color100};
  -webkit-text-stroke: 0.5px;

  @media ${theme.screenSizes.mobile} {
    grid-template-columns: 100%;
  }
`;

export const SubObjetive = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media ${theme.screenSizes.mobile} {
    visibility: hidden;
  }
`;

export const StyledContainer = styled.div`
  height: 20px;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  display: block;
  position: relative;
  //border-right: 1px solid ${theme.colors.primary.color100};
  border-radius: 4px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(200deg, #ff0077, #00d0ff);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 100% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(21);
  }

  @media ${theme.screenSizes.tablet} {
    height: 20px;
    padding: 20px;
  }

`;

export const GlitchEffectStyled = styled(GlitchEffect)`
  margin-bottom: 60px;
  @media ${theme.screenSizes.mobile} {
    margin-bottom: 100px;
    visibility: visible;
    height: none;
  }
`;
