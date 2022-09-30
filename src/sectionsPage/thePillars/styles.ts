import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 60px 0;
`;

export const Title = styled.h2`
  max-width: 900px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: 2.25rem;
  line-height: 2.625rem;
  font-weight: 400;

  margin: 0 auto;
`;

export const SubTitle = styled.h3`
  max-width: 900px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.5rem;

  margin: 0 auto 50px;
`;

export const ButtonContrast = styled.span`
  display: block;
  margin: 30px auto;
  padding: 15px 25px;
  width: fit-content;

  border: 2px solid white;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg_hover};

  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.125rem;
  text-align: center;

  transition: 0.6s ease;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.hover_button};
  }
`;
