import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.white};
    background: url(${theme.img.backgroundgradient});
    

    > div{
      /* min-height:100vh;
      height: 100%;
      display: table;
      width: 100%; */
    }
  }

  body, input, button, textarea, select, option{
    font: 400 16px 'Gotham HTF Book', sans-serif;

@media screen and (min-width: 768px) {
    
  }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Table = styled.table`
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 8px 0 ${theme.colors.primary.color100};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${theme.colors.white};

  th,
  td {
    padding: 15px 22px;
  }
`;
export const TableContainer = styled.div`
  overflow-x: auto;

  @media ${theme.screenSizes.smallScreen} {
    width: 100%;

    &::-webkit-scrollbar {
      display: block;
      height: 6px;
      background-color: ${theme.colors.black.color40};
    }

    &::-webkit-scrollbar-thumb {
      display: block;
      height: 4px;
      border-radius: 8px;
      background-color: ${theme.colors.black.color60};
    }
  }
`;

export const Head = styled.thead`
  background-color: ${theme.colors.primary.color100};
  border: none;
  color: ${theme.colors.white};
  text-align: left;

  th {
    font-size: 16px;
  }
`;

export const Body = styled.tbody`
  color: ${theme.colors.black};

  tr {
    border-bottom: 1px solid ${theme.colors.black.color20};
  }
`;

export const CellOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

export const MenuNavigation = styled.div`
  display: flex;
  padding: 0 24px;
  margin-bottom: 40px;
`;

export const Menu = styled.div<{ active?: boolean; hasCompleted?: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${theme.colors.black.color20};
  border-bottom: 1px solid ${theme.colors.black.color20};

  color: ${(props) =>
    props.active ? theme.colors.primary.color60 : theme.colors.black.color20};
  padding: 16px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;

  ${(props) =>
    props.active
      ? css`
          color: ${theme.colors.primary.color60};
          border-bottom: 1.5px solid ${theme.colors.primary.color60};
        `
      : (props) =>
          props.hasCompleted &&
          css`
            color: ${theme.colors.primary.color40};
            border-bottom: 1.5px solid ${theme.colors.primary.color40};
          `};
`;

export const Card = styled.div`
  width: 208px;
  height: 88px;
  margin-right: 16px;
  border: 1px solid ${theme.colors.black.color40};
  box-sizing: border-box;
  border-radius: 6px;

  span {
    display: block;
    margin: 16px 16px;
  }
`;

export const CellInfo = styled.div`
  font-size: 13px;
  margin-top: 8px;
`;

export const CellValue = styled.div<{ value: number }>`
  ${(props) =>
    props.value && props.value > 0
      ? css`
          color: ${theme.colors.green.color100};
        `
      : css`
          color: ${theme.colors.red.color100};
        `};
`;

export const CellStatus = styled.div<{ status?: number }>`
    border-radius: 24px;
    padding: 4px 8px;
    text-align: center;
    ${(props) =>
      props.status === 1 &&
      css`
        background-color: ${theme.colors.yellow};
      `}
    ${(props) =>
      props.status === 2 &&
      css`
        background-color: ${theme.colors.green.color60};
      `}
    ${(props) =>
      props.status === 3 &&
      css`
        background-color: ${theme.colors.red.color60};
      `}
    ${(props) =>
      props.status === 4 &&
      css`
        background-color: ${theme.colors.blue.color60};
      `}
    ${(props) =>
      props.status === 5 &&
      css`
        background-color: ${theme.colors.red.color60};
      `}
    ${(props) =>
      props.status === 6 &&
      css`
        background-color: ${theme.colors.secondary.color60};
      `}
`;
