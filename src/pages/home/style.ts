import styled, { CSSProperties, keyframes } from "styled-components";
import "swiper/swiper-bundle.min.css";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

interface LineProps {
  background: CSSProperties["background"];
}

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

export const ContainerLine = styled.div`
  display: grid;
  align-items: center;
  position: absolute;
  left: 3%;
  top: 0;
  bottom: 0;
`;


export const Line = styled.div`
  width: 4px;
  height: 100%;
`;

export const IconsStyle = styled.span`
  position: absolute;
  background-color: ${theme.colors.secondary.color100};
  filter: blur(18px);
`;
