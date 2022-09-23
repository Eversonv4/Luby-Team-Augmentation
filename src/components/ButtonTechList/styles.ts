import styled from "styled-components";

interface Button {
  isActive: boolean;
}

export const Button = styled.button<Button>`
  width: 100%;
  border: none;
  padding: 20px 0;
  font-size: 1.5rem;
  cursor: pointer;

  transition: 0.3s linear;

  background-color: ${({ theme }) => theme.colors.bg_hover_dark};

  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.text};

  border-bottom: 4px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.secondary : "transparent"};
`;
