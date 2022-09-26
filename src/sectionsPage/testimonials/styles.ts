import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 35px 0;
`;

export const ContainerCarrossel = styled.article`
  max-width: 960px;
  margin: 0 auto;
  max-height: 658px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 2rem;
  line-height: 2.625rem;

  text-align: center;
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.125rem;
  line-height: 1.5rem;

  text-align: center;

  margin-bottom: 40px;
`;

export const StatusContainer = styled.article`
  background-color: #1e293d;
  margin: 60px 0;
`;
