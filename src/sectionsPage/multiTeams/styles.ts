import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_cards};

  padding: 80px 0;
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

  max-width: 870px;
  margin: 0 auto;
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.125rem;
  font-weight: 300;

  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 1.5rem;

  max-width: 870px;
  margin: 20px auto 0;
`;

export const TechContainer = styled.article`
  max-width: 1170px;
  margin: 50px auto 0;
`;

export const TeamsListContainer = styled.div`
  width: 100%;

  display: flex;
`;

export const TechlistContainer = styled.div`
  max-width: 1170px;
  width: 100%;
`;
