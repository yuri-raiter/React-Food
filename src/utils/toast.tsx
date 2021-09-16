import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IShowToast } from '../types';


export function showToast(props: IShowToast) {
   const { type, message } = props

   switch (type) {
      case 'success':
         toast.success(message)
         break
      case 'warning':
         toast.warn(message)
         break
      case 'error':
         toast.error(message)
         break
   }

   return
}

export function ToastComponent() {
   return <ToastContainer 
      theme='colored'
      newestOnTop={true}
   />
}