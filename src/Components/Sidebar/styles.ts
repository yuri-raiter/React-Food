import styled from 'styled-components'

export const Container = styled.div`
   height: 100vh;
   padding: 1.5rem 0;
   border-right: 2px solid var(--sidebar-border-gray);
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;

   nav {
      padding: 0 1rem;
      margin-top: 4rem;
      width: 100%;

      div {
         //list-style: none;
         display: flex;
         flex-direction: column;

         a {
               display: flex;
               justify-content: space-between;
               align-items: center;
               text-decoration: none;
               padding: 0.8rem 1.5rem;
               background: var(--white);
               border: 3px solid transparent;
               border-radius: 0.25rem;

               & + a {
                  margin-top: 1rem;
               }

               &:hover {
                  border: 3px solid var(--red);
               }
               
               p {
                  font-size: 0.875rem;
                  font-weight: 400;
                  letter-spacing: 0.1rem;
               }

               p, .icon {
                  color: var(--black);
               }

               .icon {
                  font-size: 1.5rem;
               }
            }

         /*li {
            border: 3px solid transparent;
            cursor: pointer;
            transition: border .2s ease;

            & + li {
               margin-top: 1rem;
            }

            &:hover {
               border: 3px solid var(--red);
            }

            &:active {
               border: 3px solid var(--red);
            }

            .active {
               .icon, p {
                  color: var(--red);
               }
               
               p {
                  font-weight: 500;
               }
            }

            
         }*/
      }

      .active {
         border: 3px solid var(--red);

         .icon, p {
            color: var(--red);
         }
                  
         p {
            font-weight: 500;
         }
      }
   }
`
