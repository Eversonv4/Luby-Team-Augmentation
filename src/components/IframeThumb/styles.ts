import styled from "styled-components";

import { BsFillPlayCircleFill } from "react-icons/bs";

export const Container = styled.article`
  max-height: 506px;
  height: 506px;
  max-width: 900px;

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

  display: flex;
  align-items: center;
  justify-content: center;
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
`;
