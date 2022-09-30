import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_cards};
`;

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .splide__slide {
    width: 150px;
    cursor: grab;

    & img {
      width: 180px;

      @media (max-width: 1000px) {
        width: 140px;
      }

      @media (max-width: 800px) {
        width: 120px;
      }

      @media (max-width: 700px) {
        width: 160px;
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 0 25px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};

  font-weight: 400;
  font-size: 2rem;
  line-height: 2.25rem;
  text-align: left;

  padding: 60px 0;

  max-width: 250px;

  @media (max-width: 550px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const CarrosselContainer = styled.div`
  max-width: 860px;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 600px;
  }

  @media (max-width: 800px) {
    max-width: 540px;
  }

  @media (max-width: 700px) {
    max-width: 350px;
  }
`;
