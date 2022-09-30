import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

interface IActiveMenu {
  isActive: boolean;
}

const AnimateOpacity = keyframes`
    from {
				opacity: 0;
			}
			to {
				opacity: 1;
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

const SlideInAnimation = keyframes`
   from {
      right: -360px;
   }

   to {
      right: 0;
   }
`;

const SlideOutAnimation = keyframes`
from {
   right: 0;
}

to {
   right: -360px;
}
`;

export const Container = styled.section<IActiveMenu>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;

  /* background-color: rgba(0, 0, 0, 0.15);
   */

  right: ${({ isActive }) => (isActive ? 0 : "-100vw")};

  transition: 0.7s linear;

  animation: ${FadeinEffect} 1s linear;

  z-index: 3;
`;

export const BackgroundBlur = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 4;
`;

export const AsideMenuContainer = styled.div<IActiveMenu>`
  background-color: ${({ theme }) => theme.colors.text};

  height: 100vh;
  width: 360px;

  position: absolute;
  top: 0;

  right: ${({ isActive }) => (isActive ? 0 : "-360px")};

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

export const NavList = styled.nav``;

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

// Contact Us Button
export const ActionBtnContainer = styled.div`
  animation-name: ${AnimateOpacity};
  animation-duration: 1.4s;

  margin: 0 auto;
  display: block;
  max-width: fit-content;

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
