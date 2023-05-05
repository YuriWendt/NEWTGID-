import styled, { css, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../../globals/theme";
import "swiper/swiper-bundle.min.css";
import { Container } from "../../globals/grid";

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
  text-align: center;
  display: grid;
  justify-content: center;
`;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  transform: translateX(-50%);
  margin-left: 50%;
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
`;

export const SwiperSlideStyled = styled(SwiperSlide)<{ isSelected: boolean }>`
  margin-top: 100px;
  height: 200px;
  line-height: 300px;
  text-align: center;
  transform: ${({ isSelected }) => (isSelected ? "scale(1.5)" : "none")};
  transition: ${({ isSelected }) =>
    isSelected ? "transform 0.3s ease-in-out" : "none"};
  z-index: ${({ isSelected }) => (isSelected ? "2" : "1")};
  filter: ${({ isSelected }) => (isSelected ? "none" : "grayscale(100%)")};

  @media (max-width: 1280px) {
    height: 400px;
  }

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 767px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const SwiperContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  img {
    width: 50%;
    object-fit: cover;
    top: 50px;
    left: 25%;
    position: absolute;
  }

  svg.swiper-slide-background {
    image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Card = styled.div<{
  isSelected: boolean;
  backgroundImage: string;
}>`
  max-width: 100%;
  max-height: 300px;
  display: flex;
  width: 1200px;
  height: 300px;
  margin-top: 30px;
  border-radius: 8px;
  position: relative;
  ${(props) =>
    props.isSelected &&
    css`
      transform: scale(1.05);
      box-shadow: 0 4px 6px ${theme.colors.primary.color100};
    `}
  animation: ${boingInUp} 1s;
  transition: all 0.3s ease-in-out;
  z-index: 5;
`;

export const CardBackground = styled.div<{
  isSelected: boolean;
  backgroundImage: string;
}>`
  width: 1200px;
  height: 300px;
  border-radius: 8px;
  background-color: transparent;
  background-image: ${({ isSelected, backgroundImage }) =>
    isSelected ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  z-index: 4;
  opacity: 0.2;
`;

export const LogoCard = styled.div`
  position: absolute;
  left: 5%;
  top: 15%;

  img {
    width: 250px;
    height: 200px;
  }
`;

export const CardContent = styled.div`
  width: 250px;
  height: 300px;
  position: absolute;
  right: 5%;
  top: 40%;
`;

export const SectionSlidesContainer = styled.div`
  width: 100%;
  position: absolute;
`;
