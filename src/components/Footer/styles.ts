import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_hover_dark};
`;

export const InfoContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 0;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 50px 20px;
  }
`;

export const InfoTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};

  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: bold;

  margin: 25px 0;
`;

export const AddressContainer = styled.div`
  max-width: 672px;

  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const AddressLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 15px;

  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export const AddressText = styled.address`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;

  font-style: normal;
`;

export const DivisorLine = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AddressNumber = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  line-height: 1.5rem;

  font-weight: bold;
`;

export const CopyrightContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_cards};
`;

export const CopyrightTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;

  padding: 15px 0;
`;
