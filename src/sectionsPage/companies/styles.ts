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

  /* & .splide__arrows {
    display: none;
  } */

  & .splide__slide {
    width: 150px;

    & img {
      width: 180px;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};

  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  text-align: left;

  padding: 60px 0;

  max-width: 250px;
`;

export const CarrosselContainer = styled.div`
  max-width: 860px;
  overflow: hidden;
`;
