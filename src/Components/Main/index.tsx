import { useContext } from "react"

import { ClickedProductContext, Product, ProductsContext } from "../../ProductsContext"

import { Container, FoodSection, UpperSection } from "./styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import hamburgerEmoji from '../../assets/emojis/hamburger.svg'
import hotDogEmoji from '../../assets/emojis/hot-dog.svg'
import pizzaEmoji from '../../assets/emojis/pizza.svg'
import drinkEmoji from '../../assets/emojis/drink.svg'
import dessertEmoji from '../../assets/emojis/dessert.svg'


interface MainProps {
   onOpenProductModal: () => void
}

export function Main({ onOpenProductModal }: MainProps) {
   const { products, id } = useContext(ProductsContext)
   const { setClickedProduct } = useContext(ClickedProductContext)

   console.log(products)

   function handleDisplaySectionTitle() {
      let title = ''
      let emoji = ''

      if (id === 'hamburgers') {
         title = 'Hamburgers'
         emoji = hamburgerEmoji
      }
      else if (id === 'hot-dogs') {
         title = 'Hot Dogs'
         emoji = hotDogEmoji
      }
      else if (id === 'pizzas') {
         title = 'Pizzas'
         emoji = pizzaEmoji
      }
      else if (id === 'drinks') {
         title = 'Drinks'
         emoji = drinkEmoji
      }
      else if (id === 'desserts') {
         title = 'Desserts'
         emoji = dessertEmoji
      }

      return <>
               <h1>{title}</h1>
               <img src={emoji} alt="" />
            </>
   }

   function handleProductClick(p: Product) {
      setClickedProduct(p)
      return onOpenProductModal()
   }

   return (
      <Container>
         <UpperSection>
            <div>
               {handleDisplaySectionTitle()}
            </div>
            <div className="my-order">
               <p>My order</p>
               <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
            </div>
         </UpperSection>

         <FoodSection>
            <ul>
               {products.map(p => (
                  <li key={p.id} onClick={() => handleProductClick(p)}>
                     <img src={p.image} alt={p.name} />
                     <div>
                        <h2>{p.name}</h2>
                        <h3>{p.weight}g</h3>
                     </div>
                     <p>${p.price.toFixed(2)}</p>
                  </li>
               ))}
            </ul>
         </FoodSection>
      </Container>
   )
}