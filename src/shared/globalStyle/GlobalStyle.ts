import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   body {
      background-color: #383838;
      
   }

   cursor: pointer;

   /* fonts */
   /* 
      font-family: "Manrope", sans-serif;

      font-family: "Oswald", sans-serif;
   */
`;
