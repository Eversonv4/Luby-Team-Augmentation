import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderLayout = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const LogoLuby = styled(Image)``;

export const NavList = styled.nav`
  & ul {
    display: flex;

    & li {
      color: ${({ theme }) => theme.colors.text};
      font-family: ${({ theme }) => theme.fonts.manrope};
      font-size: 16px;
      font-weight: 500;

      cursor: pointer;
      margin-left: 30px;

      a {
        color: inherit;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.5s ease;
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const IconMenu = styled(BiMenu)`
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  box-sizing: content-box;
  font-weight: bold;
  font-size: 28px;
  display: none;
  margin-left: 20px;

  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;
