import styled, { keyframes } from "styled-components";

const AnimateOpacity = keyframes`
    from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
`;

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

  transition: 0.7s ease;

  @media (max-width: 360px) {
    height: 815px;
  }
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
  font-family: ${({ theme }) => theme.fonts.oswald};

  font-size: 3.75rem;
  text-align: center;
  text-shadow: 2px 2px 20px #000;

  margin-top: 100px;

  animation-name: ${AnimateOpacity};
  animation-duration: 1.5s;

  @media (max-width: 540px) {
    font-size: 3rem;
  }

  @media (max-width: 424px) {
    font-size: 2.8rem;
    padding: 0 15px;
  }
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.oswald};

  font-size: 2rem;
  text-shadow: 2px 2px 20px #000;

  animation-name: ${AnimateOpacity};
  animation-duration: 1.4s;

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.h3`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};

  font-weight: 300;
  max-width: 820px;
  text-align: center;
  text-shadow: 2px 2px 20px #000;

  animation-name: ${AnimateOpacity};
  animation-duration: 1.4s;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
`;

export const ActionBtnContainer = styled.div`
  animation-name: ${AnimateOpacity};
  animation-duration: 1.4s;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.manrope};
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  & span {
    display: flex;
    align-items: center;

    border: 2px solid white;
    background-color: ${({ theme }) => theme.colors.bg_hover};
    padding: 15px 25px;
    width: fit-content;

    font-weight: bold;
    font-size: 1.125rem;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover_button};
      transition: 0.6s ease;
    }

    @media (max-width: 400px) {
      width: fit-content;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 15px;
    }
  }

  & h4 {
    font-weight: 500;
    width: 180px;
    margin-left: 20px;
    font-size: 18px;

    @media (max-width: 400px) {
      margin-left: 0;
      text-align: center;
      width: 300px;
    }
  }

  @media (max-width: 400px) {
    display: block;
    margin: 15px auto;
  }
`;
