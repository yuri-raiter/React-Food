import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   .close-button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem 1rem 0 0;
      font-size: 1.5rem;
      color: var(--black);
      cursor: pointer;
   }

   .first-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      img {
         width: 18rem;
         margin: auto;
      }

      h2 {
         font-size: 2.2rem;
      }
   }

   .second-div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0 1rem 0;

      h2 {
         font-size: 2.2rem;
         color: var(--yellow);
      }
   }

   p {
      font-size: 1.1rem;
      margin-bottom: 3rem;
   }

   button {
      outline: none;
      border: 0;
      border-radius: 2rem; 
      background: var(--yellow);
      padding: 0.6rem 6rem;
      font-size: 1.3rem;
      letter-spacing: 0.2rem;
      color: var(--white);
      box-shadow: 0 0.2rem 0.3rem var(--lighter-gray);
      transition: all .2s ease;

      &:hover {
         background: var(--on-hover-yellow);
      }
   }
`