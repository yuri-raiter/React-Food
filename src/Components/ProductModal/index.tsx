import { useContext } from 'react';
import Modal from 'react-modal';

import { ClickedProductContext } from '../../ProductsContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles';

interface ProductModalProps {
   isOpen: boolean
   onRequestClose: () => void
}

export function ProductModal({ isOpen, onRequestClose }: ProductModalProps) {
   const { clickedProduct } = useContext(ClickedProductContext)

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
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
                  <div className="buttons-div">
                     <FontAwesomeIcon icon={faMinusCircle} className="icon" />
                     <p>1</p>
                     <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                  </div>
               </div>
               <p>{clickedProduct.description}</p>
               <button>Add to Order</button>
            </Container>
         ) : null}
      </Modal>
   )
}