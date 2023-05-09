import styled, { css, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../../globals/theme";
import "swiper/swiper-bundle.min.css";
import { Container } from "../../globals/grid";
import { GlitchEffect } from "../first/styles";

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

export const ContainerStyled = styled(Container)`
  display: grid;
  text-align: center;
  justify-content: center;

  @media ${theme.screenSizes.mobile} {
    visibility: hidden;
  }
`;

export const Card = styled.div<{ isSelected: boolean, backgroundImage: string }>`
  width: 100%;
  border-radius: 8px;
  ${(props) =>
    props.isSelected &&
    css`
      transform: scale(1.05);
      box-shadow: 0 4px 6px ${theme.colors.primary.color100};
    `}
  animation: ${boingInUp} 1s;
  transition: all 0.3s ease-in-out;
  z-index: 5;
  overflow: visible;

  @media screen and (min-width: 1360px) and (max-width: 1500px){
    width: 90%;
    margin-left: 100px;
  }

  @media ${theme.screenSizes.tablet} {
    margin-top: 10px;
    margin-left: 50px;
    width: 90%;
  }
`;

export const CardBackground = styled.div<{ isSelected: boolean, backgroundImage: string }>`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: transparent;
  background-image: ${({ isSelected, backgroundImage }) =>
    isSelected ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  z-index: 4;
  opacity: 0.2;
  overflow: visible;
`;

export const LogoCard = styled.div`

img {
    position: absolute;
    left: 5%;
    top: 15%;
    width: 250px;
    height: 150px;
  }
`;

export const SwiperRect = styled.rect`
  fill: transparent;
  stroke: ${theme.img.borderCard};
`;

export const SwiperBackgroundImage = styled.image`
  width: 100%;
  height: 100px;
  fill: transparent;
`;

export const CardContent = styled.div`
  width: 250px;
  height: 300px;
  position: absolute;
  right: 5%;
  top: 20%;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 200px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
    .swiper-button-prev,
    .swiper-button-next {
      height: 30px;
      width: 30px;
      background-color: ${theme.colors.secondary.color100};
      border-radius: 50%;
      color: ${theme.colors.primary.color100};
      font-size: 24px;
      z-index: 10;
      &:hover {
        transform: scale(1.3);
      }
    }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-family: "swiper-icons";
    font-size: 12px;
  }

  @media ${theme.screenSizes.tablet} {
    margin-top: 100px;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)<{ isSelected: boolean }>`
  @media ${theme.screenSizes.desktop} {
    margin-top: 100px;
    height: 180px;
    line-height: 100px;
    text-align: center;
    transform: ${({ isSelected }) => (isSelected ? "scale(1.5)" : "none")};
    transition: ${({ isSelected }) =>
      isSelected ? "transform 0.3s ease-in-out" : "none"};
    z-index: ${({ isSelected }) => (isSelected ? "2" : "1")};
    filter: ${({ isSelected }) => (isSelected ? "none" : "grayscale(100%)")};
  }

  @media ${theme.screenSizes.tablet} {
    width: 100%;
    transition: ${({ isSelected }) =>
      isSelected ? "transform 0.3s ease-in-out" : "none"};
    z-index: ${({ isSelected }) => (isSelected ? "2" : "1")};
    filter: ${({ isSelected }) => (isSelected ? "none" : "grayscale(100%)")};
  }
`;

export const SwiperContent = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SwiperProductsImage = styled.img`
  width: 125px;
  object-fit: cover;
  top: 15%;
  left: 35%;
  position: absolute;

  @media ${theme.screenSizes.tablet} {
    top: 20%;
  }
`;

export const SectionSlidesContainer = styled.div`
  width: 100%;
  position: absolute;
`;

export const ContainerStyledMobile = styled(Container)`
  display: grid;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;
  visibility: hidden;

  @media ${theme.screenSizes.mobile} {
    visibility: visible;
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

export const ImageMobile = styled.img`
  width: 200px;
  margin-top: 10px;
  filter: grayscale(100%);
`;
