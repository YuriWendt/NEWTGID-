import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";
import { Link } from "react-scroll";

export const reflex = keyframes`
  0% {
    transform: translateY(0)
  }

  100% {
    transform: translateY(100%)
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  transition: 0.2s;
  svg {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-color: rgba(156, 126, 68, 1);
    background: #191c20;
  }

  @media screen and (max-width: 767px) {
    display: none;
    right: 30%;
    bottom: 3%;
  }
`;
