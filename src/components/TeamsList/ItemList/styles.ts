import styled from "styled-components";

export const Item = styled.li`
  grid-column: span 1;
  grid-row: span 1;
  background-color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: 25px 0;

  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.875;

  :hover {
    background-color: ${({ theme }) => theme.colors.bg_hover_dark};
    color: ${({ theme }) => theme.colors.text};

    transition: background-color 0.6s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
