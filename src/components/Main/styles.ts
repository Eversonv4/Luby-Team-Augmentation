import styled from "styled-components";

export const MainSection = styled.main`
  height: 770px;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  position: relative;

  background: linear-gradient(
    270deg,
    rgba(30, 41, 61, 0) 25%,
    rgba(0, 0, 0, 0.7) 75%
  );
`;

export const BgImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main_title};

  font-size: 60px;
  text-shadow: 2px 2px 20px #000;

  margin-top: 100px;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main_title};

  font-size: 32px;
  text-shadow: 2px 2px 20px #000;
`;

export const Description = styled.h4`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  font-weight: 300;
  max-width: 820px;
  text-align: center;
  text-shadow: 2px 2px 20px #000;
`;

export const ActionBtnContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  & span {
    display: flex;
    align-items: center;

    border: 2px solid white;
    background-color: ${({ theme }) => theme.colors.bg_hover};
    padding: 15px 15px 15px 25px;
    width: fit-content;

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
    font-weight: 500;
    width: 180px;
    margin-left: 20px;
    font-size: 18px;
  }
`;
