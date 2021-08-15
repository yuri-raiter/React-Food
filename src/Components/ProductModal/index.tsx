import Modal from 'react-modal';

interface ProductModalProps {
   isOpen: boolean
   onRequestClose: () => void
}

export function ProductModal({ isOpen, onRequestClose }: ProductModalProps) {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
      >
         <h2>Chicken Burger</h2>
      </Modal>
   )
}