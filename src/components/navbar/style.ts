import styled, { keyframes } from "styled-components";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

const RightToLeft = keyframes`
    to {
        transform: translateX(-168px);
    }
`;

export const StyledContainer = styled.div`
  padding: 0;
  width: 100%;
  max-width: inherit;
  display: flex;
  box-shadow: 0 0 10px ${theme.colors.primary.color100};
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  justify-content: space-between;
  background: url(${theme.img.backgroundgradient});
  position: fixed;
  top: 0;
  z-index: 30;

  span {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0 32px;

  span {
    margin-left: auto;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    h1 {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 140px;
  height: 80px;
  z-index: 0;

  @media (max-width: 768px) {
  }
`;

export const TextLogo = styled.h1`
  font-family: 'Helvetica', 'Arial', sans-serif;
  @media (max-width: 768px) {
  }
`;

export const Text = styled.p`
  padding: 0 20px;
  position: relative;
  transform: none !important;
  overflow: hidden;

  :hover {
    color: ${theme.colors.primary.color100};
    text-shadow: none;
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div<{ isMobile: boolean }>`
  display: flex;

  @media (max-width: 768px) {
    width: max-content;
    display: ${({ isMobile }) => (isMobile ? "block" : "none")};
    border-radius: 3px;
    background: linear-gradient(200deg, #a8812d, #fff);
    color: black;
    position: absolute;
    height: 400px;
    right: 0;
    top: 80px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;
    overflow: hidden; /* Adicione overflow: hidden para esconder o conteúdo do menu quando a altura é 0 */
    transition: ${({ isMobile }) => (isMobile ? "height 0.3s ease" : "none")};
    z-index: 10;
  }
`;

export const List = styled.ul<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  margin: 0;
  transition: max-height 0.4s ease;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;

    li {
      position: relative;
      margin-top: 15px;
      font-size: 20px;
      font-weight: bolder;
    }
  }
`;

export const Items = styled.li`
  padding: 0 20px;
  position: relative;
  transform: none !important;
  overflow: hidden;

  :hover {
    color: ${theme.colors.secondary.color100};
    text-shadow: none;
    cursor: pointer;
  }
`;

export const SubList = styled.ul<{ showSubRoutes?: boolean }>`
  background-color: #212527;
  left: -23px;
  max-height: 0;
  overflow: hidden;
  padding: 0 30px;
  position: absolute;
  transition: max-height 0.4s ease, padding 0.4s ease;
  z-index: 100;
  display: ${(props) => (props.showSubRoutes ? "block" : "none")};

  @media (max-width: 768px) {
    left: 0;
  }
`;

export const ButtomMobile = styled.span`
  display: none;
  margin-right: 30px;
  width: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;
