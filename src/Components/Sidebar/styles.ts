import styled from 'styled-components'

export const Container = styled.div`
   width: 330px;
   height: 100vh;
   padding: 1.5rem 0;
   border-right: 2px solid var(--sidebar-border-gray);

   nav {
      padding: 0 1rem;
      margin-top: 4rem;

      ul {
         list-style: none;

         li {
            background: var(--white);
            border-radius: 0.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 1.5rem;
            border: 3px solid transparent;
            cursor: pointer;
            transition: border .2s ease;

            & + li {
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
      }
   }
`

export const Logo = styled.img`
   display: block;
   margin: 0 auto;
`
