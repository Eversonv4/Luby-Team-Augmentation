import styled from "styled-components";

import { BsFillPlayCircleFill } from "react-icons/bs";

export const Container = styled.article`
  /* max-height: 506px; */
  max-width: 900px;
  height: 506px;

  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;

  background-image: url(/assets/background-sections/luby_banner.webp);
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

  border: 1px solid white;

  transition: 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 800px;
    height: 480px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    height: 360px;
  }

  @media (max-width: 600px) {
    max-width: 400px;
    height: 280px;
  }

  @media (max-width: 414px) {
    max-width: 320px;
    height: 150px;
  }
`;

export const PlayIcon = styled(BsFillPlayCircleFill)`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.bg_hover_dark};

    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (max-width: 414px) {
    font-size: 2rem;
  }
`;
