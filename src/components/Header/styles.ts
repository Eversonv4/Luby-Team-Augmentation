import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

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
    justify-content: flex-start;
  }
`;

export const NavList = styled.nav`
  & ul {
    display: flex;

    @media (max-width: 1024px) {
      display: none;
    }

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
