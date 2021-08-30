import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faPizzaSlice, faHotdog, faGlassMartiniAlt, faIceCream } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.svg'

import { Container } from './styles'


export function Sidebar() {
   return (
      <Container>
         <img src={logo} alt="React Food" />
         <nav>
            <div>
                  <NavLink to='/products/hamburgers' activeClassName="active">
                     <FontAwesomeIcon icon={faHamburger} className="icon" />
                     <p>Hamburgers</p>
                  </NavLink>

                  <NavLink to='/products/hot-dogs' activeClassName="active">
                     <FontAwesomeIcon icon={faHotdog} className="icon" />
                     <p>Hot Dogs</p>
                  </NavLink>

                  <NavLink to='/products/pizzas' activeClassName="active">
                     <FontAwesomeIcon icon={faPizzaSlice} className="icon" />
                     <p>Pizzas</p>
                  </NavLink>

                  <NavLink to='/products/drinks' activeClassName="active">
                     <FontAwesomeIcon icon={faGlassMartiniAlt} className="icon" />
                     <p>Drinks</p>
                  </NavLink>
                  
                  <NavLink to='/products/desserts' activeClassName="active">
                     <FontAwesomeIcon icon={faIceCream} className="icon" />
                     <p>Desserts</p>
                  </NavLink>
            </div>
         </nav>
      </Container>
   )
}