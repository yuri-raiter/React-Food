import { Container, FoodSection, UpperSection } from "./styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import hamburgerEmoji from '../../assets/emojis/hamburger.svg'
import chickenBurger from '../../assets/chickenBurger.png'

export function Main() {
   return (
      <Container>
         <UpperSection>
            <div>
               <h1>Hamburgers</h1>
               <img src={hamburgerEmoji} alt="hamburger emoji" />
            </div>
            <div className="my-order">
               <p>My order</p>
               <FontAwesomeIcon icon={faShoppingBasket} className="icon"/>
            </div>
         </UpperSection>
         
         <FoodSection>
            <ul>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
               <li>
                  <img src={chickenBurger} alt="chicken burger" />
                  <div>
                     <h2>Chicken Burger</h2>
                     <h3>300g</h3>
                  </div>
                  <p>$4.50</p>
               </li>
            </ul>
         </FoodSection>
      </Container>
   )
}