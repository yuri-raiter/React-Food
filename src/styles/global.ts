import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --background: #f6f6f8;
      --red: #bd1e51;
      --yellow: #f1b814;
      --black: #323232;
      --white: #fff;
      --gray: #767676;
      --lighter-gray: #c3c3c3;
      --sidebar-border-gray: #e3e3e3;
   }
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      @media (max-width: 1080px) {
         font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
         font-size: 87.5%; // 14px
      }
   }

   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
   }

   body, input {
      font-family: 'Poppins', sans-serif;
   }

   button {
      cursor: pointer;
   }

   h1, h2 {
      font-weight: 600;
   }

   h3 {
      font-weight: 500;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }
`