import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';

import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { ProductModal } from './components/ProductModal';
import { MyOrderModal } from './components/MyOrderModal';

import { desserts, drinks, hamburgers, hotDogs, pizzas } from './utils/productsData';
import { createServer } from 'miragejs';

import { GlobalStyle } from "./styles/global";

import { ClickedProductProvider } from './contexts/ClickedProductContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { MyOrderProvider } from './contexts/MyOrderContext';
import { ToastComponent } from './utils/toast';


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
   const [isMyOrderModalOpen, setIsMyOrderModalOpen] = useState(false)

   function handleOpenProductModal() {
      setIsProductModalOpen(true)
   }

   function handleOpenMyOrderModal() {
      setIsMyOrderModalOpen(true)
   }

   function handleCloseProductModal() {
      setIsProductModalOpen(false)
   }

   function handleCloseMyOrderModal() {
      setIsMyOrderModalOpen(false)
   }

   return (
      <div className="App">
         <Sidebar />
         <ClickedProductProvider>
            <Switch>
               <Route exact path='/'>
                  <Redirect to='/products/hamburgers' />
               </Route>
               <Route path='/products/:id'>
                  <ProductsProvider>
                     <Main
                        onOpenProductModal={handleOpenProductModal}
                        onOpenMyOrderModal={handleOpenMyOrderModal}
                     />
                  </ProductsProvider>
               </Route>
            </Switch>
            <MyOrderProvider>
               <ProductModal
                  isOpen={isProductModalOpen}
                  onRequestClose={handleCloseProductModal}
               />
               <MyOrderModal
                  isOpen={isMyOrderModalOpen}
                  onRequestClose={handleCloseMyOrderModal}
               />
            </MyOrderProvider>
         </ClickedProductProvider>
         <ToastComponent />
         <GlobalStyle />
      </div>
   );
}
