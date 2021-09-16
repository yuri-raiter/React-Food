import { useContext, useState } from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { IProductModal } from '../../types';
import { ClickedProductContext } from '../../contexts/ClickedProductContext';
import { MyOrderContext } from '../../contexts/MyOrderContext';

import { showToast } from '../../utils/toast';

import { Container } from './styles';
import { QuantityButtons } from '../QuantityButtons';


export function ProductModal({ isOpen, onRequestClose }: IProductModal) {
   const { clickedProduct } = useContext(ClickedProductContext)
   const { order, setOrder } = useContext(MyOrderContext)
   const [quantity, setQuantity] = useState<number>(0)


   function handleAddToOrder() {
      if (!order.some(o => o.id === clickedProduct.id)) {
         if (quantity === 0) {
            showToast({ type: 'warning', message: `You must choose how many ${clickedProduct.name} you want!` })
            return
         }
         setOrder(order => [...order, {...clickedProduct, quantity}])
      }
      else {
         showToast({ type: 'error', message: `You've already added ${clickedProduct.name} in your order!` })
      }

      onRequestClose()
      setQuantity(0)
      return
   }

   function dropQuantity(quantity: number) {
      return quantity > 0 && setQuantity(q => q - 1)
   }

   function increaseQuantity() {
      return setQuantity(q => q + 1)
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content product-modal-content"
      >
         {isOpen ? (
            <Container>
               <FontAwesomeIcon 
                  icon={faTimes} 
                  className="close-button" 
                  onClick={onRequestClose}
               />
               <div className="first-div">
                  <img src={clickedProduct.image} alt="" />
                  <h2>{clickedProduct.name}</h2>
               </div>
               <div className="second-div">
                  <h2>${clickedProduct.price.toFixed(2)}</h2>
                  <QuantityButtons quantity={quantity} dropQuantity={dropQuantity} increaseQuantity={increaseQuantity} />
               </div>
               <p>{clickedProduct.description}</p>
               <button onClick={handleAddToOrder}>Add to Order</button>
            </Container>
         ) : null}
      </Modal>
   )
}