import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../ProductsContext'

import { Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faPizzaSlice, faHotdog, faGlassMartiniAlt, faIceCream } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.svg'


export function Sidebar() {
   const data = useContext(ProductsContext)

   console.log(data)

   return (
      <Container>
         <img src={logo} alt="React Food" />
         <nav>
            <ul>
               <li>
                  <Link to='/hamburgers'>
                     <FontAwesomeIcon icon={faHamburger} className="icon" />
                     <p>Hamburgers</p>
                  </Link>

               </li>
               <li>
                  <Link to='/hotDogs'>
                     <FontAwesomeIcon icon={faHotdog} className="icon" />
                     <p>Hot Dogs</p>
                  </Link>
               </li>
               <li>
                  <Link to='/pizzas'>
                     <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
                     <p>Pizzas</p>
                  </Link>
               </li>
               <li>
                  <Link to='/drinks'>
                     <FontAwesomeIcon icon={faGlassMartiniAlt} className="icon" />
                     <p>Drinks</p>
                  </Link>
               </li>
               <li>
                  <Link to='/desserts'>
                     <FontAwesomeIcon icon={faIceCream} className="icon" />
                     <p>Desserts</p>
                  </Link>
               </li>
            </ul>
         </nav>
      </Container>
   )
}