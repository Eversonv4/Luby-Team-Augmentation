import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding-top: 50px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.text_dark};

  text-align: center;
  margin-bottom: 15px;

  transition: 0.7s ease;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.5rem;

  max-width: 940px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const CardsContainer = styled.div`
  color: ${({ theme }) => theme.colors.text_dark};

  max-width: 1170px;
  margin: 50px auto 0;
  padding-bottom: 50px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(85px, auto);
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 0 30px 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(50px, auto);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(35px, auto);
  }
`;

export const Card = styled.div`
  grid-column: span 1;
  grid-row: span 4;

  background-color: ${({ theme }) => theme.colors.bg_cards};

  border-radius: 6px;
  overflow: hidden;

  & svg,
  & image {
    width: 51px;
    height: 48px;
    z-index: 0;

    margin-bottom: 20px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.bg_hover_dark};
    color: ${({ theme }) => theme.colors.text};

    transition: background-color 0.6s cubic-bezier(0.42, 0, 0.58, 1);

    & image {
      filter: invert(1);
    }
  }
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;

export const TitleCard = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.875rem;

  background-color: transparent;

  text-align: center;

  margin-bottom: 10px;

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionCard = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope};
  text-align: center;

  background-color: transparent;

  font-size: 18px;
  line-height: 24px;

  font-weight: 300;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
