import styled from "styled-components";

export const MainSection = styled.main`
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  font-weight: 400;
  max-width: 820px;
  text-align: center;
  text-shadow: 2px 2px 20px #000;
`;
