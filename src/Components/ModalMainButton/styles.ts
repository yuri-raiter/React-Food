import styled from "styled-components";

export const Button = styled.button`
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
`