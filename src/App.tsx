import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

import { Main } from "./Components/Main";
import { Sidebar } from "./Components/Sidebar";
import { ProductModal } from './Components/ProductModal';

import { ProductsProvider } from './ProductsContext';
import { desserts, drinks, hamburgers, hotDogs, pizzas } from './utils/productsData';
import { createServer } from 'miragejs';

import { GlobalStyle } from "./styles/global";



createServer({
   routes() {
      this.namespace = 'api'

      this.get('hamburgers', () => hamburgers)

      this.get('hot-dogs', () => hotDogs)
      
      this.get('pizzas', () => pizzas)

      this.get('drinks', () => drinks)

      this.get('desserts', () => desserts)
   }
})

Modal.setAppElement('#root')

export function App() {
   const [isProductModalOpen, setIsProductModalOpen] = useState(false)

   function handleOpenProductModal() {
      setIsProductModalOpen(true)
   }

   function handleCloseProductModal() {
      setIsProductModalOpen(false)
   }

   return (
      <div className="App">

            <Sidebar />
            <Switch>
               <Route exact path='/'>
                  <Redirect to='/products/hamburgers'/>
               </Route>
               <Route path='/products/:id'>
                  <ProductsProvider>
                     <Main onOpenProductModal={handleOpenProductModal} />
                  </ProductsProvider>

               </Route>
            </Switch>
            <ProductModal
               isOpen={isProductModalOpen}
               onRequestClose={handleCloseProductModal}
            />
            <GlobalStyle />
      </div>
   );
}
