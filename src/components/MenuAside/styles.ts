import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

interface IActiveMenu {
  isActive: boolean;
}

const FadeoutEffect = keyframes`
    from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
`;

const FadeinEffect = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`;

export const Container = styled.section<IActiveMenu>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  right: 0;

  z-index: ${({ isActive }) => (isActive ? 3 : -1)};

  transition: 0.6s linear;

  animation: ${({ isActive }) => (isActive ? FadeinEffect : FadeoutEffect)} 0.6s
    linear;

  background-color: rgba(0, 0, 0, 0.45);

  @media (max-width: 360px) {
  }
`;

export const AsideMenuContainer = styled.div<IActiveMenu>`
  position: fixed;
  overflow: auto;

  background-color: ${({ theme }) => theme.colors.text};

  height: 100vh;
  width: 360px;

  top: 0;

  right: ${({ isActive }) => (isActive ? 0 : "-360px")};
  opacity: 1;

  z-index: 5;

  transition: right 0.5s linear;
`;

export const MenuContent = styled.div`
  height: 100vh;
`;

export const CloseMenuIcon = styled(IoMdClose).attrs({
  size: 25,
})`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

export const NavList = styled.nav`
  padding: 40px 0;
`;

export const NavText = styled.span`
  display: block;
  margin: 30px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
`;

export const NavTextContrast = styled.span`
  display: block;
  margin: 30px auto;
  padding: 15px 25px;
  width: fit-content;

  border: 2px solid white;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg_hover};

  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.125rem;
  text-align: center;

  transition: 0.6s ease;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.hover_button};
  }
`;
