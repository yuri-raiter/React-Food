import styled from "styled-components";

export const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;

   .close-button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
      color: var(--black);
      cursor: pointer;
   }

   .title {
      margin-bottom: 3rem;
   }
`

export const Content = styled.div`
   overflow-y: auto;
   overflow-x: hidden;
   flex: 1;
   margin-bottom: 3rem;

   .item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & + div {
         margin-top: 1rem;
      }

      img {
         width: 6rem;
      }

      .name-and-price {
         text-align: center;
         width: 30%;

         h3 {
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
         }

         h3:first-child {
            color: var(--black);
         }

         h3:nth-child(2) {
            color: var(--gray);
         }
      }

      p {
         color: var(--black);
      }

      h2 {
         color: var(--yellow);
         font-size: 1.5rem;
         width: 20%;
         text-align: center;
      }

      .trash {
         cursor: pointer;
         color: var(--gray);
         font-size: 1.3rem;
      }
   }
`

export const BottomContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      h3 {
         margin-right: 1rem;
         text-transform: uppercase;
         color: var(--lighter-gray);
         font-size: 1.1rem;
      }

      h2 {
         font-size: 3rem;
         color: var(--yellow);
      }
   }
`