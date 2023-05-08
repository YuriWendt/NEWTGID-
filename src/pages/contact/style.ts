import styled, { css, keyframes } from "styled-components";
import { Label } from "../../globals/texts";
import { theme } from "../../globals/theme";
import { Input } from "../../globals/forms";
import { GridProps } from "../../types/GridTypes";
import { Container } from "../../globals/grid";

const LeftAnimation = keyframes`
  0% {
    transform: translate(0%, -100%);
  }
  25% {
    transform: translate(50%, -75%);
  }
  50% {
    transform: translate(25%, -50%);
  }
  75% {
    transform: translate(0%, -25%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

const BottomAnimation = keyframes`
  0% {
    transform: translate(-100%);
  }
  10% {
    transform:  translate(-90%);
  }
  20% {
    transform:  translate(-80%);
  }
  30% {
    transform:  translate(-70%);
  }
  40% {
    transform: translate(-60%);
  }
  50% {
    transform:  translate(-50%);
  }
  60% {
    transform: translate(-40%) 
  }
  70% {
    transform:  translate(-30%);
  }
  80% {
    transform: translate(-20%);
  }
  90% {
    transform:  translate(-10%);
  }
  100% {
    transform: translate(0%);
  }
`;

const RightAnimation = keyframes`
  0% {
    transform: translate(100%, 0%);
  }
  25% {
    transform: translate(75%, 50%);
  }
  50% {
    transform: translate(50%, 25%);
  }
  75% {
    transform: translate(25%, 0%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

const TopAnimation = keyframes`
   0% {
    transform: translate(100%);
  }
  10% {
    transform:  translate(90%);
  }
  20% {
    transform:  translate(80%);
  }
  30% {
    transform:  translate(70%);
  }
  40% {
    transform: translate(60%);
  }
  50% {
    transform:  translate(50%);
  }
  60% {
    transform: translate(40%) 
  }
  70% {
    transform:  translate(30%);
  }
  80% {
    transform: translate(20%);
  }
  90% {
    transform:  translate(10%);
  }
  100% {
    transform: translate(0%);
  }
`;

export const ContainerStyled = styled(Container)`
  text-align: center;
  display: grid;
  justify-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input {
    border-radius: 6px;
  }

  #label {
    font-weight: 400;
    font-size: 16px;
    text-transform: none;
    margin-right: 24px;
    width: 80px;
  }
`;

export const StyledForm = styled.div`
  margin: 10px;
`;

export const StrongLabel = styled(Label)`
  font-weight: 700;
  text-transform: uppercase;
  padding-right: 10px;
`;

export const InputContent = styled.div`
  //display: flex;
  display: grid;
  position: relative;

  > div {
    top: 16px;
    position: absolute;
    right: 16px;

    * {
      text-decoration: none;
      color: ${theme.colors.primary.color60};
    }

    svg {
      font-size: 20px;
    }
  }
`;

export const StyledInputMask = styled(Input)<{ isLarge?: boolean }>`
  
  padding: 0 16px;
  border-radius: 12px;
  color: ${theme.colors.black.color100};
  border: 1px solid ${theme.colors.black.color20};
  height: 48px;
  font-size: 16px;

  @media ${theme.screenSizes.mobile} {
    height: 42px;
    padding: 0 8px;
  }
`;

export const TextInput = styled.textarea`
  max-height: 100px;
  height: 100px;
  white-space: pre-wrap;
`;

export const Column = styled.div<GridProps>`
  float: left;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && widthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    ${({ tablet }) => tablet && widthGrid(tablet)}
  }

  @media only screen and (min-width: 1024px) {
    ${({ desktop }) => desktop && widthGrid(desktop)}
  }
`;

function widthGrid(value: number) {
  const width = (value / 12) * 100;
  return css`
    width: ${width}%;
  `;
}

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 0 48px;

  button {
    margin-left: 16px;
  }
`;

export const Wrapper = styled.div`
  .button {
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 0 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;

    &:hover {
      width: 200px;
    }

    .icon {
      color: ${theme.colors.primary.color100};
      display: inline-block;
      float: left;
      height: 60px;
      width: 60px;
      text-align: center;
      border-radius: 50px;
      box-sizing: border-box;
      line-height: 60px;
      transition: all 0.3s ease-out;

      i {
        font-size: 25px;
        line-height: 60px;
        transition: all 0.3s ease-out;
      }
    }

    &:nth-child(1):hover {
      .icon {
        background: #4267b2;
      }

      span {
        color: #4267b2;
      }

      .icon i {
        color: #fff;
      }
    }

    &:nth-child(2):hover {
      .icon {
        background: #026fab;
      }

      span {
        color: #026fab;
      }

      .icon i {
        color: #fff;
      }
    }

    &:nth-child(3):hover {
      .icon {
        background: #e1306c;
      }

      span {
        color: #e1306c;
      }

      .icon i {
        color: #fff;
      }
    }

    &:nth-child(4):hover {
      .icon {
        background: #333;
      }

      span {
        color: #333;
      }

      .icon i {
        color: #fff;
      }
    }

    &:nth-child(5):hover {
      .icon {
        background: #ff0000;
      }

      span {
        color: #ff0000;
      }

      .icon i {
        color: #fff;
      }
    }

    span {
      font-size: 20px;
      font-weight: 500;
      line-height: 60px;
      margin-left: 10px;
      transition: all 0.3s ease-out;
    }
  }
`;
