import styled, { keyframes } from "styled-components";

const FadeList = keyframes`
   from{
      opacity: 0;
   } 
   to{
      opacity: 1;
   }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(65px, auto);
  gap: 30px;
  padding: 20px;

  animation: ${FadeList} 1.5s ease;

  transition: 1s ease;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 667px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;
