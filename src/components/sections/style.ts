import styled from "styled-components";

export const SectionWrapper = styled.section`
  position: relative;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: 110vh;
    padding-top: 64px;
  }
`;

export const SectionContent = styled.div`
  padding: 0 16px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;
