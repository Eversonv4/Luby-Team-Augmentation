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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(65px, auto);
  gap: 30px;
  padding: 20px 25px;

  animation: ${FadeList} 1.5s ease;
`;
