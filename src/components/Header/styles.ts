import styled from "styled-components";

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
`;

export const LogoImg = styled.img`
  max-width: 134px;
  max-height: 40px;
`;

export const NavList = styled.ul`
  display: flex;

  & li {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
    font-weight: 500;

    cursor: pointer;
    margin-left: 20px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: 0.5s ease;
    }
  }
`;
