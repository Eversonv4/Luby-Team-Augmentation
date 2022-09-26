import styled from "styled-components";

interface IButton {
  isActive: boolean;
}

export const Button = styled.button<IButton>`
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 500;

  text-align: center;
  cursor: pointer;

  transition: 0.3s linear;

  background-color: ${({ theme }) => theme.colors.bg_hover_dark};

  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.text};

  position: relative;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.secondary : "transparent"};

    z-index: 3;
  }
`;
