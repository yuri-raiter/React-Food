import { Container, Logo } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faPizzaSlice, faHotdog, faGlassMartiniAlt, faIceCream } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.svg'


export function Sidebar() {
   return (
      <Container>
         <Logo src={logo} alt="React Food" />
         <nav>
            <ul>
               <li>
                  <FontAwesomeIcon icon={faHamburger} className="icon"/>
                  <p>Hamburgers</p>
               </li>
               <li>
                  <FontAwesomeIcon icon={faHotdog} className="icon"/>
                  <p>Hot Dogs</p>
               </li>
               <li>
                  <FontAwesomeIcon icon={faPizzaSlice} className="icon"/>
                  <p>Pizzas</p>
               </li>
               <li>
                  <FontAwesomeIcon icon={faGlassMartiniAlt} className="icon"/>
                  <p>Drinks</p>
               </li>
               <li>
                  <FontAwesomeIcon icon={faIceCream} className="icon"/>
                  <p>Desserts</p>
               </li>
            </ul>
         </nav>
      </Container>
   )
}