import styled from "styled-components";
import { Container } from "../../globals/grid";
import { theme } from "../../globals/theme";

export const StyledContainer = styled.div`
  padding: 0;
  max-width: inherit;
  display: flex;
  //background-color: #151811;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  height: 80px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  justify-content: space-between;

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
`;

export const Logo = styled.img`
  z-index: 0;
`;

export const Text = styled.p`
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

export const List = styled.ul<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  margin: 0;
  max-height: ${(props) => (props.isMobile ? "100%" : "auto")};
  transition: max-height 0.4s ease;
  width: 100%;
  align-items: center;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  overflow: ${(props) => (props.isMobile ? "auto" : "visible")};

  @media (max-width: 768px) {
    max-height: ${(props) => (props.isMobile ? "100%" : "0")};
    overflow: hidden;
    flex-direction: column;
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
  width: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;
