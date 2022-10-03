import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding-top: 40px;
`;

export const ContainerCarrossel = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.625rem;

  text-align: center;
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 300;

  text-align: center;

  margin-bottom: 40px;
`;

export const StatusContainer = styled.div`
  background-color: #1e293d;
  margin-top: 60px;
`;

export const StatusContainerLayout = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  padding: 60px 0;

  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1024px) {
    padding: 60px 30px;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const StatusTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  line-height: 2.25rem;
  font-weight: 400;

  text-transform: uppercase;

  max-width: 415px;

  & strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
  }

  @media (max-width: 870px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const StatusSubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.875rem;

  margin: 0;
  margin-top: 50px;
  max-width: 500px;

  @media (max-width: 870px) {
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }
`;

export const AchievementTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.5rem;
  line-height: 1.65rem;
  font-weight: 300;

  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 380px;

  margin: 0;
  margin-bottom: 40px;

  & strong {
    font-size: 2.375rem;
    font-family: ${({ theme }) => theme.fonts.oswald};

    @media (max-width: 510px) {
      font-size: 1.8rem;
    }
  }

  & span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.375rem;
    font-weight: bold;
    margin-right: 20px;
  }

  @media (max-width: 870px) {
    margin-top: 30px;
    margin-bottom: 20px;
    max-width: 100%;
  }
`;

export const ClutchIcon = styled.img`
  margin-left: 25px;
  @media (max-width: 870px) {
    margin: 0 auto;
  }
`;
