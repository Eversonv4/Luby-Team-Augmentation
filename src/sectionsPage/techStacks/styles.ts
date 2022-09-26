import styled from "styled-components";

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
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 300;

  text-align: center;
`;

export const StackContainer = styled.article``;

export const TechContainer = styled.div`
  display: flex;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
    z-index: 1;
    margin-top: -1px;
  }
`;

export const StackListContainer = styled.div`
  max-width: 1170px;
  width: 100%;
`;
