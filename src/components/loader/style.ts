import styled, { keyframes } from "styled-components";
import { theme } from "../../globals/theme";


export const LoadingWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const LoadingIndicator = styled.img`
  width: 270px;
  height: 270px;
  left: 50%;
  top: 50%;
  position: relative;
  margin-left: -135px;
  margin-top: -135px;
`;

