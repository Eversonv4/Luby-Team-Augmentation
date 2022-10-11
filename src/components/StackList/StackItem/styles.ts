import styled from "styled-components";

export const Item = styled.li`
  grid-column: span 1;
  grid-row: span 1;
  background-color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 10px;
  padding: 25px 0;

  transition: 0.6s cubic-bezier(0.42, 0, 0.58, 1);

  :hover {
    background-color: ${({ theme }) => theme.colors.bg_cards};
    color: ${({ theme }) => theme.colors.bg_hover};

    transition: 0.6s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.oswald};
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
  margin: 0;
  margin-top: 10px;

  text-align: center;
`;
