import { useContext } from 'react';
import Modal from 'react-modal';

import { MyOrderContext } from '../../contexts/MyOrderContext';
import { IMyOrderModal, IOrder } from '../../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'

import { BottomContainer, Container, Content } from './styles';
import { QuantityButtons } from '../QuantityButtons';
import { ModalMainButton } from '../ModalMainButton';


export function MyOrderModal({ isOpen, onRequestClose }: IMyOrderModal) {
   const { order, setOrder } = useContext(MyOrderContext)

   function dropQuantity(quantity: number, id?: number) {
      return quantity > 1 && setOrder(ar => ar.map(
         o => o.id === id ? {
            ...o,
            quantity: o.quantity - 1
         } : o
      ))
   }

   function increaseQuantity(id?: number) {
      return setOrder(ar => ar.map(
         o => o.id === id ? {
            ...o,
            quantity: o.quantity + 1
         } : o
      ))
   }

   function handleTotal(o: IOrder) {
      return (o.price * o.quantity)
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content my-order-modal-content"
      >
         <Container>
            <FontAwesomeIcon
               icon={faTimes}
               className="close-button"
               onClick={onRequestClose}
            />
            <h2 className="title">My Order</h2>
            <Content>
               {order.map(o => (
                  <div key={o.id} className="item">
                     <img src={o.image} alt="" />
                     <div className="name-and-price">
                        <h3>{o.name}</h3>
                        <h3>${o.price.toFixed(2)}</h3>
                     </div>
                     <QuantityButtons id={o.id} quantity={o.quantity} dropQuantity={dropQuantity} increaseQuantity={increaseQuantity} />
                     <h2>${handleTotal(o).toFixed(2)}</h2>
                     <FontAwesomeIcon icon={faTrash} className="trash" />
                  </div>
               ))}
            </Content>
            <BottomContainer>
               <ModalMainButton text="Checkout" />
               <div>
                  <h3>Total</h3>
                  <h2>$
                     {order.reduce((total, o) => {
                        return handleTotal(o) + total
                     }, 0).toFixed(2)}
                  </h2>
               </div>
            </BottomContainer>
         </Container>
      </Modal>
   )
}