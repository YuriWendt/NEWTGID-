import styled from "styled-components";
import { theme } from "../../globals/theme";

export const StyledContent = styled.div`
  display: flex;
  width: 100%;

  p {
    width: 500px;
    margin: 20px;
    letter-spacing: 1px;
  }
`;

export const Objetive = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 350px;
    height: 350px;
  }
`;

export const SubObjetive = styled.div`
  display: grid;
  gap: 20px;
`;


export const StyledContainer = styled.div`
  width: 200px;
  border-radius: 6px;
  padding: 30px;
  margin-left: 40%;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  display: block;
  position: relative;
  border: 1px solid white;
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
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(21);
  }

`;
