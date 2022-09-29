import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_cards};
  padding: 60px 0;
`;

export const ContainerLayout = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.125rem;
`;

export const TitleHighlight = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #1d1d1f66;

  text-align: center;
`;

export const QuestionContainer = styled.div`
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
`;
