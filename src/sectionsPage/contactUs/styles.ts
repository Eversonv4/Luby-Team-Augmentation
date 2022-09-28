import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 60px 0;
`;

export const ContainerLayout = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  display: flex;
`;

export const Span = styled.span`
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_dark + "88"};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 500;

  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4.0625rem;
`;

export const ContactTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 300;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 50px;
`;

export const FormContainer = styled.div``;
