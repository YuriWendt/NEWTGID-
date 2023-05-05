import styled from "styled-components";

export const SectionWrapper = styled.section`
  height: 120vh;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding-top: 64px;
  }
`;

export const SectionContent = styled.div`
  max-width: 100%;
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const SectionImage = styled.img`
  max-width: 100%; /* Define a largura máxima como 100% */
  height: auto; /* Define a altura como automática para manter a proporção */
`;