import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_cards};
  max-height: 588px;
  height: 588px;
`;

export const ContainerLayout = styled.article`
  max-width: 1170px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 2.25rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 2.5rem;
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.125rem;
  font-weight: 300;

  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 1.5rem;
`;

export const TechContainer = styled.div``;
