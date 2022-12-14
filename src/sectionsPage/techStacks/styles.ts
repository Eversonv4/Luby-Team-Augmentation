import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_hover_dark};

  padding: 60px 0 40px;
`;

export const ContainerLayout = styled.article`
  max-width: 1170px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.25rem;
  line-height: 2.625rem;
  font-weight: 400;

  text-align: center;
  margin-bottom: 15px;

  @media (max-width: 420px) {
    font-size: 1.9rem;
    line-height: 2.2rem;
  }
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 300;

  text-align: center;

  @media (max-width: 420px) {
    font-size: 1rem;
    line-height: 1.2rem;

    padding: 0 10px;
  }
`;

export const StackContainer = styled.article`
  overflow: auto;
`;

export const TechContainer = styled.div`
  display: flex;
  position: relative;

  min-width: 900px;

  &:before {
    content: "";
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
    z-index: 1;
  }

  @media (max-width: 1024px) {
    overflow: auto;
  }

  & button {
    width: 100%;
    padding: 20px 0;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 500;
  }
`;

export const StackListContainer = styled.div`
  max-width: 1170px;
  width: 100%;
`;
