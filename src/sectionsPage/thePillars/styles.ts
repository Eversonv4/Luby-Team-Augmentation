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

export const ActionBtnContainer = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.manrope};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  & span {
    display: flex;
    align-items: center;

    border: 3px solid #fff;
    background-color: ${({ theme }) => theme.colors.bg_hover};
    padding: 15px 15px 15px 25px;
    width: fit-content;

    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover_button};
      transition: 0.6s ease;
    }
  }

  & svg {
    font-size: 18px;
    margin-left: 10px;
  }

  & a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: bold;
  }

  & h4 {
    font-weight: 300;
    width: 180px;
    margin-left: 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text_dark};
  }
`;
