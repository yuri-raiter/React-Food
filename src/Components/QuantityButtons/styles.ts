import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 15%;

   p {
      font-size: 1.2rem;
      margin: 0 0.7rem;
   }

   .icon {
      font-size: 1.2rem;
      color: var(--red);
      cursor: pointer;
      transition: filter .2s ease;

      &:hover {
         filter: brightness(0.8);
      }
   }
`