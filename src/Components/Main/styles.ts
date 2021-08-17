import styled from 'styled-components'

export const Container = styled.div`
   padding: 3rem 5rem;
   flex: 4;
`

export const UpperSection = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   div {
      display: flex;
      align-items: center;
   }

   h1 {
      font-size: 2.2rem;
      margin-right: 0.5rem;
   }

   img {
      width: 3rem;
   }

   .my-order {
      color: var(--black);
      cursor: pointer;
      transition: color .2s ease;

      &:hover {
         color: var(--yellow);
      }

      p {
         margin-right: 0.8rem;
         font-size: 1.1rem;
      }

      .icon {
         font-size: 1.5rem;
      }
   }
`
export const FoodSection = styled.div`
   margin-top: 3rem;

   ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;


      li {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         background: var(--white);
         border-radius: 0.5rem;
         padding: 1rem;
         transition: filter .2s ease;
         cursor: pointer;
         text-align: center;

         &:hover {
            filter: brightness(0.9);
         }

         img {
            width: 10rem;
         }

         div {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
               font-size: 1.3rem;
            }

            h3 {
               font-size: 0.875rem;
               color: var(--gray);
            }
         }

         p {
            font-size: 2rem;
            font-weight: 600;
            color: var(--yellow);
            letter-spacing: 0.2rem;
         }
      }
   }
`