import styled from "styled-components";

interface ITechButton {
  isActive: boolean;
}

export const Button = styled.button<ITechButton>`
  width: 100%;
  border: none;
  padding: 20px 0;
  font-size: 1.5rem;
  cursor: pointer;

  position: relative;

  transition: 0.3s linear;

  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.text};

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;

    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.secondary : "transparent"};

    transition: 0.3s linear;

    z-index: 2;
    left: 0;
    bottom: 0;
  }
`;
