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
      --on-hover-white: #e5e5e5;
      --on-hover-yellow: #d8a512;

      --toastify-color-success: #11998e;
      --toastify-color-error: #bd1e51;
      --toastify-color-warning: #f1b814;
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
      letter-spacing: 0.2rem;
   }

   h3 {
      font-weight: 500;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   .App {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
   }

   .react-modal-overlay{
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .react-modal-content {
      background: var(--white);
      padding: 1rem 3rem;
      position: relative;
      border-radius: 0.25rem;
      outline: 0;
   }

   .product-modal-content {
      width: 100%;
      max-width: 576px;
   }

   .my-order-modal-content {
      width: 100%;
      max-width: 70vw;
      height: 65vh;
   }
`